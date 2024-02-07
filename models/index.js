const User = require("./User");
const Sandwich = require("./Sandwich");
const Rating = require("./Rating");

User.hasMany(Sandwich, {
  foreignKey: "user_id",
});

Sandwich.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Rating, {
  foreignKey: "user_id",
});

Rating.belongsTo(User, {
  foreignKey: "user_id",
});

Sandwich.hasMany(Rating, {
  foreignKey: "sandwich_id",
});

Rating.belongsTo(Sandwich, {
  foreignKey: "sandwich_id",
});

module.exports = { User, Sandwich, Rating };
