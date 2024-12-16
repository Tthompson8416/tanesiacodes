import { motion } from "framer-motion";
import ProfileImage from "../assets/images/desktop.png";
import Navbar from "../components/NavBar"; // Import the new Navbar

const IntroSection = () => {
  // Animation for paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const introText = `My name is Tanesia Thompson, I'm a front-end developer based in Richmond, Virginia. With a passion for combining technical precision and design-driven problem-solving, I aim to craft innovative web experiences that balance aesthetic appeal with functional excellence. I specialize in creating dynamic, user-focused digital solutions through expertise in HTML, CSS, JavaScript, and React to enhance usability and engagement.`;

  const words = introText.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="intro-section-container"
    >
      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen bg-custom-intro-bg flex flex-col items-center justify-center p-0 pt-18 lg:pb-56 relative overflow-hidden">
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
          className="text-5xl font-bold md:text-6xl text-custom-light mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome.
        </motion.h1>

        {/* Animated paragraph */}
        <motion.div
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="font-thin text-custom-intro-text text-center mx-auto p-5 max-w-screen-md sm:max-w-[700px] md:max-w-[900px] lg:max-w-[900px] xl:max-w-[1100px] xl:mt-12 pb-24 xl:pb-2 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl"
        >
          {words.map((word, index) => {
            const isSpecialWord = [
              "Tanesia",
              "Thompson",
              "front-end developer",
            ].includes(word.replace(",", ""));
            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className={`inline-block mr-2 ${
                  isSpecialWord ? "text-custom-gradient font-semibold" : ""
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroSection;
