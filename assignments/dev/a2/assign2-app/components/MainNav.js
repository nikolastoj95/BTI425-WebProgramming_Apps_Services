import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function MainNav () {
    return (
      <>
        <Navbar className="fixed-top navbar-dark bg-dark"  >
          <Container>
            <Navbar.Brand as={Link} href="/" >Nikola Stojanovic</Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} href="/">Books</Nav.Link> */}
              <Nav.Link as={Link} href="/about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <br />
      </>
    );
}