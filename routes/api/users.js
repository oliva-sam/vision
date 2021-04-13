const router = require("express").Router();
const passport = require("passport");
const goalsController = require("../../controllers/goalsController");

//////// PASSPORT BOILERPLATE
router.post("/login", (req, res, next) => {
    passport.authenticate("local", function(err, user, info) {
        if(err) {
            return res.status(400).json({errors:err});
        }
        if (!user) {
            return res.status(400).json({errors: "no user found"});
        }
        req.logIn(user, function(err) {
            if(err) {
                return res.status(400).json({errors:err});
            }
            return (
                res.status(200).json({success: user.username})
            );
        });
    })(req, res, next);
});

///// APPLICATION 

router.route("/goals/:username")
    .post(goalsController.createGoal)
    .get(goalsController.findGoals)

router.route("/goal/:id")
    .delete(goalsController.removeGoal)



module.exports = router;
