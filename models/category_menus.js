'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.menus, {
        foreignKey: 'category_menu_id',
        as: 'Menus',
        // onDelete: 'cascade',
        // hooks: true
      });
    }
  }
  category_menus.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'category_menus',
  });
  return category_menus;
};