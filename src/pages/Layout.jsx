import { Outlet } from "react-router-dom";
import Nav from "./../components/Nav";
import "./Layout.css";


function Layout() {
    return (
        < div id="layout-container" >

            <Nav />
            <Outlet />

        </div >
    );
}

export default Layout;

