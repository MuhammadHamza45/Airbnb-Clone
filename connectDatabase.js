//import express module
const express = require('express');
const cors = require('cors');

const mysql = require('mysql');


//creates an object of type express. This represents our application.
const app = express();
app.use(cors());


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


//different methods available corresponds to different http verbs/methods
app.get('/', (req, res) => {
           res.send("Data fetched");

});
//get list of products
app.get('/api/products', (req, res) => {

    // call query method to get data/query results from db
    db.query('select * from host', (err, results) => {
        if (err)
           throw err;
        console.log(results);
       res.send(results);
    });
});
    
  
  app.listen(3000, () => {
    console.log("Server running on port 3000");
   });
  





















// var mysql      = require('mysql');
// var express = require("express");
// var app = express();

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'airbnb_clone'
//   });

//   connection.connect((err)=>{
//     if(!err){
//       console.log("Connction Done")
//     }
//     else{
//       console.log("Connction Not Done")
//     }
//   });
  
//   app.listen(3000, () => {
//     console.log("Server running on port 3000");
//    });
//    app.get('/twitterDB/',(req,res)=>{
//     let sql = 'SELECT * FROM newsFeed';
//     connection.query(sql,(err, result)=>{
//       if(err){
//         console.log("Error",err)
//       }
//       console.log("DATA",result);
//       res.send('<div><p>'+ result[0].Name+'</p><p>'+result[0].Tweet+'</p><img src='+`${result[0].Image}`+'></div>')
//       // res.send(result);
//     })
//   })




// const express =require("express");
// const mysql=require("mysql");
// const body_parser=require("body-parser");
// const res = require("express/lib/response");
// const app=express();

// app.use(body_parser.json());


//  const con=mysql.createConnection(
//     {
//         user: 'root',
//         password: '',
//         server: 'localhost',
//         database: 'airbnb_clone'
//     });
//  con.connect((err)=>{
//      if(err){
//     console.log("not connected");
// }
// else{
//     console.log("connected");
// }
// });


//     // Config your database credential

// app.get('/api/projectplan',(req,res)=>{
    
//     con.query("select * from host where name ='Muhammad Hamza'",(err,results)=>{
//         if(err){
//             console.log("data lost");
//         }
//         else{
//             console.log(results);
//         }
//         res.send(results);
//     });
// });
// // app.get('/api/projectTwitter',(req,res)=>{
    
// //     con.query("select * from project_plans where Project_title='Twitter'",(err,results)=>{
// //         if(err){
// //             console.log("data lost");
// //         }
// //         else{
// //             console.log(results);
// //         }
// //         res.send(results);
// //     });
// // });

// app.listen(3005,() => {
//     console.log("server started");
// });


