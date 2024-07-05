const express = require('express');
const connectToMongo = require('./database');
require('dotenv').config();
const cors = require('cors');
const port = 5000;
const app = express()

app.use(cors({
  origin:'*',
  methods: "GET,POST,PUT,DELETE",
  headers: "Content-Type, auth-token",
  credentials: true
}))

app.use(express.json());

//call the database through client()
connectToMongo();

app.get('/', (req, res) => {
  try {
    res.status(200).json({ msg: "I am in home route" });
  } catch (error) {
    res.status(500).json({ msg: "Error in home route" });
  }
});

app.use('/api/', require('./routes/formRouter'));
app.listen(port, () => {
  console.log(`backend app listening on port http://localhost:${port}`)
});