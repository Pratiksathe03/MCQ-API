const test = require('../models/test.model.js');

exports.GetTestDetailsByTestID = (TestId)=>{
    return new Promise((resolve,reject)=>{
      test.findOne({
       id:TestId
      },{
        _id:false,
        id:true,
       Name:true,
       Duration:true,
       Questions:true ,
       TotalMarks:true 
      }).then(result => {
            resolve({
                status:200,
                message:"Test Details Found Successfully",
                result:result
            });
      }).catch(error=>{
        reject({
            status:404,
            message:error.message || "Internal Server error"
        }) 
      })
    })
}