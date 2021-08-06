const userService = require("../service/user.service.js");
const userValidator = require("../validation/user.validation");

exports.updateUser = (req, res) => {
  try {
    const data = req.body;
    const  validation = userValidator.ValidateUser(data)
    if (validation && validation.error) {    
        throw new Error(validation.error.message)
    } else {
      userService
        .SaveUser(data)
        .then(result => {
          res.status(200).send(result);
        })
        .catch(error => {
          res.status(500).send(error);
        });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error.message || "Internal Server Error"
    });
  }
};


exports.updateUserTestScore = (req, res) => {
  try {
    const data = req.body;
    const  validation = userValidator.ValidateUserTestScore(data)
    if (validation && validation.error) {    
        throw new Error(validation.error.message)
    } else {
      userService
        .updateUserTest(data)
        .then(result => {
          res.status(200).send(result);
        })
        .catch(error => {
          res.status(500).send(error);
        });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error.message || "Internal Server Error"
    });
  }
};
