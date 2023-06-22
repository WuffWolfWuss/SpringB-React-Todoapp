import React from "react";

const authContext = React.createContext({
  isLoggedIn: false,
  onLogin: null,
  onLogout: null,
  username: null,
  token: null,
  //setUsername: (auth) => {},
});

export default authContext;
