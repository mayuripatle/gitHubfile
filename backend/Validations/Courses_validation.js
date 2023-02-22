const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({ 
  course_name: Joi.string().alphanum().min(3).max(30).required(),
  course_descr: Joi.string().required(), 
  created: Joi.number().required(), 

  
});


exports.validateSchema = validator(validateSchema)