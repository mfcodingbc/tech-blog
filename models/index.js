const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
// User/Post, users can create multiple Posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// Post/User, a User has posts associated to them
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// User/Post through Vote, find which users voted on a single post
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

// Post/User through Vote, find which posts a single user voted on
Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

// Vote/User, a User has votes associated to them
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

// Vote/Post, a Post has votes associated to them
Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

// Votes/User, how many votes a user has made
User.hasMany(Vote, {
  foreignKey: 'user_id'
});

// Votes/Post, how many votes a post has
Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

// Comment/User, User can make comment
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment/Post, Posts contain comments
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

// User/Comment, User can make multiple comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// Post/Comment, Post can have multiple comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };