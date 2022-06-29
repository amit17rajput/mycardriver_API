const express=require('express');
const router=express.Router();
const loginController=require('../controllers/login.controller');

 

////get user login routes list
router.post('/',loginController.login);


module.exports=router;