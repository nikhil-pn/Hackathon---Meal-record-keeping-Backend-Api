const { DataTypes } = require("sequelize");

const { createDB } = require("../config/db");

const Meals = createDB.define("meals", {
  id: {
    primaryKey: true,
    alloweNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  time: DataTypes.STRING,
  meal: DataTypes.STRING,
  calories: DataTypes.NUMBER,
});

module.exports = Meals;