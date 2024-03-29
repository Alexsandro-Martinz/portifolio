import "./About.css";

function About() {
    return (
        <div id="about-container">
            <div id="about-content">
                <div className="about-content-row" id="title-container">
                    <h1 className="">BACKEND</h1>
                    <h1 className="">DEVELOPER</h1>
                </div>
                <div className="about-content-row" id="resume-container">
                    <div className="">
                        <figure className="">
                            <blockquote className="">
                                <p className="">Sou um entusiasta da tecnologia apaixonado por resolver problemas através do desenvolvimento de software. Com foco em backend, domino <span>Python</span>, <span>Django</span>, <span>PostgreSQL</span> e <span>React</span>. Busco constantemente desafios para aprender e crescer profissionalmente. Comprometido com a excelência e sempre aberto a novas oportunidades.</p>
                            </blockquote>
                            <figcaption className="">
                                Alexsandro Martins
                            </figcaption>
                        </figure>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;