var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'103.93.16.46',
    user:'cardrive_user',
    password:'Jaipur@123',
    database:'cardrive_DB',
    port:'3306'
}); 

    connection.connect(function(error){
      if(!!error){
        console.log(error);
      }else{
        console.log('Connected!:)');
      }
    });


module.exports=connection;
