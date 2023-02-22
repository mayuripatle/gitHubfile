const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({ 
  first_name: Joi.string().min(3).max(30).required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
  interestedCourse_id: Joi.number().required(),
  currt_course_id: Joi.number().required(),
  create:  Joi.number().required(),
 
});


exports.validateSchema = validator(validateSchema)