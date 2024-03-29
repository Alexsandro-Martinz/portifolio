import "./Nav.css";


function Nav() {

  return (<>

    <nav id="nav-container" >
      <div id="nav-content">
        <div>
          <span>ALEXSANDRO MARTINS</span>
        </div>
        <ul id="nav-links">
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
      </div>
    </nav >
  </>
  );
}

export default Nav;