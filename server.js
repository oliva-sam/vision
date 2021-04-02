// Dependencies
const mongoose = require ("mongoose");
const express = require ("express");
const cors = require("cors");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000", // front-end port
    credentials: true
}));

app.use(session({ 
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser("secret"));


// Routes
app.post("/login", (req,res) => {
    console.log(req.body);
});
app.post("/signup", (req,res) => {
    console.log(req.body);
});
app.post("/user", (req,res) => {
    console.log(req.body);
});


// Listener
app.listen(PORT, function () {
    console.log(`Now listening on https://localhost/${PORT}`)
});