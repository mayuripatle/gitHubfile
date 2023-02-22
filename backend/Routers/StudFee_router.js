const express = require('express')
const router = express.Router();
const studFeeController=require('../Controllers/StudFee_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,studFeeController.getstudFee);

router.post('/post',authValidation,studFeeController.addstudFee );

router.delete("/delete/:id",authValidation,studFeeController.deletestudFee);

router.put("/update/:id",authValidation,studFeeController.updatestudFee)

module.exports=router;

// http://127.0.0.1:8080/user/userlist
// http://127.0.0.1:8080/user/101/ram
// http://127.0.0.1:8080/user/101