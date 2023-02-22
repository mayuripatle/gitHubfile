const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({ 
  first_name: Joi.string().min(3).max(30).required(),
  last_name: Joi.string(), 
  email: Joi.string().email().required(),
  phone: Joi.number().required(), 
  enquiry_id : Joi.number().required(),
  course_id : Joi.number().required(),
  trainer_id : Joi.number().integer().required()

}); 


exports.validateSchema = validator(validateSchema)