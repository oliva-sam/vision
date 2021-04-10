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
    }
}