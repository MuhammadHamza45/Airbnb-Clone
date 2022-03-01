const express=require('express');
const userModel=require('../models/user.model');
const userAuth=require('../validations/userAuth');
// const {schema}=require('../validations/validateUser');
const Validate=require('../validations/validateUser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const createUser = async (userBody) => {

    //business rules/logic go here. check if user already exist etc....
    const {error}=await Validate.signupValidate(userBody);
    if (error){
        throw error;
    }
    else{
        let name=userBody.name;
            let country=userBody.country;
            let cell=userBody.cell;
            let dob=userBody.dob;
            let gender=userBody.gender;
        const email=userBody.email;
        const password=userBody.password;
        const user=await userModel.User.findOne({
            where:{
                email: userBody.email
            }
        }).then(async(user)=>{
            if(!user){
                const hash= await userAuth.hashIt(password);
                const user = await userModel.User.create({name:name,email:email,country:country,cell:cell,dob:dob,gender:gender,password:hash});
                // const token= await 
                // console.log(user);
                return user;
            }else{
                console.log('user is already exist');
                return 404;
            }
        })
        console.log(user);
        return user;
    }
};

// const createUser=async(userbody)=>{
//     await Validate.signupValidate(userbody);
//     var name=userbody.name;
//     var country=userbody.country;
//     var cell=userbody.cell;
//     var dob=userbody.dob;
//     var gender=userbody.gender;
//     let email=userbody.email;
//     let password=userbody.password;
//     const hash= await userAuth.hashIt(password);
//     return new Promise(async(resolve,reject)=>{
//         await userModel.createUser(name,email,country,cell,dob,gender,hash)
//         .then((data)=>{
//             resolve(data);
//         }).catch((err)=>{
//             reject(err);
//         });
//     });

// }

const signinUser = async (userBody) => {

    const {error}=await Validate.signupValidate(userBody);
    if(error){
        throw error;
    }
    else{
        //business rules/logic go here. 
    const password=userBody.password;

    
    const user = await userModel.User.findOne({
        where: {
            email: userBody.email
        }
    }).then(async(user)=>{
        if(user){
            const validatePassword=await userAuth.compareHash(password,user.password);
            if(validatePassword)
            {
                console.log("Successfully login");
                return user;
            }
            else{
                return ("invalid username or password");
            }
        }
        else{
            console.log('user doesnot exist please signup');
        }
    });
    return user;
    }
    
};



module.exports={createUser,
    signinUser
};