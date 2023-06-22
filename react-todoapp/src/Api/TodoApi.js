import { apiClient } from "./ApiClient";

//const apiClient = axios.create({ baseURL: "http://localhost:8080" });

export const retrieveTodos = (username) =>
  apiClient.get(`/user/${username}/todos`);

export const retrieveTodoApi = (username, id) =>
  apiClient.get(`/user/${username}/todos/${id}`);

export const deleteTodoApi = (username, id) =>
  apiClient.delete(`/user/${username}/todos/${id}`);

export const updateTodoApi = (username, id, todo) =>
  apiClient.put(`/user/${username}/todos/${id}`, todo);

export const createTodoApi = (username, todo) =>
  apiClient.post(`/user/${username}/todos`, todo);
