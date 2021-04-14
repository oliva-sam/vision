// Dependencies
const mongoose = require ("mongoose");
const express = require ("express");
const passport = require("./config/passport");
const session = require("express-session");
const compression = require("compression");
const routes = require("./routes/index");

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Database Connection
mongoose.connect("mongodb+srv://olivasam:olivasam@cluster0.zrmvt.mongodb.net/visionDB?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Routes
app.use(routes);

// Listener
app.listen(PORT,  () => {
    console.log(`Now listening on ${PORT}`)
});