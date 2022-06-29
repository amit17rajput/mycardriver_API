var connection=require('../../config/db.config.js');
var express=require('express');
const { json } = require('express/lib/response');

 

var Trip=function(trip){
    this.TripId=trip.TripId;
    this.TripType=trip.TripType; 
    this.pickuplocation=trip.pickuplocation;
    this.DropLocation=trip.DropLocation; 
    this.VehicalType=trip.VehicalType; 
    this.VehicalName=trip.VehicalName; 
    this.PickupDate=trip.PickupDate; 
    this.pickupTime=trip.pickupTime; 
    this.dropdate=trip.dropdate; 
    this.droptime=trip.droptime; 
    this.coupon=trip.coupon; 
    this.PaymentType=trip.PaymentType; 

    this.isDriverFood=trip.isDriverFood; 
    this.DriverFoodAmount=trip.DriverFoodAmount; 
    this.Estimatedamount=trip.Estimatedamount; 
    this.Discount=trip.Discount; 
    this.TotalAmount=trip.TotalAmount;     
    this.ipAddress=trip.ipAddress; 
    this.insertedOn=trip.insertedOn; 
};

//get all trip list
Trip.getAllTrips=async function(result){
    await connection.query('SELECT * FROM Trip',function(err,res){
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });

};

//add trip
Trip.AddTrip=async function(trip,result){
    await connection.query('INSERT INTO Trip set ?',trip,function(err,res){
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
};


//update trip
Trip.UpdateTrip=async function(trip,result){
    await connection.query('UPDATE Trip set ? where TripId=?',[trip,trip.TripId],function(err,res){
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
};

//delete trip
Trip.DeleteTrip=async function(id,result){
    await connection.query('DELETE FROM Trip where TripId=?',id,function(err,res){
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
};

//get trip by id
Trip.getTripById=async function(id,result){
    await connection.query('SELECT * FROM Trip where TripId=?',id,function(err,res){
        if(err){
            console.log('error: ',err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
};


module.exports=Trip;
