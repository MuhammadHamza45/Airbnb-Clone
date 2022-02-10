const express=require('express');
var mysql = require('mysql');
const bodyParser= require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '',      // Replace with your database password
  database: 'airbnb_clone' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});


app.get('/signup',(req,res)=>{    
    res.sendFile(__dirname+"/signup.html");
});
app.post('/signup',(req,res)=>{
  var name = req.body.name;
    var email=req.body.email;
    var country = req.body.country;
    var cell = req.body.cell;
    var gender = req.body.gender;
    var dob = req.body.dob;
    var password = req.body.password;
 
    conn.query( `INSERT INTO signup(name,email,country,cell,gender,dob,password) VALUES ("${name}","${email}","${country}","${cell}","${gender}","${dob}","${password}")`);
  res.send(req.body);    
  
    
});




app.listen(3000,()=>{
    console.log("Server is running on 3000");
});
