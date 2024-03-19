import Content from "./components/portifolio/Content";
import Footer from "./components/portifolio/Footer";
import Nav from "./components/portifolio/Nav";

function Portifolio() {
    return (<>
        <div className="container-fluid bg-light">
            <Nav />
            <Content />
            <Footer />
        </div>
    </>);
}

export default Portifolio;