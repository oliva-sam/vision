import axios from "axios";

export default {
    loginUser: function(userInfo) {
        return axios.post("/api/login", userInfo)
    }
}