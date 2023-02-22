const express = require('express')
const router = express.Router();
const userController=require('../Controllers/user-controller');
const authValidation = require("../helpers/auth")


router.get("/get",authValidation,userController.getUser);

router.get("/getuserbyid/:id",authValidation,userController.getUserById)

router.post("/login",userController.userLogin)

router.post("/logout",userController.userLogOut)

router.post("/adduser",authValidation,userController.addUser);

router.delete("/delete/:id",authValidation,userController.deleteUser);


router.put("/update/:id",authValidation,userController.updateUser)

module.exports=router;




