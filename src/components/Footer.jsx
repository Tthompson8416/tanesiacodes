import { HiAtSymbol } from "react-icons/hi2"; // Import the email icon
import { ImMobile } from "react-icons/im"; // Import the phone icon
import { TbFileCv } from "react-icons/tb"; // Import the resume icon
import { TbArrowBigUpLinesFilled } from "react-icons/tb"; // Import the Back to Top icon
import { useState, useEffect } from "react"; // Import useState and useEffect hooks

const Footer = () => {
  // State to toggle visibility of the back-to-top button
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

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-custom-intro-bg text-custom-intro-text py-7 relative overflow-hidden pt-24">
      {/* Gradient overlay at the top of the footer */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-custom-intro-bg to-custom-gradient"></div>

      {/* Footer content with a higher z-index */}
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10 flex flex-col items-center gap-4">

        {/* Icon row */}
        <div className="flex justify-center items-center gap-8 mb-6">
          {/* Email Icon */}
          <a
            href="mailto:tthompson8416@outlook.com"
            className="text-white pb-2 hover:text-blue-600 transition-colors text-4xl"
            aria-label="Email"
          >
            <HiAtSymbol />
          </a>

          {/* Phone Icon */}
          <a
            href="tel:3238771527"
            className="text-white pb-2 hover:text-black transition-colors text-4xl"
            aria-label="Phone"
          >
            <ImMobile />
          </a>

          {/* Resume Icon */}
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

        {/* Copyright section */}
        <p className="text-2xl mt-6">
          &copy; {new Date().getFullYear()} https://tthompson8416.github.io/tanesiacodes/
        </p>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop} // Scroll to the top of the page
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
