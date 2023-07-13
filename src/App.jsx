import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryDetailsPage";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
