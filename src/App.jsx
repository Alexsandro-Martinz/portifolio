import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/Home";
import Projects from "./pages/Project";
import Contacts from "./pages/Contact";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portifolio" element={<Layout />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path="projects" element={<Projects />}></Route>
                    <Route path="contacts" element={<Contacts />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="*" element={<h2>Not Found!!</h2>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;