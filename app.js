require("dotenv").config();

const express = require("express");
const connectMongo = require("./db");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const Users = require("./users");

connectMongo();

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/login", function (req, res) {
  res.render("login");
});
app.get("/register", function (req, res) {
  res.render("register");
});

// level 1 authentication

app.post("/register", function (req, res) {
  const newUser = Users.create({
    email: req.body.username,
    password: req.body.password,
  });
  res.render("secrets");
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  Users.findOne({ email: username }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.render("secrets");
        }
      }
    }
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
