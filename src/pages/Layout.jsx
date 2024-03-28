import { Outlet } from "react-router-dom";
import Nav from "./../components/Nav";
import "./Layout.css";


function Layout() {
    return (
        < div id="layout-container" className="container-fluid d-block p-0 m-0" >

            <Nav />
            <Outlet />

        </div >
    );
}

export default Layout;

