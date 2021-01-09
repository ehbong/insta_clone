/** @format */

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("", function (req, res, next) {
  res.render("dummyIndex", { title: "dummy main" });
});

/* GET home page. */
// router.get("test", function (req, res, next) {
//   res.render("/dummy/index", { title: "dummy main" });
// });
module.exports = router;
