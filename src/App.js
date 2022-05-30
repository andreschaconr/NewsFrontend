import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from "./pages/HomePage/Home";
import GlobalStyle from "./globalStyles";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      < Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
