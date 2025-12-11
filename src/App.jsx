import { BrowserRouter, Routes, Route } from "react-router";
import NavbarMain from "./components/navbar/NavbarMain";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import ThankYou from "./pages/ThankYou";
import FooterMain from "./components/footer/FooterMain";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <BrowserRouter>
      <main className="overflow-x-hidden font-body antialiased">
        <NavbarMain />
        <div className="container mx-auto px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </div>
        <FooterMain />
        <BackToTop />
      </main>
    </BrowserRouter>
  );
};

export default App;
