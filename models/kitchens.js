'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kitchens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kitchens.init({
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    phone_number: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    img_name: DataTypes.STRING,
    img_data: DataTypes.BLOB("long"),
  }, {
    sequelize,
    modelName: 'kitchens',
  });
  return kitchens;
};