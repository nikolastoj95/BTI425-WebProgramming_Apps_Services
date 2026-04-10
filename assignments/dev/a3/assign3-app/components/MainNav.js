import { readToken, removeToken } from "@/lib/authenticate";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function MainNav () {
     const token = readToken();
     const router = useRouter();

    function logout () {
      console.log('logging out!')
      removeToken();
      router.push('/login');
    }

    return (
      <>
        <Navbar className="fixed-top navbar-dark bg-dark">
          <Container>
            <Navbar.Brand as={Link} href="/">
              Nikola Stojanovic
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/about">
                About
              </Nav.Link>
            </Nav>
            {token ? (
              <Nav>
                <NavDropdown title={token.userName} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} href="/favourites" >Favourites</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item  onClick={logout}>
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

            ): ( // no token  show the register/ login link
              <Nav> {router.pathname === '/login' ? (
                   <Nav.Link as={Link} href="/register">Register</Nav.Link>
                ):  <Nav.Link as={Link} href="/login">Login</Nav.Link> }
                
              </Nav>
            )}
          </Container>
        </Navbar>
        <br />
        <br />
      </>
    );
}