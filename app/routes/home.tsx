import Hero from "../components/Hero";
import Services from "../components/Services";
import FeatureShowcase from "../components/FeatureShowcase";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeatureShowcase />
      <Testimonials />
    </>
  );
}