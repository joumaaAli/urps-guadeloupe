import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand>Logo URPS-mk-Guadeloupe </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.navLink} href="/home">
              Accueil
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="">
              Qui sommes-nous?
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="">
              Inscription
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="">
              Annuaire
            </Nav.Link>

            <Nav.Link className={styles.navLink}>Nous contacter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
