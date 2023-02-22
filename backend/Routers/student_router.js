const express = require('express')
const router = express.Router();
const authorController= require('../Controllers/student_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,authorController.getstudent);

router.post('/post',authValidation,authorController.addstudent);

router.delete("/delete/:id",authValidation,authorController.deletestudent);

router.put("/update/:id",authValidation,authorController.updatestudent)

module.exports = router;
