import "./Content.css";

function Content() {
    return (<>

        <div className="col">
            <div id="content" data-bs-spy="scroll" data-bs-smooth-scroll="true" className="scrollspy-example-2">

                <div id="home" className="content-section row container-fluid">
                    <div className="col m-auto text-center">
                        <h1 className="display-3">ALEXSANDRO MARTINS</h1>
                        <h3 className="fw-normal">ENGENHEIRO DE SOFTWARE &#38; DESENVOLVEDOR BACKEND</h3>
                    </div>
                </div>

                <div id="projetos" className="content-section row container-fluid">
                    <div className="col m-auto text-center">
                        <div className="container mt-5">
                            <h1 className="mb-4">Meus Projetos</h1>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Projeto 1</h5>
                                            <p className="card-text">Descrição do Projeto 1.</p>
                                            <a href="#" className="btn btn-primary">Ver Projeto</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Projeto 2</h5>
                                            <p className="card-text">Descrição do Projeto 2.</p>
                                            <a href="#" className="btn btn-primary">Ver Projeto</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Projeto 3</h5>
                                            <p className="card-text">Descrição do Projeto 3.</p>
                                            <a href="#" className="btn btn-primary">Ver Projeto</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="contatos" className="content-section row container-fluid">
                    <div className="col m-auto text-center">
                        <h1 className="display-3">Contatos</h1>
                    </div>
                </div>

                <div id="sobre-mim" className="content-section row container-fluid">
                    <div className="col m-auto text-center">
                        <div className="mb-5">
                            <h1 className="display-4">Backend Developer</h1>
                            <h2>Sobre Mim</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>);
}

export default Content;