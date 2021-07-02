const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sellerSchema = new Schema({

    userID : {
        type : String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },

    email : {
        type : String,
        required: true
    },
    telephone:{
        type: Number,
        required: true,
    },
    NIC:{
         type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    }

})

const seller = mongoose.model("seller",sellerSchema);

module.exports = seller;