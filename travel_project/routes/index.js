var express = require('express');
var router = express.Router();

exports.fnc = function(req,res){
	var URL = req.url;
	if(URL.indexOf('main') > 0 ){
		res.render('main.html', { title: 'Express', URL: URL });
	}else if(URL.indexOf('board_write') > 0){
		res.render('board_write.html', { title:'Express', URL:URL });
	}else if(URL.indexOf('board') > 0 ){
		res.render('board.html', { title: 'Express', URL: URL });
	}else if(URL.indexOf('message') > 0 ){
		res.render('message.html', { title: 'Express', URL: URL });
	}else if(URL.indexOf('talk') > 0 ){
		res.render('talk.html', { title: 'Express', URL: URL });
	}else if(URL.indexOf('mypage') > 0 ){
		res.render('mypage.html', { title: 'Express', URL: URL });
	}else{
		res.render('index.html', { title: 'Express', URL: URL });
	}
}
