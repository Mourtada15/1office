import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from "react-router-dom";

const NavbarMenu = () => {
  const location = useLocation();
  const pathname = location.pathname;


  return (
    <Navbar expand="lg" className={pathname === '/' ? "navbar-bground" : "navbar-bground-vo"} style={{display: 'flex', alignItems: "flex-start", paddingTop: "0"}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src="/1O_Logo_Draft2.png" alt="logo" width={'100px'}/></Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor: "unset"}} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT US</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#packages" >PACKAGES</Nav.Link>
            <Nav.Link href="#gallery" >GALLERY</Nav.Link>
            <Nav.Link href="#contact" >CONTACT US</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="navbar-search-button">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;