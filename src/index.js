import { render } from "react-dom";
import "./index.css";
import App from "./App";
import Details from "./components/Details.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Details" element={<Details />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
