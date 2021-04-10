const Users = require("../models/users");

module.exports = {
    createGoal: function(req, res) {
        const newGoalInfo = {
            "category" : req.body.category, 
            "url" : req.body.url,
            "tasks" : []
        }     
        const cloneUser = JSON.parse(JSON.stringify(req.user));
        cloneUser.goals.push(newGoalInfo)

       Users
        .findOneAndUpdate({ "username" : req.user.username }, cloneUser)
        .then(dbModel =>res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }

};