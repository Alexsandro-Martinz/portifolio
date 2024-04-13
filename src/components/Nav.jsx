import LinkTooltip from "./LinkTooltip";


function Nav() {

  const navStyleItem = "nav-item";
  const navStyleLink = "nav-link";

  return (
    <nav className=" navbar navbar-expand-lg bg-light border p-0 m-0 fixed-top">
      <div className="container p-2">
        <a className="navbar-brand fw-bold" href="">ALEXSANDRO MARTINS</a>
        <button id="toggler-btn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <LinkTooltip styleItem={navStyleItem} styleLink={navStyleLink} tooltip={"Go to home page"} url={""} text={"Home"} />
            <LinkTooltip styleItem={navStyleItem} styleLink={navStyleLink} tooltip={"See my projects"} url={"projects"} text={"Projects"} />
            <LinkTooltip styleItem={navStyleItem} styleLink={navStyleLink} tooltip={"Send me a message"} url={"contacts"} text={"Contacts"} />
            <LinkTooltip styleItem={navStyleItem} styleLink={navStyleLink} tooltip={"Meet me more"} url={"about"} text={"About"} />
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Nav;