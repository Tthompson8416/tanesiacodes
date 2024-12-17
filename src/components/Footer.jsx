import { HiAtSymbol } from "react-icons/hi2";
import { ImMobile } from "react-icons/im";
import { TbFileCv } from "react-icons/tb";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact" className="bg-custom-intro-bg text-custom-intro-text py-7 relative overflow-hidden md:pt-8 pt-12 h-48"
      style={{ paddingBottom: `calc(1rem + env(safe-area-inset-bottom))` }}
    >
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-t from-custom-intro-bg to-custom-gradient"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10 flex flex-col items-center gap-4 pb-2">
        <p id="contactme" className="text-2xl sm:text-3xl md:text-4xl font-thin">Contact Me</p>
        <div className="flex justify-center items-center gap-12">
          <a
            href="mailto:tthompson8416@outlook.com"
            className="text-white pb-2 hover:text-blue-600 transition-colors text-4xl md:text-5xl"
            aria-label="Email"
          >
            <HiAtSymbol />
          </a>

          <a
            href="tel:3238771527"
            className="text-white pb-2 hover:text-black transition-colors text-4xl md:text-5xl"
            aria-label="Phone"
          >
            <ImMobile />
          </a>

          <a
            href="/tanesiacodes/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-400 transition-colors text-4xl md:text-5xl"
            aria-label="Resume"
          >
            <TbFileCv />
          </a>
        </div>

        {/* Copyright Section */}
        <p
          className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-center break-words leading-tight max-w-full"
          style={{ wordBreak: "break-word", wordWrap: "break-word" }}
        >
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://tthompson8416.github.io/tanesiacodes/"
            className="hover:underline"
          >
            https://tthompson8416.github.io/tanesiacodes/
          </a>
        </p>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-custom-accent text-white p-3 rounded-full shadow-lg hover:bg-custom-accent-dark transition-all duration-300 z-50"
          aria-label="Back to Top"
        >
          <TbArrowBigUpLinesFilled className="text-2xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
