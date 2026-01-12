import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  PrivacyPolicy,
  Products,
  Product,
} from "./pages";

const App = () => {
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
