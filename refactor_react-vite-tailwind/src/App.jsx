import Hero from "./components/sections/Hero";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Blog from "./components/sections/Blog";
import Footer from "./components/sections/Footer";
import Header from "./components/ui/Header/Header";
import Overmenu from "./components/ui/Overmenu";
import { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Overmenu isOpen={isOpen} setOpen={setOpen} />
      <Hero />
      <WhyChooseUs />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
