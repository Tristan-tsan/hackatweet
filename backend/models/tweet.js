const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  firstname: String,
  username: String,
  date : Date,
  message: String,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;