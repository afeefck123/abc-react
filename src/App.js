// import React from "react";
// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Aboutus from "./components/About";
// import OurCustomers from "./components/OurCustomers";
// import OurPackages from "./components/OurPackages";
// import Portfolio from "./components/Portfolio";
// import Blog from "./components/Blog";
// import Footer from "./components/Footer";
// import Footers from "./components/Footers";
// import Contact from "./components/Contact";
// import Elite from "./components/Elite";
// import Premium from "./components/Premium";
// import Advanced from "./components/Advanced";
// import "./App.css";  

// function App() {
//   return (
//     <Router>
//       <ConditionalNavbar /> {/* ✅ Navbar is hidden on Footers Page */}
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/about" element={<Aboutus />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/customers" element={<OurCustomers />} />
//         <Route path="/packages" element={<OurPackages />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/elite" element={<Elite />} />
//         <Route path="/premium" element={<Premium />} />
//         <Route path="/advanced" element={<Advanced />} />
//         <Route path="/footer" element={<Footer />} />
//         <Route path="/footers" element={<Footers />} /> {/* ✅ This is where we hide the Navbar */}
//       </Routes>
//       <ConditionalFooter /> {/* ✅ Footer is hidden on Home Page */}
//     </Router>
//   );
// }

// // ✅ Hide Navbar only on Footers Page
// const ConditionalNavbar = () => {
//   const location = useLocation();
//   return location.pathname === "/footers" ? null : <Navbar />;
// };

// // ✅ Hide Footer on Home Page
// const ConditionalFooter = () => {
//   const location = useLocation();
//   return location.pathname === "/" ? null : <Footer />;
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/About";
import OurCustomers from "./components/OurCustomers";
import OurPackages from "./components/OurPackages";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Elite from "./components/Elite";
import Premium from "./components/Premium";
import Advanced from "./components/Advanced";
import "./App.css";

const FooterWrapper = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return <Footer />;
};

function App() {
  const [isFooterActive, setIsFooterActive] = useState(false);

  return (
    <Router>
      {/* Conditionally render the Navbar based on the state passed from Hero */}
      {!isFooterActive && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero onFooterActive={setIsFooterActive} />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customers" element={<OurCustomers />} />
        <Route path="/packages" element={<OurPackages />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/elite" element={<Elite />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/advanced" element={<Advanced />} />
      </Routes>

      {/* Footer would be conditionally rendered based on the current route */}
      <FooterWrapper />
    </Router>
  );
}

export default App;