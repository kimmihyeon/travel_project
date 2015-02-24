var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req,res){
	res.render('main', { title: 'Express' });
});

router.get('/board', function(req, res){
	res.render('board', { title: 'Express' });
});

router.get('/message', function(req, res){
	res.render('message', { title: 'Express' });
});

router.get('/talk', function(req, res){
	res.render('talk', { title: 'Express' });
});

module.exports = router;
