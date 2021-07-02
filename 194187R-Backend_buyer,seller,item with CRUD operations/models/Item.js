const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({

    itemID : {
        type : String,
        required: true
    },
    itemName:{
        type: String,
        required: true
    },


    unitCount : {
        type : Number,
        required: true
    },
    unitPrice:{
        type: Number,
        required: true
    }

})

const item = mongoose.model("item",itemSchema);

module.exports = item;