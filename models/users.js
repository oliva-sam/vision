const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: "Please enter a username"
        },
        password:{
            type: String,
            required: "Please enter a password"
        },
        goal: {
            url: String,
            category: String,
            title: String,
            tasks: [{
                task: String,
            }]

        }
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;