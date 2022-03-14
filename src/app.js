//import express module
const express = require('express');
//import models
const Sequelize=require('sequelize');
const sequelize=require('./index');
const User=require('./models/user.model');
const GetUser=require('./models/location.model');
User.User.hasMany(GetUser.GetUser,{foreignKey:'user_id'});
GetUser.GetUser.belongsTo(User.User,{foreignKey:'user_id'});

//import cors
const cors = require('cors');

const path = require('path');

//import dotenv
const dotenv = require('dotenv');
dotenv.config();

// import config.js file
const config = require('./config/config');

///users route file
const userRoute = require('./routes/user.route');


//creates an object of type express. This represents our application.
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());

//cookie parser request body
// app.use(cookieParser());

app.get('/', (req, res) => {
    console.log("Get from root");
    res.send("Data fetched");

});

// If route is /users, then use what's inside ref by userRoute.
app.use("/users", userRoute);

//Server listening on port 3000
app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}`));