const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema= new mongoose.Schema({
    Id :{   // userid
        type : Number,
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
    Name:{   // user name
        type: String,
        required:true,   
    },
    Test:[{  
            "_id":false,  
            "Id" : {type: String,   // test id
                    default : "Test_01"
            },
            "Score":{type: Number},
            "Duration":{type: String},
            "TotalMarks":{type: Number},
            "Result":{type:String},
            "Questions":{type:Array}
    }]
}, {    timestamps: true
  });

  userSchema.plugin(AutoIncrement, {id:'usersID_seq',inc_field: 'Id'});


module.exports = mongoose.model('users',userSchema);