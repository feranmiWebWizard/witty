import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ComingSoon from "../pages/coming-soon/TeaserPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default AppRoutes;
