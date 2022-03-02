const path=require('path');

const dotenv=require('dotenv');
dotenv.config({path: path.join(__dirname,'../../.env')});
const config={
    app:{
        port:process.env.PORT
    },
    db:{
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE,
        dbport:process.env.DBPORT
    },
    jwt:{
        JWT_SECRET:process.env.JWT_SECRET,
        JWT_ACCESS_EXPIRATION_MINUTES:process.env.JWT_ACCESS_EXPIRATION_MINUTES
    }
} 
module.exports=config;
// console.log(config.db);