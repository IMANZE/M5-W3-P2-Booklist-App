import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => (

    

  <Navbar
  collapseOnSelect
  expand="lg"
  variant="dark"
  style={{
    background:
      "linear-gradient(179deg, rgb(138 0 243) 10%, rgb(85 67 233) 50%, rgb(174 103 229) 100%)",
  }}
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
