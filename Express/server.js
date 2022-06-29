const http=require('http');
const app=require('./app');
const port=process.env.PORT || 31503;

const server=http.createServer(app);
server.listen(31503,console.log('Server is running on port 31503'));