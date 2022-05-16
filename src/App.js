import "./App.css";
import Calculator from "./components/calculator.js";
import BandCalculator from "./components/bandcalculator.js";
import Spreadsheet from "./components/spreadsheet.js";
import Footer from "./components/footer.js";
import NavBar from "./components/navbar.js";
import About from "./pages/about.js";
import Home from "./pages/home.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="spreadsheet" element={<Spreadsheet />} />
        <Route path="bandcalculator" element={<BandCalculator />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h3 align="center" style={{ color: "red" }}>
                There's nothing here!
              </h3>
            </main>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
