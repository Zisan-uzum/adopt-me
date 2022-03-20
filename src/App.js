import SearchParams from "./components/SearchParams";

import { Link } from "react-router-dom";
import { useState } from "react";
const App = () => {
  return (
    <>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </>
  );
};
export default App;
