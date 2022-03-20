import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
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
