const Sequelize = require('sequelize');
const sequelize = require('../index');
const GetUser=require('../models/location.model');

const GetImage = sequelize.db.define('location_images', {
    image:{
        type:Sequelize.STRING
      },
    place_name:{
        type:Sequelize.STRING
      },
    owner_name:{
        type:Sequelize.STRING
      },
      rent:{
          type:Sequelize.DOUBLE
      },
      number:{
        type:Sequelize.BIGINT
      },
    location_id:{
        type:Sequelize.INTEGER,
        references:{
            model:GetUser,
            key:'id'
        }
    }
});

module.exports = {
    GetImage
};
