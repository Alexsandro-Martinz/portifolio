import { useState } from "react";
import "./Nav.css";

function Nav() {

    const [expanded, setExpanded] = useState("");
    const items = [
        { name: "Home", link: "#home" },
        { name: "Projetos", link: "#projetos" },
        { name: "Contatos", link: "#contatos" },
        { name: "Sobre Mim", link: "#sobre-mim" },
    ];

    const listItems = items.map((item) =>
        // eslint-disable-next-line react/jsx-key
        <li className="nav-item"
            data-bs-toggle={expanded && "collapse"}
            data-bs-target="#navbar"
            aria-controls="navbar"
            onClick={() => setExpanded("")}>
            <a className="nav-link" href={item.link}>{item.name}</a>
        </li>
    )

    return (<>
        <nav id="nav" className="shadow-sm navbar navbar-expand-lg bg-light fixed-top">
            <div className="container-fluid px-3">
                <a id="portifolio-link" className="navbar-brand" href="#">PORTIFÓLIO</a>
                <button onClick={() => setExpanded(expanded ? "" : " expanded")} className={"navbar-toggler" + expanded} type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 col justify-content-end">
                        {listItems}
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}

export default Nav;