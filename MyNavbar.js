import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LangContext } from "./context/LangContext";

function MyNavbar() {
  const { lang, setLang } = useContext(LangContext);

  let toggleLang = () => {
    lang === "en" ? setLang("ar") : setLang("en");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Movies
            </Link>
            <Link to="/favorites" className="nav-link">
              favorites
            </Link>
            <Link to="/top_rated" className="nav-link">
              Top Rated
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Nav>
          <Button variant="info" onClick={toggleLang}>
            {lang}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
