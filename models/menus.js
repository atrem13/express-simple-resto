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
      course.belongsTo(models.category_menu, {
        foreignKey: 'category_menu_id',
        as: 'CategoryMenu',
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