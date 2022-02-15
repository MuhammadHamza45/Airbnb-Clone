const express=require('express');
var mysql = require('mysql');
const bodyParser= require('body-parser');
const bcrypt=require('bcrypt');
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
app.post('/signup',async(req,res)=>{
  var name = req.body.name;
    var email=req.body.email;
    var country = req.body.country;
    var cell = req.body.cell;
    var gender = req.body.gender;
    var dob = req.body.dob;
    var password = req.body.password;
    const salt = await bcrypt.genSalt(6);
    const hashed = await bcrypt.hash(password,salt);
    conn.query( `INSERT INTO signup(name,email,country,cell,gender,dob,password) VALUES ("${name}","${email}","${country}","${cell}","${gender}","${dob}","${hashed}")`);
  res.send(req.body);    
  
    
});

app.get('/login',(req,res)=>{    
  res.render("/login.html");
});

app.post('/login',async(req,res)=>{    
  try {
    
    const email=req.body.email;
    const password=req.body.password;
    // console.log(email);
    const sql = 'SELECT * FROM signup where email=?';
    await conn.query(sql,[email],async(err,result)=>{
      if(err) throw err;
      // res.send(result);
      if(result){
        const inValid = await bcrypt.compare(password,result[0].password);
        if (inValid){
         res.send("valid ");
        }
        else{
          res.send("invalid login");
        }
      }
      else{
        res.send("invalid login");
      }
    });
 

  } catch (error) {
    res.status(400).send("something roke:");
  }
});




app.listen(3000,()=>{
    console.log("Server is running on 3000");
});
