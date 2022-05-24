import http from "../http-common";

class CappsuleService {
    async getCappsules(id) {
        return http.get(`/Capsule/GetByReceiverId/${id}`);
    }

}
export default new CappsuleService();