const { json } = require('express/lib/response');
const tripModel=require('../models/trip.model');

///get all trip list
exports.getAllTrips=(req,res)=>{
    tripModel.getAllTrips(function(err,result){
        if(err){
            res.status(500).send({
                message:err.message
            });
        }
        else{
            res.status(200).send({
                message:'success',
                data:result
            });
        }
    });
}

//Add Trip
exports.AddTrip=(req,res)=>{
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({
            "status":400,
            success:false,
            "message": err
        });
    }
    else{

        tripModel.AddTrip(req.body,(err,result)=>{
        if(err){
            res.send({
                "status":400,
                success:false,
                "message":err
            });
        }
        else{
            res.send({
                "status":200,
                success:true,
                "message":"Trip added successfully"
            });
        }
    });
}
    
}

//Update Trip
exports.UpdateTrip=(req,res)=>{
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({
            "status":400,
            success:false,
            "message": err
        });
    }
    else{
        tripModel.UpdateTrip(req.body,(err,result)=>{
        if(err){
            res.send({
                "status":400,
                success:false,
                "message":err
            });
        }
        else{
            res.send({
                "status":200,
                success:true,
                "message":"Trip updated successfully"
            });
        }
    });
}
    
}

//Delete Trip
exports.DeleteTrip=(req,res)=>{
    if(req.body.constructor === Object && Object.keys(req.params.id).length === 0){
        res.send({
            "status":400,
            success:false,
            "message": "invalid request"
        });
    }
    else{
        tripModel.DeleteTrip(req.params.id,(err,result)=>{
        if(err){
            res.send({
                "status":400,
                success:false,
                "message":err
            });
        }
        else{
            res.send({
                "status":200,
                success:true,
                "message":"Trip deleted successfully"
            });
        }
    });
}
    
}

//get Trip by Id
exports.getTripById=(req,res)=>{

    console.log('req.params.id='+req.params.id);

    if(req.body.constructor === Object && Object.keys(req.params.id).length === 0){
        res.send({
            "status":400,
            success:false,
            "message": "invalid request"
        });
    }
    else{
        tripModel.getTripById(req.params.id,(err,result)=>{
        if(err){
            res.send({
                "status":400,
                success:false,
                "message":err
            });
        }
        else{
            res.send({
                "status":200,
                success:true,
                "message":result
            });
        }
    });
}
    
}