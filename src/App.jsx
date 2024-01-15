import "./assets/css/App.css";

import linkedinIcon from "./assets/images/linkedin.png";
import githubIcon from "./assets/images/github.png";
import downloadIcon from "./assets/images/download.png";

import Project from "./components/Project";

function App() {
  return (
    <div className="app">
      <p className="nav">Alexsandro Martins</p>
      <div className="main">
        <div className="main-container">
          <div className="greeting">OI, EU SOU O ALEXSANDRO</div>
          <div className="title">
            <span>JAVA</span>
            <a href="https://www.linkedin.com/in/alexsandro-martins/">
              <img src={linkedinIcon} alt="linkedin icon" />
            </a>
            <a href="https://github.com/Alexsandro-Martinz">
              <img src={githubIcon} alt="github icon" />
            </a>
            <a href="">
              <img src={downloadIcon} alt="" />
            </a>
          </div>
          <div className="title">DEVELOPER</div>
          <div className="description-container">
            <span className="description">
              Sou desenvolvedor backend e busco a minha primeira oportunidade.
            </span>
          </div>
        </div>
      </div>
      <div className="project-container">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default App;
