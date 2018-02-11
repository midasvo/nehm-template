var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

var reddit = require('redwrap');
  reddit.r('WTF', function(err, data, res){
    console.log(data); //outputs object representing first page of WTF subreddit 
  });	
  res.render('index', { title: 'Express' });  
});

module.exports = router;
