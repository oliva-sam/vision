import axios from "axios";

export default {
    // login or signup user
    loginUser: function(userInfo) {
        return axios.post("/api/login", userInfo)
    },
    // posts a goal
    saveGoal: function(goalInfo) {
        return axios.put("/api/goals", goalInfo)
    }
}