import { redirect, json } from "react-router-dom";

import LoginForm from "../Components/LoginForm";

const LoginPage = () => {
  //console.log("LoginPage");
  return <LoginForm />;
};

export default LoginPage;

export async function action({ request }) {
  const formData = await request.formData();
  const authData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  if (authData.username === "1") {
    return json({ message: "Could not authenticate", status: 500 });
    //throw json({ message: "Could not authenticate" }, { status: 500 }); //this will redirect to error page
  }

  //return json({ status: 200 });

  return redirect(
    `/?username=${authData.username ? authData.username : "user"}`
  );
}
