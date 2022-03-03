// const Sequelize = require('sequelize');
// const sequelize = require('../index');

const User=require('../models/user.model');
const GetUser=require('../models/location.model');
User.User.hasMany(GetUser.GetUser);
GetUser.GetUser.belongsTo(User.User);
