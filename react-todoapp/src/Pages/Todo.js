import TodoList from "../Components/TodoList";
import { useState, useEffect, useContext, useCallback } from "react";
import { retrieveTodos, deleteTodoApi } from "../Api/TodoApi";
import { useNavigate } from "react-router-dom";

import authContext from "../context/auth-context";

// const todos = [
//   { id: 1, desc: "Buy BD" },
//   { id: 2, desc: "Buy Heavy Cream" },
// ];

const Todo = () => {
  const ctx = useContext(authContext);
  const username = ctx.username;

  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);
  const [msg, setMsg] = useState(null);

  //ACTION
  const refeshTodos = useCallback(() => {
    retrieveTodos(username).then((response) => setTodos(response.data));
  }, [username]);

  useEffect(() => {
    refeshTodos();
  }, [refeshTodos]);

  const deleteTodo = (id) => {
    console.log("delete " + id);
    deleteTodoApi(ctx.username, id)
      .then(() => {
        refeshTodos();
        setMsg(`Delete todo id ${id}`);
      })
      .catch((error) => console.log(error));
  };
  const updateTodo = (id) => {
    console.log("update " + id);
    navigate(`${id}`);
  };
  const addTodo = () => {
    navigate("-1");
  };
  return (
    <TodoList
      events={todos}
      onDelete={deleteTodo}
      onUpdate={updateTodo}
      onAdded={addTodo}
      msg={msg}
    />
  );
};

export default Todo;
