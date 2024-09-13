import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Mac from "./pages/Mac";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<Mac />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
