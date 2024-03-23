
import "./NavBarLayout.css";
import { Link } from "react-router-dom";

function FooterLayout() {
    return (
        <footer className="px-3 py-2 fixed-bottom bg-body-tertiary">
            <div className="m-0 p-0 container-fluid">
                <div className="d-flex mx-0 text-nowrap justify-content-between">
                    <div className="d-inline-flex px-0 pt-1">
                        <span>© 2024 Copyright:</span>
                        <a className="text-black ps-1 text-decoration-none" href="">alexsandromartins.com.br</a>
                    </div>

                    <div className="px-0 pt-1 d-inline-flex text-center">
                        <Link to={"https://www.linkedin.com/in/alexsandro-martins/"} className=""><i className="bi bi-linkedin h3"></i></Link>
                        <Link to={"https://github.com/Alexsandro-Martinz"} className="text-black"><i className="bi bi-github h3 bg-ligth"></i></Link>
                        <Link rel="noreferrer" to="alexsandromartins.docx"
                            target="_blank" className="text-black">
                            <i className="bi bi-file-earmark-arrow-down h3"></i></Link>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default FooterLayout;