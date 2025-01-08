import { Hero } from "./components/Hero";
// import { SearchPage } from "./components/SearchPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MovieCard } from "./components/MovieCard";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero></Hero>} />
        <Route path="movies/:id" element={<MovieCard />} />
      </Routes>
    </div>
  );
}

export default App;
