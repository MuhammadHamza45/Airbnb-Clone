const dotenv=require('dotenv');
// const express=require('express');
const Sequelize=require('sequelize');
const mysql=require('mysql');
const config = require('./config/config');
const db = new Sequelize(config.db.database, config.db.user, '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false,
        freezeTableName: true
    },
});
try{
    db.authenticate();
    console.log("started")
}
catch{
    console.log("not");
}
// conn.connect(function(err){
//     if(err)
//     {
//         throw err;
//     }
//     else{
//         console.log("Database Connected");
//     }
// });
module.exports={db};