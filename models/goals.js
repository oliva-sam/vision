var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = require("./tasks").schema

const goalSchema = new Schema(
    {
        category: {
            type: String
        },
        url: {
            type: String
        },
        tasks:[TaskSchema]
    }
)

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;