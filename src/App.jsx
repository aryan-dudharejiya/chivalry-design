import { Routes, Route, useLocation } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  PrivacyPolicy,
  Products,
  Product,
} from "./pages";

const App = () => {
  const location = useLocation();

  // 🔴 IMPORTANT:
  // Do NOT render React routes for /admin
  // This allows Decap CMS to load correctly
  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default App;
