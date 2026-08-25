import Navbar from "./components/Navbar";
import TechBackground from "./components/TechBackground";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-bg
      "
    >
      {/* =================================================
          CUSTOM CURSOR
      ================================================== */}

      <CustomCursor />

      {/* =================================================
          GLOBAL FUTURISTIC BACKGROUND
      ================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
        "
      >
        <TechBackground />

        {/* Dark readability overlay */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg)_88%)]
          "
        />

        {/* Global blue ambient light */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/8
            blur-[120px]
          "
        />

        {/* Bottom soft dark fade */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-64
            w-full
            bg-gradient-to-t
            from-bg
            to-transparent
          "
        />
      </div>

      {/* =================================================
          NAVBAR
      ================================================== */}

      <Navbar />

      {/* =================================================
          PAGE CONTENT
      ================================================== */}

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* =================================================
          FOOTER
      ================================================== */}

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}