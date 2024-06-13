const mongoose = require('mongoose');

const Database = mongoose.Schema({
    name:{
        type:String
    }, 
    price:{
        type:String
    }, 
    location:{
        type:String
    }
});

module.exports = mongoose.model("property", Database);