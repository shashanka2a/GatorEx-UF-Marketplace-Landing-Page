import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import LiveListings from "./components/LiveListings";
import TrustSafety from "./components/TrustSafety";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <HowItWorks />
      <LiveListings />
      <TrustSafety />
      <Footer />
    </div>
  );
}