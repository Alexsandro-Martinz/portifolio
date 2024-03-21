import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/Index.css";
import "./Nav";
import Nav from "./Nav";
import Footer from "./Footer";
import Content from "./Content";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container-fluid bg-light">
      <Nav />
      <Content />
      <Footer />
    </div>
  </React.StrictMode>
);
