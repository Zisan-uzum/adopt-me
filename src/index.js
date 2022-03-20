import { render } from "react-dom";
import "./index.css";
import App from "./App";
import Details from "./components/Details.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
   <App/> 
  </BrowserRouter>,
  rootElement
);
