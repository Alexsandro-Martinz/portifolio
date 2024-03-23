import { Nav, Navbar, TabContainer } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./NavBarLayout.css";
import { useEffect } from "react";


function NavBarLayout() {
    const location = useLocation();

    useEffect(() => {
        let name = location.pathname.split("/")[2];
        name = name == null ? "home" : name;

        ['home', 'projects', "contacts", "about"].map((n) => {
            const btn = document.getElementById(n);
            const fw = n == name ? "bold" : "normal";
            btn.style.fontWeight = fw;
        })
    }, [location.pathname]);

    {
        return (
            <Navbar expand="lg" className="px-3 py-2 fixed-top bg-body-tertiary">
                <TabContainer>
                    <Navbar.Brand id="nav-title" onClick={() => document.getElementById("home").click()}>PORTIFÓLIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav id="nav" className="ms-auto" role="presentation">

                            <div className="d-flex">
                                <div className="ps-3 nav-item d-inline-flex">
                                    <Link id="home" className="nav-link" to={""}>Home</Link>
                                </div>
                                <div className="ps-3 d-inline-flex">
                                    <Link id="projects" className="nav-link " to="projects">Projetos</Link>
                                </div>
                                <div className="ps-3 d-inline-flex">
                                    <Link id="contacts" className="nav-link " to="contacts" >Contatos</Link>
                                </div>
                                <div className="ps-3 d-inline-flex">
                                    <Link id="about" className="nav-link " to="about">Sobre Mim</Link>
                                </div>
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </TabContainer>
            </Navbar>
        );
    }
}
export default NavBarLayout;