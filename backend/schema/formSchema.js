const mongoose = require("mongoose");
const { Schema } = mongoose;

const FormSchema = new mongoose.Schema({  //'new mongoose.Schema' likho ya 'new Schema' likho

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true
    },
    addline1: {
        type: String,
        required: true
    },
    addline2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    }
},
    {
        versionKey: false
    });

module.exports = mongoose.model("aplform", FormSchema);