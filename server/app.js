/** @format */

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var mainRouter = require("./routes/main");
var mainApiRouter = require("./routes/api/main");
  //2021-01-03
var listRouter = require("./routes/list");
var detailRouter = require("./routes/detail"); 
  //2021-01-09
var dummyRouter = require("./routes/dummy");

var sequelize = require('./models').sequelize;  // mysql의 시퀄라이저 모델

var app = express();

sequelize.sync();     // 서버가 실행될 때 시퀄라이저의 스키마를 DB에 적용시킨다

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// 로거 설정
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 직접 접근 가능한 폴더 설정
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/main", mainRouter);
app.use("/api/main", mainApiRouter);
  //2021-01-03
app.use("/list", listRouter);
app.use("/detail", detailRouter);
  //2021-01-09
app.use("/dummy", dummyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


module.exports = app;
