import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/global/NavBar";
import { Home } from "../pages/Home";
// import { Footer } from "./components/global/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
      {/* <Footer /> */ }
    </>
  );
}

export default App;
