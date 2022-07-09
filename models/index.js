const User = require("./User");
const Post = require("./Post");

// create associations by defining
//the one (users) to many(posts)relationship
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
