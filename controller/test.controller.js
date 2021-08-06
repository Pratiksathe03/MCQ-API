const testService = require("../service/test.service.js");
const testValidator = require("../validation/test.validation");

exports.getTestDetails = (req, res) => {
  try {
    const data = req.params;
    console.log("===============",data)
    const  validation = testValidator.ValidateTest(data)
    if (validation && validation.error) {    
        throw new Error(validation.error.message)
    } else {
        testService
        .GetTestDetailsByTestID(data.id)
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
