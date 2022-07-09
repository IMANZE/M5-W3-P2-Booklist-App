import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="secondary"
    variant="light shadow-lg bg-white rounded"
  >
    <Navbar.Brand href="#home">Ezi Book Library</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>About</Nav.Link>
        <Nav.Link>Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default NavBar;
