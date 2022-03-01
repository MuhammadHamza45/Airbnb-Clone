const Sequelize = require('sequelize');
const sequelize = require('../index');

const User = sequelize.db.define('registration_table', {
    name:{
      type:Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    country:{
      type:Sequelize.STRING
    },
    cell:{
      type:Sequelize.STRING
    },
    dob:{
      type:Sequelize.STRING
    },
    gender:{
      type:Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
    
});

module.exports = {User};








// // const config=require('../config/config');
// const conn=require('../index');
// const userAuth=require('../validations/userAuth');

// const createUser = (name,email,country,cell,dob,gender,hash) => {
    
//   };
// const signinUser=async (email,password)=>{
//   let sql = await `Select * registration_table where email=${email}`
//   .then(async(user)=>{
//     if(user){
//       const validatePassword=await userAuth.compareHash(password,user.password);
//        if(validatePassword)
//             {
//                 console.log("Successfully login");
//                 return user;
//             }
//             else{
//                 return ("invalid username or password");
//             }
//         }
//         else{
//             console.log('user doesnot exist please signup');
//         }
//     });
//     return user;
//     };
//   module.exports={createUser,
//   signinUser};  