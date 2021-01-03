var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource<br/><a href="http://localhost:3000">메인으로</a>');
});

module.exports = router;
