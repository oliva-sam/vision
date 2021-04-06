// Dependencies
const mongoose = require ("mongoose");
const express = require ("express");
const passport = require("./config/passport");
const session = require("express-session");
const compression = require("compression");
const auth = require("./routes/auth");

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());


// Database Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/visionDB",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Routes
app.use("/api/auth", auth);
app.get("/", (req, res) => res.send("Good Morning,sunshine"));


// Listener
app.listen(PORT,  () => {
    console.log(`Now listening on ${PORT}`)
});