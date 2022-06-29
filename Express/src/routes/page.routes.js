const express=require('express');
const router=express.Router();

//const userConstroller=require('../controllers/user.controller');
const pageController=require('../controllers/page.controller');

 

const auth=require('../middleware/auth');



router.get('/',pageController.getAllPages);
router.post('/',pageController.AddPage);
router.delete('/',pageController.DeletePage);
// router.get('/:id',auth,pageController.getPageById);

module.exports=router;