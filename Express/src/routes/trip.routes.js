const express=require('express');
const router=express.Router();


const tripController=require('../controllers/trip.controller');

 

//const auth=require('../middleware/auth');


//router.get('/:id',auth,userController.getuserbyId);
router.get('/',tripController.getAllTrips);
router.post('/',tripController.AddTrip);
router.delete('/:id',tripController.DeleteTrip);
router.put('/',tripController.UpdateTrip);
router.get('/:id',tripController.getTripById);



module.exports=router;