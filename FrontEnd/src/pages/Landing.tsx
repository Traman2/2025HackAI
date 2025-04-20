import Navbar from "../components/Landing/NavBar";
import Hero from "../components/Landing/Hero";
import FeaturesSection from "../components/Landing/FeatureSection";
import CallToAction from "../components/Landing/CallToAction";
import Footer from "../components/Landing/Footer";

// Main App Component
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
