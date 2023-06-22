import { Form, useActionData } from "react-router-dom";
import { useContext } from "react";
import authContext from "../context/auth-context";

const LoginForm = () => {
  const ctx = useContext(authContext);
  console.log(ctx.isLoggedIn);

  //data return by action
  const data = useActionData();

  return (
    <>
      <Form method="post">
        {data && data.status === 500 && <p>{data.message}</p>}
        <p>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <button> Login </button>
      </Form>
    </>
  );
};

export default LoginForm;
