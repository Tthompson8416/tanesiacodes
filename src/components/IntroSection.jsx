import { useState, useEffect } from 'react';
import ProfileImage from '../assets/images/desktop.png';


const IntroSection = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Trigger welcome text animation after component mounts
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 1000);

    // Trigger intro text animation after welcome
    const introTimer = setTimeout(() => {
      setShowIntro(true);
    }, 2000);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <div>
    <div className="min-h-screen bg-custom-dark flex flex-col items-center justify-center p-4">
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>
    
      <img
        src={ProfileImage}
        alt="Profile"
        className="mb-8 rounded-lg w-[600px] h-[500px] object-cover"
      />
      
      <h1 
        className={`text-4xl md:text-5xl text-white mb-6 transition-opacity duration-1000 ease-in-out ${
          showWelcome ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Welcome.
      </h1>
      
      <p 
        className={`text-lg md:text-xl text-gray-200 text-center transition-opacity duration-1000 ease-in-out ${
          showIntro ? 'opacity-100' : 'opacity-0'
        }`}
      >
        My name is [Your Name], a front-end developer based in [Your Location].
      </p>
    </div>
    </div>   
  );
};

export default IntroSection;