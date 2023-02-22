const express = require('express')
const router = express.Router();
const coursesController = require('../Controllers/Courses_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,coursesController.getcourses);

router.post('/post',authValidation,coursesController.addcourses);

router.delete("/delete/:id",authValidation,coursesController.deletecourses);

router.put("/update/:id",authValidation,coursesController.updatecourses)

module.exports = router;
