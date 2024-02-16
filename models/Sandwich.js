const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sandwich extends Model {}

// set up fields and rules for Product model
Sandwich.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bread: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    condiment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vegetable: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cheese: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    other: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sandwiches",
  }
);

module.exports = Sandwich;
