import { Navbar, Container, Nav } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";

import authContext from "../context/auth-context";

const NavBar = () => {
  const ctx = useContext(authContext);
  console.log(ctx);
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Nav className="me-auto">
          {ctx.isLoggedIn && (
            <Nav.Link as={Link} to="/todos">
              Todo
            </Nav.Link>
          )}
          <Nav.Link href="#pricing">Something</Nav.Link>
        </Nav>
        <Nav>
          {!ctx.isLoggedIn && (
            <Nav.Link as={Link} to="/loginV1">
              Login
            </Nav.Link>
          )}
          {ctx.isLoggedIn && <Nav.Link onClick={ctx.onLogout}>Logout</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
