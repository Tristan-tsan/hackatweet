var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
//const { checkBody } = require('../modules/checkBody');

//recherche hashtag - à adapter au modèle des tweets
router.get('/taggies/:searchTag', (req, res) => {   
    Tweet.find({message: {$regex: new RegExp(req.params.searchTag, 'i')},}).then(data =>{        
        if (data[0]) {
            res.json({result: true, message: data})
        }else{
            Tweet.find().sort({ date: -1 }).then((tweets) => {
                res.json({result: false, message: tweets})
              });
        }
    }
    )})


    //route pour créer quelques faux messages à tester - à remplacer par la vraie
    router.post('/tweet', (req, res) => {
        const newTweet = new Tweet({
            firstname: req.body.firstname,
            username: req.body.username,
            date: new Date(),
            message: req.body.message,
        })
            newTweet.save().then(newDoc => {
              res.json({ result: true, message: newDoc.message });
            });
          })

module.exports = router;