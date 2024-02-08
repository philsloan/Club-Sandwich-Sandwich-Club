const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Rating extends Model {}

// set up fields and rules for Product model
Rating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    sandwich_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "sandwiches",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "ratings",
  }
);

module.exports = Rating;
