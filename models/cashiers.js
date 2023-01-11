'use strict';
const {
  Model
} = require('sequelize');
const useBcrypt = require('sequelize-bcrypt');
module.exports = (sequelize, DataTypes) => {
  class cashiers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cashiers.init({
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    phone_number: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cashiers',
  });
  useBcrypt(cashiers, {
    field: 'password', // secret field to hash, default: 'password'
    rounds: 12, // used to generate bcrypt salt, default: 12
    // compare: 'authenticate', // method used to compare secrets, default: 'authenticate'
  });
  return cashiers;
};