const express=require('express');
const userModel=require('../models/user.model');
const userModel1=require('../models/location.model');
const userModel2=require('../models/location_img.model');
const userAuth=require('../validations/userAuth');
// const {schema}=require('../validations/validateUser');
const Validate=require('../validations/validateUser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const config=require('../config/config');


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
                const payload={email:user.email,name:user.name};
                // const key= require('crypto').randomBytes(64).toString('hex');
                const accessToken=jwt.sign(payload,config.jwt.JWT_SECRET,{expiresIn:config.jwt.JWT_ACCESS_EXPIRATION_MINUTES});
                // console.log(key);
                return ({user,...{accessToken}});
            }
            else{
                console.log('user is already exist');
                return 404;
            }
        })
        console.log(user);
        return user;
    }
};

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
                const payload={email:user.email};
                // const key= require('crypto').randomBytes(64).toString('hex');
                const accessToken=jwt.sign(payload,config.jwt.JWT_SECRET,{expiresIn:config.jwt.JWT_ACCESS_EXPIRATION_MINUTES});
                console.log("Successfully login");
                return ({user,...{accessToken}});
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
const getUsers=async (userBody)=>{
    const user = await userModel2.GetImage.findAll(
        {
            // where:{id:userBody[0].id},
            // include:[{model:userModel.User}]
        }
        
    );
    console.log(user);
    return user;
}



module.exports={
    createUser,
    signinUser,
    getUsers
};