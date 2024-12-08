import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '../assets/images/desktop.png';

const IntroSection = () => {
  // State to manage the dynamically typed text
  const [typedText, setTypedText] = useState(''); 
  // State to control the visibility of the welcome text
  const [showWelcome, setShowWelcome] = useState(false); 
  // State to track when typing animation is complete
  const [isTypingComplete, setIsTypingComplete] = useState(false); 

  // Introductory text to be typed out
  const introText =
    "My name is Tanesia Thompson, I'm a front-end developer based in Richmond, Virginia. With a passion for combining technical precision and design-driven problem-solving, I aim to craft innovative web experiences that balance aesthetic appeal with functional excellence. I specialize in creating dynamic, user-focused digital solutions through expertise in HTML, CSS, JavaScript, and React to enhance usability and engagement.";

  useEffect(() => {
    // Track the current character index during typing
    let currentIndex = 0; 
    // Accumulator for the typed text
    let typed = ''; 
    // Speed of typing animation (milliseconds between characters)
    const typingInterval = 50;
    // Variable to store the interval timer
    let typingTimer;
    
    // Function to simulate typing text character by character
    const typeText = () => {
      if (currentIndex < introText.length) {
        // Add next character to the typed text
        typed += introText.charAt(currentIndex); 
        setTypedText(typed); 
        currentIndex++;
      } else {
        // Mark typing as complete when all characters are typed
        setIsTypingComplete(true); 
        clearInterval(typingTimer); 
      }
    };
    
    // Delay welcome text and start typing animation
    const welcomeTimer = setTimeout(() => {
      // Show welcome text after 1 second
      setShowWelcome(true); 
      // Start typing animation
      typingTimer = setInterval(typeText, typingInterval); 
    }, 1000);
    
    // Cleanup function to clear timers and prevent memory leaks
    return () => {
      clearTimeout(welcomeTimer);
      clearInterval(typingTimer);
    };
  }, [introText]);
    
  return (
    // Main container with entrance animation using Framer Motion
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="intro-section-container"
    >
      <div className="min-h-screen bg-custom-dark flex flex-col items-center justify-center p-0 pt-18 lg:pb-56 relative overflow-hidden">
        {/* Gradient overlay at the bottom of the section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>

        {/* Animated profile image with scale and opacity transition */}
        <motion.img
          src={ProfileImage}
          alt="Profile"
          className="mb-10 mr-5 rounded-lg w-[600px] h-[500px] object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Welcome text with conditional visibility and transition */}
        <motion.h1
          className={`text-4xl md:text-5xl text-white mb-4 transition-transform duration-1000 ease-in-out ${
            showWelcome ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Welcome.
        </motion.h1>

        {/* Typed introduction text with blinking cursor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showWelcome ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-gray-200 text-center mx-10 p-5"
        >
          <span>{typedText}</span>
          {/* Animated blinking cursor that appears during typing */}
          {!isTypingComplete && (
            <motion.span
              className="inline-block w-1 h-5 bg-white ml-1 animate-blink"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroSection;