import { Outlet } from "react-router-dom";
import Nav from "./../components/Nav";
import "./Layout.css";


function Layout() {
    return (
        < div className="container-fluid p-0 m-0">

            <Nav />
            <div className="container-base container-fluid">
                <div className="container h-100 d-flex justify-content-center align-items-center m-auto p-0">
                    <Outlet />
                </div>
            </div>

        </div >
    );
}

export default Layout;

