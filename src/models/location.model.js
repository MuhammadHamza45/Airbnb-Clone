const Sequelize = require('sequelize');
const sequelize = require('../index');
const User=require('../models/user.model');

const GetUser = sequelize.db.define('location', {
    address:{
        type:Sequelize.STRING
      },
    description:{
        type:Sequelize.STRING
      },
    location_rent:{
        type:Sequelize.STRING
      },
    user_id:{
        type:Sequelize.INTEGER,
        references:{
            model:User,
            key:'id'
        }
    }
});

module.exports = {
  GetUser
};
