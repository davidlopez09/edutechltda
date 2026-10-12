import React from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { ClientsAndTestimonials } from "./components/ClientsAndTestimonials";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export function App() {
  return (
    <div className="app-root">
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <About />
        <ClientsAndTestimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
