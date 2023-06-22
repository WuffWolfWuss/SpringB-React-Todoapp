import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import authContext from "../context/auth-context";

const LoginFormV1 = () => {
  const [enterUsername, setUsername] = useState("");
  const [showInvalid, setshowInvalid] = useState(false);
  const navigate = useNavigate();
  const ctx = useContext(authContext);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const res = await ctx.loggedInHandler({
      username: enterUsername,
      password: "dummy",
    });
    if (!res) {
      setshowInvalid(true);
      return;
    }

    setshowInvalid(false);
    //console.log(event.target["username"].value);

    //ctx.setUsername(enterUsername);
    navigate(`/?username=${enterUsername ? enterUsername : "user"}`);
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        {showInvalid && <p>Username or password not valid</p>}
        <p>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            required
            onChange={usernameChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <button> Login </button>
      </form>
    </>
  );
};

export default LoginFormV1;
