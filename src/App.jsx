import { Hero } from "./components/Hero";
// import { SearchPage } from "./components/SearchPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DisplayPage } from "./components/DisplayPage";
import { NavBar } from "./components/NavBar";
import { SearchPage } from "./components/SearchPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero></Hero>} />
        <Route path="movies/:id" element={<DisplayPage />} />
        <Route path="search/:query" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
