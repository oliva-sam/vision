const { db } = require("../models/users");
const Users = require("../models/users");

module.exports = {
    createGoal: function (req, res) {
        const newGoalInfo = {
            "category": req.body.category,
            "url": req.body.url,
            "tasks": []
        }
        const cloneUser = JSON.parse(JSON.stringify(req.user));
        cloneUser.goals.push(newGoalInfo)

        Users
            .findOneAndUpdate({ "username": req.user.username }, cloneUser)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findGoals: function (req, res) {
        Users
            .findOne({ "username": req.user.username })
            .then(dbModel => res.json(dbModel.goals))
            .catch(err => res.status(422).json(err))
    },

    removeGoal: function (req, res) {
        Users
            .findOneAndUpdate({ "username": req.user.username }, { $pull: { "goals": { "_id": req.params.id } } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    },

    createTask: function (req, res) {
        Users
            .findOneAndUpdate({ "username": req.user.username, "goals._id": req.params.id }, { $push: { "goals.$.tasks": req.body}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    },

    findTasks: function (req, res) {
        Users
        .findOne({"goals._id":req.params.id})
            .then(dbModel => {
                for (let i=0; dbModel.goals.length; i++){
                    if(req.params.id == dbModel.goals[i]._id) {
                        const foundTasks= dbModel.goals[i].tasks
                        res.json(foundTasks)
                    } 
            }})
            .catch(err => res.status(422).json(err))

    }

};