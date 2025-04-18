var express = require('express');
var router = express.Router();
const Tweet = require('../models/tweet');

//ROUTE POUR RECUPERER LES TWEETS
router.get('/get', (req, res) => {
  Tweet.find().sort({ date: -1 }).then((tweets) => {
    res.json(tweets);
  });
});

//ROUTE POUR AJOUTER UN TWEET
router.post('/add', (req, res) => {

    const tweet = new Tweet({
        username: req.body.username,
        firstname: req.body.firstname,
        date: new Date(),
        message : req.body.message,
    });

    tweet.save().then((savedTweet) => {
        res.status(201).json(savedTweet);
    });});

//ROUTE POUR SUPPRIMER UN TWEET
router.delete('/delete/:id', (req, res) => {
  Tweet.findByIdAndDelete(req.params.id).then((deletedTweet) => {
    if (deletedTweet) {
      res.status(200).json({ message: 'Tweet supprimé', tweet: deletedTweet });
    } else {
      res.status(404).json({ message: 'Tweet non trouvé' });
    }
  });
});


module.exports = router;