var express = require('express');
var router = express.Router();

exports.fnc = function(req,res){
	var URL = req.url;
	if(URL.indexOf('main') > 0 ){
		res.render('main', { title: 'Express', URL: URL });
	}else if(URL.indexOf('board') > 0 ){
		res.render('board', { title: 'Express', URL: URL });
	}else if(URL.indexOf('message') > 0 ){
		res.render('message', { title: 'Express', URL: URL });
	}else if(URL.indexOf('talk') > 0 ){
		res.render('talk', { title: 'Express', URL: URL });
	}else if(URL.indexOf('mypage') > 0 ){
		res.render('mypage', { title: 'Express', URL: URL });
	}else{
		res.render('index', { title: 'Express', URL: URL });
	}
}
