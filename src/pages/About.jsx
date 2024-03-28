function About() {
    return (
        <div className="container p-0 m-0 mx-auto d-flex h-100 align-items-center">
            <div className="row">
                <div className="about-left col align-items-center">
                    <p className="sobremim fw-bold">Sobre mim</p>
                    <h1 className="title display-2 fw-bold">BACKEND</h1>
                    <h1 className="title display-2 fw-bold">DEVELOPER</h1>
                </div>
                <div className="col">
                    <div className="row h-100 align-items-center">
                        <figure className="text-start">
                            <blockquote className="blockquote">
                                <p className="resumo">Sou um entusiasta da tecnologia apaixonado por resolver problemas através do desenvolvimento de software. Com foco em backend, domino <span>Python</span>, <span>Django</span>, <span>PostgreSQL</span> e <span>React</span>. Busco constantemente desafios para aprender e crescer profissionalmente. Comprometido com a excelência e sempre aberto a novas oportunidades.</p>
                            </blockquote>
                            <figcaption className="text-end pt-3 blockquote-footer">
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