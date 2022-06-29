const express=require('express');
const router=express.Router();

//const userConstroller=require('../controllers/user.controller');
const roleController=require('../controllers/role.controller');

 

const auth=require('../middleware/auth');

////get all role list
//router.get('/:id',auth,userController.getuserbyId);
router.get('/',auth,roleController.getAllroles);
router.post('/',auth,roleController.AddRole);
router.delete('/',auth,roleController.DeleteRole);
router.get('/:id',auth,roleController.getRoleById);

module.exports=router;