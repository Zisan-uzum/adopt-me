import { render } from "react-dom";
import "./index.css";
import App from "./App";
import Details from "./components/Details.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <header>
      <Link to="/">Adopt Me!</Link>
    </header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
