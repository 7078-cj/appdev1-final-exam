import axios from "axios";

const API = import.meta.env.VITE_APP_API_URL;

// Get Todos
export const getTodosAPI = function () {
  return axios
    .get(`${API}/todos`, {
      params: { _limit: 10 }
    })
    .then(res => res.data);
};

// Add Todo
export const addTodoAPI = function (todo) {
  return axios
    .post(`${API}/todos`, todo)
    .then(res => res.data);
};

// Update Todo
export const updateTodoAPI = function (todo) {
  return axios
    .put(`${API}/todos/${todo.id}`, todo)
    .then(res => res.data);
};

// Delete Todo
export const deleteTodoAPI = function (id) {
  return axios
    .delete(`${API}/todos/${id}`)
    .then(() => id);
};
