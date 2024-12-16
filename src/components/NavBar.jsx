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
      className="fixed top-0 left-0 w-full bg-custom-dark h-14 flex items-center justify-between px-8 shadow-md z-50"
    >
      {/* Icons Section */}
      <div className="flex gap-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-custom-accent text-2xl hover:text-custom-gradient" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-custom-accent text-2xl hover:text-custom-gradient" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-custom-gh font-semibold">
        <a href="#projects" className="hover:text-custom-gradient">
          Projects
        </a>
        <a href="#techskills" className="hover:text-custom-gradient">
          Tech Skills
        </a>
        <a href="#contact" className="hover:text-custom-gradient">
          Contact Me
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
