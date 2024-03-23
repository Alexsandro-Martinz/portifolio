
import "./NavBarLayout.css";
import { Link } from "react-router-dom";

function FooterLayout() {
    return (
        <footer className="px-0 py-2 fixed-bottom bg-body-tertiary">
            <div className="m-0 p-0 container-fluid">
                <div className="row mx-0 text-nowrap justify-content-between">
                    <div className="col ps-3 pt-1">
                        <span>© 2024 Copyright:</span>
                        <a className="text-black ps-1 text-decoration-none" href="">alexsandromartins.com.br</a>
                    </div>

                    <div className=" pt-1 col-sm-1 text-center">
                        <Link to={"https://www.linkedin.com/in/alexsandro-martins/"} className="mx-1"><i className="bi bi-linkedin h4"></i></Link>
                        <Link to={"https://github.com/Alexsandro-Martinz"} className="text-black mx-1"><i className="bi bi-github h4 bg-ligth"></i></Link>
                        <Link to={"/src/assets/files/alexsandrodasilvamartins.docx"} target="_blank" download className="mx-1 text-black"><i className="bi bi-file-earmark-arrow-down h4"></i></Link>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default FooterLayout;