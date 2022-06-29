
const express=require('express');
const router=express.Router();

const contactusController=require('../controllers/contactus.controller');

const auth=require('../middleware/auth');

//get all contactus
router.get('/',contactusController.getAllcontactus);
//Add contactus
router.post('/',contactusController.addcontactus);
//get contactus by contactId
 router.get('/:id',contactusController.getcontactusbyId);

module.exports = router;