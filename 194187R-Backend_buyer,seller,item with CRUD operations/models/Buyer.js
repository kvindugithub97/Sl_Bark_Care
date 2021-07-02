const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buyerSchema = new Schema({

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
        required: true
    }

})

const buyer = mongoose.model("buyer",buyerSchema);

module.exports = buyer;