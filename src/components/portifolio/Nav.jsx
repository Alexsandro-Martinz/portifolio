import { useState } from "react";


function Nav() {

    const [expanded, setExpanded] = useState("");
    const items = [
        { name: "Home", link: "#" },
        { name: "Projetos", link: "#item-1" },
        { name: "Contatos", link: "#item-2" },
        { name: "Sobre Mim", link: "#item-3" },
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
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Alexsandro Martins</a>
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