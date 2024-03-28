import { Routes, Route, useNavigate } from "react-router-dom";
import { NavBar } from "./components/global/NavBar";
import { Home } from "./pages/Home";
import { Footer } from "./components/global/Footer";
import { Categories } from "./pages/Categories";
import { useState } from "react";

function App() {
  let [category, setCategory] = useState("all");
  const navigate = useNavigate();

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    navigate(`/categories/${newCategory.toLowerCase()}`);
  };

  return (
    <>
      <NavBar category={ category } setCategory={ handleCategoryChange } />
      <Routes>
        <Route path="/" element={ <Home setCategory={ handleCategoryChange } /> } />
        <Route
          path="/categories/:id"
          element={ <Categories category={ category } setCategory={ handleCategoryChange } /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
