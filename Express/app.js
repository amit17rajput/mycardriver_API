const express=require('express'); 
const app=express();
var cors = require('cors')
const bodyParser=require('body-parser');

const studentRoute=require('./src/routes/student');
const testRoute=require('./src/routes/test');
const userRoute=require('./src/routes/user.routes');
const loginRoute=require('./src/routes/login.routes');
const roleRoute=require('./src/routes/role.routes');
const pageRoute=require('./src/routes/page.routes');
const tripRoute=require('./src/routes/trip.routes');
const contactusRoute=require('./src/routes/contactus.routes');


app.use(cors());
app.use(bodyParser.urlencoded({extended:false})); //body parser
app.use(bodyParser.json()); // for parsing application/json
app.use(express.json());


app.use('/student',studentRoute);
app.use('/test',testRoute);

app.use('/user',userRoute);

 app.use('/api/v1/getAllContacts',contactusRoute) //get all contactus
 app.use('/api/v1/addContact',contactusRoute) //Add contactus
  app.use('/api/v1/getContactById',contactusRoute) //get contactus by contactId




app.use('/api/v1/getAllTrips',tripRoute) //get all trip list
app.use('/api/v1/AddTrip',tripRoute) //add trip
app.use('/api/v1/UpdateTrip',tripRoute) //update trip
app.use('/api/v1/DeleteTrip',tripRoute) //delete trip
app.use('/api/v1/getTripById',tripRoute) //get trip by id



app.use('/api/v1/getAllPages',pageRoute);   ///get all Page list
app.use('/api/v1/deletePage',pageRoute);   ///delete page
app.use('/api/v1/AddPage',pageRoute);   ///Add page
app.use('/api/v1/updatePage',pageRoute);   ///Update page
app.use('/api/v1/getPageById',pageRoute);   ///get Page by id

app.use('/api/v1/getallroles',roleRoute);   ///get all role list
app.use('/api/v1/Addrole',roleRoute);   ///Add  role
app.use('/api/v1/deleterole',roleRoute);   ///delete role
app.use('/api/v1/getrolebyid',roleRoute);   ///get role by id
app.use('/api/v1/getallUsers',userRoute);   ///get all user list
app.use('/api/v1/getuserbyId',userRoute);   ///get user by id
app.use('/api/v1/Registration',userRoute);   ///save user in db
app.use('/api/v1/login',loginRoute);   ///get user login routes list
 

app.use((req,res,next)=>{
    res.status(200).json({
        message:'<h1>Hello express js World</h1>'
    })
})
module.exports=app;