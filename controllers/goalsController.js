const Users = require("../models/users");

module.exports = {
    update: function(req, res) {
        Users
            .findOneAndUpdate({username: req.params.username}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err=>res.status(422).json(err));
            // this is where I left off


    }
}