const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  //email: Joi.email().required(), 
  passward: Joi.string().required(),
  phone: Joi.number().integer().required()
});


exports.validateSchema = validator(validateSchema)