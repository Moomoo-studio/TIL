var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/node', function(req, res, next) {
  res.send("Node");
});

module.exports = router;
