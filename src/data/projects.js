import projectOneImage from '/public/assets/images/Run-Buddy.jpg';
import projectTwoImage from '/public/assets/images/taskinator.jpg';
import projectThreeImage from '/public/assets/images/Fridge-to-Feast.jpg';
import projectFourImage from '/public/assets/images/Battle-Bots.jpg';
import projectFiveImage from '/public/assets/images/Password-Generator.jpg';
import projectSixImage from '/public/assets/images/Weather-Dashboard.jpg';


// Projects array
const projects = [
  {
    // Project One
    title: "Run Buddy", 
    description: "A simple and stylish website that lets users register, consult with trainers for personalized running plans, and track their progress. Built with HTML and CSS.",
    image: projectOneImage, // Local image import
    techStack: ["HTML", "CSS"],
    link: "https://tthompson8416.github.io/run-buddy",
    githubLink: "https://github.com/Tthompson8416/run-buddy"
  },
  {
    // Project Two
    title: "Taskinator",
    description: "A dynamic task management app built with JavaScript, React, and Tailwind CSS. Users can create tasks, categorize them with labels, and update their status / track tasks through their life cycle with ease.",
    image: projectTwoImage,
    techStack: ["JavaScript", "React", "Tailwind CSS"],
    link: "https://tthompson8416.github.io/taskinator",
    githubLink: "https://github.com/Tthompson8416/taskinator"
  },
  {
    // Project Three
    title: "Fridge to Feast",
    description: "A recipe search app that transforms your ingredients into delicious dishes. Simply enter an ingredient, and the app fetches recipes with photos using an API. Built with HTML, CSS, and JavaScript.",
    image: projectThreeImage,
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://tthompson8416.github.io/fridge-to-feast",
    githubLink: "https://github.com/Tthompson8416/fridge-to-feast"
  },
  {
    // Project Four
    title: "Battle Bots",
    description: "A thrilling robot battle simulator where users name their robot, fight computer opponents, visit a shop for upgrades, and track stats after each round. Built with HTML and JavaScript.",
    image: projectFourImage,
    techStack: ["HTML", "JavaScript"],
    link: "https://tthompson8416.github.io/Battle-Bots",
    githubLink: "https://github.com/Tthompson8416/Battle-Bots"
  },
  {
    // Project Five
    title: "Password Generator",
    description: "A simple and secure tool to create random passwords. Users can customize character types and password length. Built with HTML, CSS, and JavaScript.",
    image: projectFiveImage,
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://tthompson8416.github.io/Password-Generator",
    githubLink: "https://github.com/Tthompson8416/Password-Generator"
  },
  {
    // Project Six
    title: "Weather Dashboard",
    description: "A responsive app that lets users search for real-time weather updates by city and view a detailed 5-day forecast. Built with HTML, CSS, and JavaScript.",
    image: projectSixImage,
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://tthompson8416.github.io/Weather-Dashboard",
    githubLink: "https://github.com/Tthompson8416/Weather-Dashboard"
  },
];

export default projects;