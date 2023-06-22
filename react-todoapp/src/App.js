import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { useState, useContext } from "react";

import "./App.css";
import RootLayout from "./Pages/Root";
import LoginPage, { action as authAction } from "./Pages/Login";
import LoginPageV1 from "./Pages/LoginV1";
import WelcomePage from "./Pages/Welcome";
import Todo from "./Pages/Todo";
import ErrorPage from "./Pages/Error";
import UpdateTodo from "./Pages/UpdateTodo";
import authContext from "./context/auth-context";

//import { basicAuthServic } from "./Api/AuthService";
import { jwtAuthService } from "./Api/AuthService";
import { apiClient } from "./Api/ApiClient";

const AuthRoute = ({ children }) => {
  const ctx = useContext(authContext);
  if (ctx.isLoggedIn) {
    return children;
  }
  return <Navigate to="/" />;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "login", element: <LoginPage />, action: authAction },
      { path: "loginV1", element: <LoginPageV1 /> },
      {
        path: "todos",
        children: [
          {
            index: true,
            element: (
              <AuthRoute>
                <Todo />
              </AuthRoute>
            ),
          },
          { path: ":id", element: <UpdateTodo /> },
        ],
      },
    ],
  },
]);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  // const loggedInHandler = async (event) => {
  //   const baToken =
  //     "Basic " + window.btoa(event.username + ":" + event.password);
  //   try {
  //     const response = await basicAuthService(baToken);

  //     if (!response.status === 200) {
  //       return false;
  //     } else {
  //       setUsername(event.username);
  //       setLoggedIn(true);
  //       setToken(baToken);
  //       //add token to all api header in client
  //       apiClient.interceptors.request.use((config) => {
  //         config.headers.Authorization = baToken;
  //         return config;
  //       });
  //       return true;
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //     return false;
  //   }
  // };
  const loggedInHandler = async (event) => {
    try {
      const response = await jwtAuthService(event.username, event.password);

      if (!response.status === 200) {
        return false;
      } else {
        const token = "Bearer " + response.data.token;
        setUsername(event.username);
        setLoggedIn(true);
        setToken(token);
        //add token to all api header in client
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = token;
          return config;
        });
        return true;
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };
  const loggedOutHandler = () => {
    setLoggedIn(false);
    setUsername(null);
    setToken(null);
  };
  return (
    <div className="App">
      <authContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          loggedInHandler,
          onLogout: loggedOutHandler,
          username,
          token,
          //setUsername,
        }}
      >
        <RouterProvider router={router} />
      </authContext.Provider>
    </div>
  );
}

export default App;

//Longn - pass:dummy
