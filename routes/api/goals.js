const router = require("express").Router();
const goalsController = require("../../controllers/goalsController");

router.route("/goals")
    .put(goalsController.update);


module.exports = router;