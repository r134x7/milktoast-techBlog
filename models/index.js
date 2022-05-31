const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// need to set a relationship between the user and the comment to get the comment name

User.hasMany(Post, { // foreign key comes from Post
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id' // foreign key comes from Post
});

Post.hasMany(Comment, { // foreign key comes from Post
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, { // logically it should work that way...
  foreignKey: 'post_id' // foreign key comes from Comment
})

Comment.belongsTo(User, {
  foreignKey: "user_id",
});


// post has many comments

module.exports = { User, Post, Comment };
