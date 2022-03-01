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
    }
} 
module.exports=config;
// console.log(config.db);