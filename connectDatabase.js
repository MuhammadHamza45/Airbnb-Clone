//import express module
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const Joi=require('joi');
const mysql = require('mysql');
const bodyParser=require('body-parser');


//creates an object of type express. This represents our application.
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'airbnb_clone'
});

//connect to the db
db.connect((err)=> {
    if (err) {
        throw err;
    }
    console.log("DB Connected.....");
});
// module.exports=db;
app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+"/airbnb.html/signup.html");
});
app.post('/signup',async(req,res)=>{
    const signupValidate=data=>{ 
        const schema=Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password:Joi.string().required()
        }).unknown();
        return schema.validate(data);
    }
    const {error}=signupValidate(req.body);
    if(error){
        throw error;
    }
    else{
        res.status(200).json('data saved.');
    }
    try{
        var name=req.body.name;
        var country=req.body.country;
        var cell=req.body.cell;
        var dob=req.body.dob;
        var gender=req.body.gender;
        var email=req.body.email;
        var password=req.body.password;
        const salt = await bcrypt.genSalt(6);
        const hashed = await bcrypt.hash(password,salt);
        
        var sql = `INSERT INTO registration_table (name,email,country,cell,dob,gender,password) VALUES ("${name}","${email}","${country}","${cell}","${dob}","${gender}","${hashed}")`;
        db.query(sql,(err,result)=>{
            if(err){
                console.log("ERROR",err)
            }
            console.log(result);
            res.send(result);

        });

    } catch(e){
        console.log(e);
        res.status(500).send("Somthing Broke!");
    }
    
});
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/airbnb.html/Home.html");
});


app.get('/signin',(req,res)=>{
    res.sendFile(__dirname+"/airbnb.html/signin.html");
});
app.post('/signin',async(req,res)=>{
    try{
        var email=req.body.email;
        var password=req.body.password;
        const user=  'SELECT * FROM registration_table WHERE email= ?';
        // console.log(user);
        // console.log(password);
        await db.query(user,[email],async(err,result)=>{
            if(err) throw err;
            console.log(result);
            if(result){
                const validPassword= await bcrypt.compare(password,result[0].password);
                // console.log(user.hashed);
                if(validPassword){
                    // res.status(200).json("Correct Email and password");
                    res.redirect('/home');
                }else{
                    res.json("Wrong Password");
                }
            }
            else{
                res.status(404).json("User not found");
               }

        })
        

    } catch(e){
        console.log(e);
        res.status(500).send("Somthing Broke!");
    }
});
    // console.log("The email is "+email+" the password is "+name);
   
    
     
// var sql = "INSERT INTO registration_table SET ?";

//different methods available corresponds to different http verbs/methods
// app.get('/', (req, res) => {
//            res.send("Data fetched");

// });
//get list of products
// app.get('/api/products', (req, res) => {

//     // call query method to get data/query results from db
//     db.query('select * from host', (err, results) => {
//         if (err)
//            throw err;
//         console.log(results);
//        res.send(results);
//     });
// });
    
  
  app.listen(3000, () => {
    console.log("Server running on port 3000");
   });