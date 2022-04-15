import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
const App = () => {
  return (
    <>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route
          path="/Details/:id"
          element={
            <ErrorBoundary>
              <Details />
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  );
};
export default App;
