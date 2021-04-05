import axios from "axios";

export default {
    saveUser: function(userInfo) {
        return axios.post("/signup", userInfo);
    },

    loginUser: function(userInfo) {
        return axios.post("/login", userInfo)
    },

    getUser: function() {
        return axios.get("/user")
    }

}