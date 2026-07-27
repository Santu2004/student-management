import axios from "axios";

const api = axios.create({
  baseURL: "https://student-management-psi-lovat.vercel.app/api",
});

export default api;