var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var objects = {};
  objects = {
    title: 'Node Practice 2',
    info: '練習用のウェブアプリです'
  };
  res.render('index', objects);
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  var objects = {};
  objects = {
    title: 'Node Practice 2',
    info: '練習用のウェブアプリ INDEXページです'
  };
  res.render('index', objects);
});

/* GET home page. */
router.get('/index2', function(req, res, next) {
  var objects = {};
  objects = {
    title: 'Node Practice 2',
    info: '練習用のウェブアプリ INDEXページです'
  };
  res.render('index2.html', objects);
});

module.exports = router;
