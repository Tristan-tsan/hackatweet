const mongoose = require('mongoose');

//modèle tweets pour tester la recherche de hashtags

const tweetSchema = mongoose.Schema({
  firstname: String,
  username: String,
  date: Date,
  message: String,  
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;