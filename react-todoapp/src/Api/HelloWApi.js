import axios from "axios";

const apiClient = axios.create({ baseURL: "http://localhost:8080" });

export const retrieveHelloWBean = () => apiClient.get("/hello-world-bean");

export const retrieveHelloWBeanVarible = (username, token) =>
  apiClient.get(`/hello-world/path-variable/${username}`, {
    headers: {
      Authorization: token,
    },
  });
