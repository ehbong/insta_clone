/** @format */

const { json } = require("express");
var express = require("express");
var qs = require('querystring');
var router = express.Router();

/* GET home page. */
router.get("", function (req, res, next) {
  return res.status(200).json({
    success: true,
  });
});

router.get("/api/main", function (req, res, next) {
  return res.status(200).json({
    result: 'What?!',
  });
});

router.get("/test1/:test1/test2/:test2", function (req, res, next) {
  return res.status(200).json(req.params);
});

router.post("/test3", function (req, res, next) {
  // return res.status(200).json(req.params);
  return res.status(200).json({
      test: req.body.test}
    );
});

module.exports = router;
