const express=require('express');
const router=express.Router();

//const userConstroller=require('../controllers/user.controller');
const userController=require('../controllers/user.controller');

 

const auth=require('../middleware/auth');

////get all user list
router.get('/:id',auth,userController.getuserbyId);
router.get('/', auth, userController.getAllUsers);
router.post('/',userController.Registration);

module.exports=router;