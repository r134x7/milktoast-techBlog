const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, { // foreign key comes from Post
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id' // foreign key comes from Post
});

Comment.belongsTo(Post, { // logically it should work that way...
  foreignKey: 'post_id' // foreign key comes from Comment
})

module.exports = { User, Post, Comment };
