import { HiAtSymbol } from "react-icons/hi2";
import { ImMobile } from "react-icons/im";
import { TbFileCv } from "react-icons/tb";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling past a certain point
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Show when scrolled 300px or more
      } else {
        setIsVisible(false); // Hide when scrolled less than 300px
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-custom-intro-bg text-custom-intro-text py-7 relative overflow-hidden pt-24"
      style={{ paddingBottom: `calc(1rem + env(safe-area-inset-bottom))` }}
      /* Added dynamic padding to ensure the footer is not cut off on devices with a safe area inset (e.g., iPhone) */
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-custom-intro-bg to-custom-gradient"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10 flex flex-col items-center gap-4">
        <div className="flex justify-center items-center gap-8 mb-6">
          <a
            href="mailto:tthompson8416@outlook.com"
            className="text-white pb-2 hover:text-blue-600 transition-colors text-4xl"
            aria-label="Email"
          >
            <HiAtSymbol />
          </a>

          <a
            href="tel:3238771527"
            className="text-white pb-2 hover:text-black transition-colors text-4xl"
            aria-label="Phone"
          >
            <ImMobile />
          </a>

          <a
            href="/tanesiacodes/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-400 transition-colors text-4xl"
            aria-label="Resume"
          >
            <TbFileCv />
          </a>
        </div>

        <p
          className="text-xl mt-6 pr-4 pl-4 text-center break-words"
          style={{
            wordBreak: "break-word", 
            fontSize: "0.875rem",
          }}
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
