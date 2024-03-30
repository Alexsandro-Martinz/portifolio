import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portifolio" errorElement={<h2>Not Found!!</h2>} element={<Layout />}>
                    <Route index element={<Home />}></Route>
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