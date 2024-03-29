import { Link } from "react-router-dom";
import "./Home.css";
import Download from "./../assets/icons/download.png"
import Github from "./../assets/icons/github.png"
import Linkedin from "./../assets/icons/linkedin.png"


function Home() {
    return (
        <div id="about-container">
            <div id="about-content">
                <div id="title-container" className="about-content-row">
                    <p>Welcome to my portifólio</p>
                    <h1>BACKEND DEVELOPER</h1>
                    <ul>
                        <li><Link to="projects">Projects</Link></li>
                        <li><Link to="contacts">Contact</Link></li>
                        <li><Link to="about">About</Link></li>
                    </ul>
                    <ul>
                        <li><img src={Github} alt="" /></li>
                        <li><img src={Linkedin} alt="" /></li>
                        <li><img src={Download} alt="" /></li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Home;