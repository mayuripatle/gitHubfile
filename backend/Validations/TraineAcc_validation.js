const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({ 
  amount: Joi.string().alphanum().min(3).max(30).required(),
  salary: Joi.number().required(), 
  balance: Joi.number().required(),
  date : Joi.number(),
  trainer_id : Joi.number().required()
  
}); 


exports.validateSchema = validator(validateSchema)