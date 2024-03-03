import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/global/NavBar";
import { Footer } from "./components/global/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>{/* <Route path="/" element={}/> */}</Routes>
      <Footer />
    </>
  );
}

export default App;
