import logo from "./../assets/images/logotipo.jpg";


const HomePage = () => {
    return (
        <div id="home" className="container-fluid">
            <div className="col-sm m-auto text-center">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <h1 className="h1 display-3">ALEXSANDRO MARTINS</h1>
                            <p className="h3 fw-normal">ENGENHEIRO DE SOFTWARE &#38; DESENVOLVEDOR BACKEND</p>
                        </div>
                        <div className="col">
                            <img src={logo} alt="lototipo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;