const express = require('express')
const router = express.Router();
const traineAccController=require('../Controllers/TrainerAccount_controller');
// const authValidation = require("../helpers/auth")

router.get("/get",traineAccController.getTraineAcc);

router.post('/post',traineAccController.addTraineAcc );

router.delete("/delete/:id",traineAccController.deleteTraineAcc);

router.put("/update/:id",traineAccController.updateTraineAcc)

module.exports=router;

// http://127.0.0.1:8080/user/userlist
// http://127.0.0.1:8080/user/101/ram
// http://127.0.0.1:8080/user/101