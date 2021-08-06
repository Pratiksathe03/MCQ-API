const Joi =  require('joi');


exports.ValidateTest=(data)=>{
    try{
        const schema = Joi.object().keys({
            id: Joi.string.required()
            .error(new Error("Provide id(number)")),
          });
      
          return schema.validate(data);
    }catch(e){
        return e
    }
}