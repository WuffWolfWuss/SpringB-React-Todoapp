import { useParams, useNavigate } from "react-router-dom";
import { retrieveTodoApi, updateTodoApi, createTodoApi } from "../Api/TodoApi";
import authContext from "../context/auth-context";
import { useContext, useEffect, useCallback, useState } from "react";
import TodoForm from "../Components/TodoForm";

const UpdateTodo = () => {
  const { id } = useParams();
  //console.log(id);
  const ctx = useContext(authContext);
  const username = ctx.username;
  const [desc, setDesc] = useState(null);
  const navigate = useNavigate();

  const retrieveTodo = useCallback(() => {
    //console.log(id);
    if (id !== "-1") {
      retrieveTodoApi(username, id).then((response) =>
        setDesc(response.data.description)
      );
    }
  }, [username, id]);
  useEffect(() => retrieveTodo(), [retrieveTodo]);

  const onSubmitHandler = (event) => {
    const todo = {
      id: id,
      username: username,
      description: event.description,
      targetDate: "2017-01-01",
      done: false,
    };
    if (id === "-1") {
      console.log("post");
      createTodoApi(username, todo).then((response) => console.log(response));
    } else {
      console.log("update");
      updateTodoApi(username, id, todo).then((response) =>
        console.log(response)
      );
    }
    navigate("/todos");
  };
  return (
    <>
      <h1>Todo Details</h1>
      <TodoForm desc={desc} onSubmit={onSubmitHandler} />
    </>
  );
};
export default UpdateTodo;
