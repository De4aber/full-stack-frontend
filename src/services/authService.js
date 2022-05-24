import http from "../http-common";

class AuthService {
    async attemptLogin(data) {
        console.log(data);
        return http.post("/Auth/Login", data);
    }

    async getUser(id) {
        return http.get(`/User/${id}`);
    }

    async attemptRegister(data) {
        console.log(data);
        return http.post("/User/CreateUser", data);
    }
}
export default new AuthService();