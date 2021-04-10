const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GoalSchema = require("./goals").schema

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
        goals: [GoalSchema]
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;