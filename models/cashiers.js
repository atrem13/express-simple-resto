'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
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
    password: DataTypes.STRING,
    img_name: DataTypes.STRING,
    img_data: DataTypes.BLOB("long"),
  }, {
    sequelize,
    modelName: 'cashiers',
  });
  cashiers.addHook(
    "beforeCreate",
    cashiers => (cashiers.password = bcrypt.hashSync(cashiers.password, 10))
  );
  cashiers.addHook(
    "beforeUpdate",
    cashiers => (cashiers.password = bcrypt.hashSync(cashiers.password, 10))
  );
  return cashiers;
};