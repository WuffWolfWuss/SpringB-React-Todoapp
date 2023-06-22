import { apiClient } from "./ApiClient";

export const basicAuthService = (token) =>
  apiClient.get(`/basic-Auth`, {
    headers: {
      Authorization: token,
    },
  });

export const jwtAuthService = (username, password) =>
  apiClient.post(`/authenticate`, {
    username,
    password,
  });
