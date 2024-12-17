import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  // Animation variants for sliding in from the top
  const slideDownVariants = {
    hidden: { opacity: 0, y: -100 }, // Starts above viewport
    visible: {
      opacity: 1,
      y: 0, // Slides to its normal position
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5, // Sync with Welcome text delay
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={slideDownVariants}
      className="fixed top-0 left-0 w-full bg-custom-dark h-24 flex items-center justify-between px-4 sm:px-6 shadow-md z-50 sm:h-20 md:h-16"
    >
      {/* Container for Icons and Links */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
        {/* Icons Section */}
        <div className="flex justify-center sm:justify-start gap-6 mr-3 mb-2 mt-2 sm:mb-0">
          <a
            href="https://github.com/Tthompson8416"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-custom-accent text-3xl sm:text-4xl hover:text-custom-gradient" />
          </a>
          <a
            href="https://www.linkedin.com/in/tanesia-thompson-08a650246/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-custom-accent text-3xl sm:text-4xl hover:text-custom-gradient" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 sm:gap-8 justify-center sm:justify-end text-custom-gh font-semibold text-sm lg:text-3xl sm:text-lg whitespace-nowrap mt-3">
          <a
            href="#projects"
            className="hover:text-custom-accent"
          >
            My Work
          </a>
          <a
            href="#techskills"
            className="hover:text-custom-accent"
          >
            Tech Skills
          </a>
          <a
            href="#contact"
            className="hover:text-custom-accent"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
