import React from "react";
import {
  Navbar,
  Hero,
  CategoryExplore,
  CatalogSection,
  CollectionsShowcase,
  TestimonialsSection,
  ProductShowcase,
  Milestones,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <CategoryExplore />
      <Milestones />
      <CatalogSection />
      <CollectionsShowcase />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
