const express = require("express");
const router = express.Router();
const loginRoute = require("./api/users")
const goalsRoute = require("./api/goals")

router.get("/", (req, res) => res.send("Good Morning,sunshine"));

router.use("/api", loginRoute)
router.use("/api", goalsRoute)

module.exports = router;