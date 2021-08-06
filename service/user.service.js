const user = require("../models/users.model.js");

exports.SaveUser = data => {
  return new Promise((resolve, reject) => {
    const saveObj = {
      Email: data.Email.toLowerCase(),
      Name: data.Name,
      Test:[{
          "Id":"test_01"   // default id save
      }]
    };
    user
      .findOne({
        Email: data.Email.toLowerCase()
      })
      .then(result => {
        if (result) {
          let user = {
            Name: result.Name,
            Email: result.Email,
            Test: result.Test.length>0 ? result.Test[0]:{},
            Id: result.Id
          };
          resolve({
            status: 200,
            message: "user already present",
            result: user
          });
        } else {
          user
            .create(saveObj)
            .then(result => {
              let user = {
                Name: result.UserName,
                Email: result.Email,
                Test: result.Test.length>0 ? result.Test[0]:{},
                Id: result.Id
              };
              resolve({
                status: 200,
                message: "user added successfully",
                result: user
              });
            })
            .catch(error => {
              reject({
                status: 404,
                message: error.message || "Internal Server error"
              });
            });
        }
      });
  });
};

exports.updateUserTest = (data) => {
    return new Promise((resolve, reject) => {
       let saveObj={
           Id: data.Test.id,
           "Score": data.Test.Score,
        //    "TotalMarks":data.Test.TotalMarks,
           "Result":data.Test.Result,
           "Questions":data.Test.Questions
       } 

      let updateObj = {
        "Test.$.Score": data.Test.Score,
        "Test.$.TotalMarks":data.Test.TotalMarks,
        "Test.$.Result":data.Test.Result,
        "Test.$.Questions":data.Test.Questions
      };
      if(data.Questions!=undefined){
        saveObj.Questions=data.Test.Questions
        updateObj["Test.$.Questions"]=data.Test.Questions
       }

      let findQuery={
        '$elemMatch': { "Id": data.Test.id}
      }
      user.updateOne(
        {
         "Id":data.Id,
         "Test.Id":{"$exists":true},
         "Test": findQuery
        },
        {
          $set: updateObj
        }
      ).then(result=>{

        if(result && result.nModified>0){
            resolve({
                status: 200,
                message: "user score updated successfully",
                result: result
              });
        }else{
            user.updateOne(
                {
                 "Id":data.Id,
                },
                {
                    "$set":{
                        "Test":{
                            $push:saveObj
                        }                        
                    }
               
                }
              ).then(resultUpdate=>{
                resolve({
                    status: 200,
                    message: "user score added successfully",
                    result: resultUpdate
                  });
              })
        }
      }).catch(error=>{
        reject({
            status: 404,
            message: error.message || "Internal Server error"
          });
      })
    });
  };




