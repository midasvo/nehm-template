import express = require("express");

class IndexRouter {

  constructor() {
    let router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });  
    });
  }  
}

export = IndexRouter;


