
// eslint-disable-next-line react/prop-types
function Project({ name, description }) {
    return (<>
        <div className="col-lg-4 mb-4">
            <div className="card">
                <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Ver Projeto</a>
                </div>
            </div>
        </div>
    </>);
}


function ProjectPage() {
    return (
        <div id="projetos" className="content-section row container-fluid">
            <div className="col m-auto text-center">
                <div className="container mt-5">
                    <p className="mb-4">Meus Projetos</p>
                    <div className="row">
                        <Project name="Projeto" description="Descrição do projeto" />
                        <Project name="Projeto" description="Descrição do projeto" />
                        <Project name="Projeto" description="Descrição do projeto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;