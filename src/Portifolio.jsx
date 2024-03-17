import Content from "./components/portifolio/Content";
import Nav from "./components/portifolio/Nav";

function Portifolio() {
    return (<>
        <div className="container-fluid bg-light">
            <Nav />
            <Content />
        </div>
    </>);
}

export default Portifolio;