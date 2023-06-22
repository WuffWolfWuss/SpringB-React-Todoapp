import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import NavBar from "../Components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      <hr />
      <footer className="footer">Footer</footer>
    </>
  );
};

export default RootLayout;
