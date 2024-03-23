import { Nav, Navbar, TabContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBarLayout.css";

function NavBarLayout() {
    return (
        <Navbar expand="lg" className="px-3 fixed-top bg-body-tertiary">
            <TabContainer>
                <Navbar.Brand className="" id="nav-title" href="/">PORTIFÓLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="nav-link" to={""}>Home</Link>
                        <Link className="nav-link" to="projects">Projetos</Link>
                        <Link className="nav-link" to="contacts" >Contatos</Link>
                        <Link className="nav-link" to="about">Sobre Mim</Link>
                    </Nav>
                </Navbar.Collapse>
            </TabContainer>
        </Navbar>
    );
}

export default NavBarLayout;