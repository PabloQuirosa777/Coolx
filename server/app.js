var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectRouter = require("./routes/project");
var adminRouter = require("./routes/admin");
var treeRouter = require("./routes/tree");
var adminRouter = require("./routes/admin");
var contactRouter = require("./routes/contact");
var stripeRouter = require("./routes/stripe");
var pdfRouter = require("./routes/pdf");
var passwordRouter = require("./routes/password");

var app = express();
app.use(
  cors({
    origin: "*",
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/project", projectRouter);
app.use("/tree", treeRouter);
app.use("/admin", adminRouter);
app.use("/contact", contactRouter);
app.use("/stripe", stripeRouter);
app.use("/pdf", pdfRouter);
app.use("/password", passwordRouter);

module.exports = app;
