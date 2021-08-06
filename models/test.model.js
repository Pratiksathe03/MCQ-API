const mongoose = require('mongoose');
// var AutoIncrement = require('mongoose-sequence')(mongoose);

const testSchema= new mongoose.Schema({
    id :{
        type : String,
        required : true
    },
    Email :{
        type : String,
        required : true
    },
    IsActive:{
        type: Boolean,
        required: true,
        default : true
    },
    Name:{
        type: String,
        required:true,   
    },
    Duration:{
        type: String,
        required:true,   
    },
    Questions:{
        type: Array,
        required:true,   
    }
    
}, {
    timestamps: true
  });

//   userSchema.plugin(AutoIncrement, {id:'userID_seq',inc_field: 'ID'});
module.exports = mongoose.model('tests',testSchema);