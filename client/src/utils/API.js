/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    // login or signup user
    loginUser: function(userInfo) {
        return axios.post("/api/login", userInfo)
    },
    // posts a goal
    saveGoal: function(username, goalInfo) {
        return axios.post("/api/goals/" + username, goalInfo)
    },
    // gets users goals
    getGoals: function(username) {
        return axios.get("/api/goals/" + username)
    },
    // deletes a users goal
    deleteGoal: function(id) {
        return axios.delete("/api/goal/" + id)
    },
    // posts a users task / step
    saveTask: function(id, task) {
        return axios.post("/api/goal/tasks/" + id, task)
    }
}