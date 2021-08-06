const Joi =  require('joi');


exports.ValidateUser=(data)=>{
    try{
        const schema = Joi.object().keys({
            Email: Joi.string()
              .required()
              .error(new Error("Provide Email(String)")),
            Name: Joi.string()
              .required()
              .error(new Error("Provide UserName(String)")),
            IsActive: Joi.number().optional()
          });
          return schema.validate(data);
    }catch(e){
        return e
    }
}

exports.ValidateUserTestScore=(data)=>{
  try{
      const schema = Joi.object().keys({
        Name:Joi.string()
        .optional()
        .error(new Error("Provide Name(String)")),
        Email:Joi.string()
        .optional()
        .error(new Error("Provide Email(String)")),
        Test: Joi.object().optional()
        .error(new Error("Provide Questions(String)")),
        Id:Joi.number()
        .required()
        .error(new Error("Provide Id(Number)")),
          // Score: Joi.Number().required()
          // .error(new Error("Provide Score(String)")),
          // Questions: Joi.Array().optional()
          // .error(new Error("Provide Questions(String)")),
          // TotalMarks: Joi.Number().required()
          // .error(new Error("Provide TotalMarks(String)")),
          // Result:Joi.String().required()
          //   .error(new Error('Provide Result(String'))
        });
        return schema.validate(data);
  }catch(e){
      return e
  }
}