import { Link } from "react-router-dom";

function Nav() {

  const closeToggler = () => {
    document.getElementById("toggler-btn").click();
    return;
  }

  return (
    <nav className=" navbar navbar-expand-lg bg-light border p-0 m-0 fixed-top">
      <div className="container p-2">
        <a className="navbar-brand fw-bold" href="#">ALEXSANDRO MARTINS</a>
        <button id="toggler-btn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={""} onClick={closeToggler} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"projects"} onClick={closeToggler} className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to={"contacts"} onClick={closeToggler} className="nav-link">Contacts</Link>
            </li>
            <li className="nav-item">
              <Link to={"about"} onClick={closeToggler} className="nav-link pe-0">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Nav;