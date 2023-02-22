const express = require('express')
const router = express.Router();
const enquiryController=require('../Controllers/Enquiry_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,enquiryController.getenquiry);

router.post('/post',authValidation,enquiryController.addenquiry );

router.delete("/delete/:id",authValidation,enquiryController.deleteenquiry);

router.put("/update/:id",authValidation,enquiryController.updateenquiry)

module.exports=router;

// http://127.0.0.1:8080/user/userlist
// http://127.0.0.1:8080/user/101/ram
// http://127.0.0.1:8080/user/101