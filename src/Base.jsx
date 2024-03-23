import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";



function Base() {
    return (
        <>
            <div className="container-fluid bg-light">
                <Nav />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default Base;