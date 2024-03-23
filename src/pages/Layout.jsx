import { Outlet } from "react-router-dom";
import NavBarLayout from "../components/NavBarLayout";
import FooterLayout from "../components/FooterLayout";

function Layout() {
    return (
        <>
            <NavBarLayout />
            <Outlet />
            <FooterLayout />
        </>
    );
}

export default Layout;