const express = require('express')
const router = express.Router();
const trainerController = require('../Controllers/Trainer_controller')
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,trainerController.gettrainer);

router.post('/post',authValidation, trainerController.addtrainer);

router.delete("/delete/:id",authValidation,trainerController.deletetrainer);

router.put("/update/:id",authValidation,trainerController.updatetrainer)

module.exports= router;

