import axios from "axios";

export const login = async (username, password) => {
    const response = await axios.post("http://localhost:8080/api/users/login", { username, password });
    localStorage.setItem("token", response.data.token);
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const logout = () => {
    localStorage.removeItem("token");
};
