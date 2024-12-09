import { motion } from 'framer-motion'; // Import Framer Motion for animations
import ProfileImage from '../assets/images/desktop.png'; // Import profile image

const IntroSection = () => {
  // Framer Motion animation variants for each letter/word
  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 }, // Initial state: hidden, moved to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1, // Delay before the animation starts
        duration: 0.5, // Duration of each letter's animation
        staggerChildren: 0.05, // Stagger the animation for each character (adjust as needed)
      },
    },
  };

  // Variant for each word or character
  const wordVariants = {
    hidden: { opacity: 0, x: -50 }, // Each word starts off-screen to the left
    visible: {
      opacity: 1,
      x: 0, // Bring the word/letter into its final position
      transition: { duration: 0.5 },
    },
  };

  const introText = `My name is Tanesia Thompson, I'm a front-end developer based in Richmond, Virginia. With a passion for combining technical precision and design-driven problem-solving, I aim to craft innovative web experiences that balance aesthetic appeal with functional excellence. I specialize in creating dynamic, user-focused digital solutions through expertise in HTML, CSS, JavaScript, and React to enhance usability and engagement.`;

  // Split the text into an array of words for word-based animation
  const words = introText.split(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Initial animation for the whole section
      animate={{ opacity: 1, y: 0 }} // Final animation for the whole section
      transition={{ duration: 1 }} // Timing for the section animation
      className="intro-section-container"
    >
      <div className="min-h-screen bg-custom-dark flex flex-col items-center justify-center p-0 pt-18 lg:pb-56 relative overflow-hidden">
        {/* Gradient overlay at the bottom of the section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>

        {/* Animated profile image */}
        <motion.img
          src={ProfileImage}
          alt="Profile"
          className="mb-10 mr-5 rounded-lg w-[600px] h-[500px] object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Welcome text */}
        <motion.h1
          className="text-4xl md:text-5xl text-white mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }} // Slight delay for welcome text
        >
          Welcome.
        </motion.h1>

        {/* Animated paragraph with staggered word animation */}
        <motion.div
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-gray-200 text-center mx-10 p-5"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants} // Apply the individual word animation
              className="inline-block mr-2" // Ensure proper spacing between words
            >
              {word} {/* Display each word */}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroSection;
