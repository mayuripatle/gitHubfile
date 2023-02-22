const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({
  total_fees: Joi.number().required(),
  balance_fees: Joi.number().required(), 
  paid_fees:Joi.number().integer().required(),
  student_id:Joi.number().integer().required(),
 
});


exports.validateSchema = validator(validateSchema)