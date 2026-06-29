import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;