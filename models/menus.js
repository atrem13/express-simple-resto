'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.category_menus, {
        foreignKey: 'category_menu_id',
        as: 'Menus',
        // onDelete: 'cascade',
        // hooks: true
      });
    }
  }
  menus.init({
    category_menu_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'menus',
  });
  return menus;
};