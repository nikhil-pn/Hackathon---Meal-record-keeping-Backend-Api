const { DataTypes } = require("sequelize");

const { createDB } = require("../config/db");

const User = createDB.define("users", {
  id: {
    primaryKey: true,
    alloweNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = User;
