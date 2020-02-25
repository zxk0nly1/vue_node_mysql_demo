var express = require('express');
var router = express.Router();
var connection=require('../db/sql.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET list page. */
router.get('/list', function(req, res, next) {
  connection.query("select * from user",function(error,results,fields){
	res.json(results);
  })
});

module.exports = router;
