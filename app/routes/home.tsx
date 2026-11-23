import Hero from "../components/Hero";
import Services from "../components/Services";
import FeatureShowcase from "../components/FeatureShowcase";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeatureShowcase />
      <Testimonials />
      <Team />
      <Newsletter />
    </>
  );
}