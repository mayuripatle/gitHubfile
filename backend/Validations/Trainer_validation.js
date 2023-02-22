const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({
  first_name: Joi.string().alphanum().min(3).max(30).required(),
  last_name: Joi.string().required(), 
  email:Joi.string().email().required(),
  phone:Joi.number().required()
});


exports.validateSchema = validator(validateSchema)