import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { NavBar } from "./components/global/NavBar";
import { Home } from "./pages/Home";
import { Footer } from "./components/global/Footer";
import { Categories } from "./pages/Categories";
import { useState } from "react";
import { Product } from "./pages/Product";
import { useEffect } from "react";

function App() {
  let [category, setCategory] = useState("all");
  const navigate = useNavigate();

  // when the route changes, always scroll on the top of the page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
        <Route
          path="/product/:id"
          element={ <Product /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
