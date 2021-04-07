const express = require("express");
const router = express.Router();
const loginRoute = require("./api/users")

router.get("/", (req, res) => res.send("Good Morning,sunshine"));

router.use("/api", loginRoute)

module.exports = router;