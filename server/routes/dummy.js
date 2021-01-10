/** @format */

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("", function (req, res, next) {
  res.render("dmyIndex", { title: "dummy index" });
});

/* POST login. */
router.post("/login", function (req, res, next) {
    var rst = {
        id: req.body.nicName,
        pw: req.body.password
    };
    res.send('respond with a resource<br/>' 
    + JSON.stringify(rst, null, '\t') + '<br/>'
    +'<a href="http://localhost:3000/dummy/main">메인으로</a>');
});

/* GET Main page. */
router.get("/main", function (req, res, next) {
    res.render("dmyMain", { title: "dummy main" });
});

/* GET List page. */
router.get("/list/:listNum/", function (req, res, next) {
//    return res.status(200).json(req.params);
    res.render("dmyList", { 
        title: "dummy main" ,    
        listNum: req.params.listNum }
    );
});


module.exports = router;
