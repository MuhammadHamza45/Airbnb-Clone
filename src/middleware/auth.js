const config=require('../config/config');
const jwt=require('jsonwebtoken');
const User=require('../models/user.model');
const sequelize=require('sequelize');

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'].split(' ')[0];
    console.log(token);
    // const token = authHeader && authHeader.split(' ')[1];
  console.log(token);
    if (token == null)
    {
        return res.sendStatus(401);   
    } 
  
    jwt.verify(token,config.jwt.JWT_SECRET, (err, user ) => {
      // console.log("i am at token "+ err);
      if(err){
        return res.sendStatus(403);
      }

      req.user = user
  
      next()
    });
  }





module.exports= {authenticateToken};