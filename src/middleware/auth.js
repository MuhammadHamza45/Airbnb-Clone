const config=require('../config/config');
const jwt=require('jsonwebtoken');
const User=require('../models/user.model');
const sequelize=require('sequelize');

function authenticateToken(req, res, next) {
  const token = req.cookies.jwt;
  console.log("i am at token" + token);
  // check if token exists
  if (token) {
      jwt.verify(token, config.jwt.JWT_SECRET, (err, decoded) => {
          if (err) {
              console.log(err.message);
              res.redirect('/users/signin');
          } else {
              console.log(decoded);
              res.render('/users/homes');
              next();
          }
      });
  } else
  res.redirect('/users/signin');
}
module.exports= {authenticateToken};




// // const token = req.headers['authorization'].split(' ')[0];
// const token=req.cookies.jwt;
// // console.log(token);
// // const token = authHeader && authHeader.split(' ')[1];
// console.log("i am at cookie" +token);
// if (token == null)
// {
//     return res.sendStatus(401);   
// } 

// jwt.verify(token,config.jwt.JWT_SECRET, (err, user ) => {
//   // console.log("i am at token "+ err);
//   if(err){
//     return res.sendStatus(403);
//   }

//   req.user = user

//   next()
// });
// }