import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Model from "../components/Model";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </div>
  );
};

export default Home;
