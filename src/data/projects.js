import projectOneImage from "/src/assets/images/Taskinator.png";
import projectTwoImage from "/src/assets/images/Fridge-to-feast.png";
import projectThreeImage from "/src/assets/images/Battle-bots.png";
import projectFourImage from "/src/assets/images/Password-generator.png";
import projectFiveImage from "/src/assets/images/Weather-dashboard.png";

// Projects array with tech stack as strings
const projects = [
  {
    title: "Taskinator",
    description:
      "A dynamic task management app built with JavaScript, React, and Tailwind CSS. Users can create tasks, categorize them with labels, and update their status / track tasks through their life cycle with ease.",
    image: projectOneImage,
    techStack: ["JavaScript", "React", "Tailwind CSS"],
    link: "https://tthompson8416.github.io/taskinator",
    githubLink: "https://github.com/Tthompson8416/taskinator",
  },
  {
    title: "Fridge to Feast",
    description:
      "A recipe search app that transforms your ingredients into delicious dishes. Simply enter an ingredient, and the app fetches recipes with photos using an API. Built with HTML, CSS, and JavaScript.",
    image: projectTwoImage,
    techStack: ["HTML", "CSS", "JavaScript"], 
    link: "https://tthompson8416.github.io/fridge-to-feast",
    githubLink: "https://github.com/Tthompson8416/fridge-to-feast",
  },
  {
    title: "Battle Bots",
    description:
      "A thrilling robot battle simulator where users name their robot, fight computer opponents, visit a shop for upgrades, and track stats after each round. Built with HTML and JavaScript.",
    image: projectThreeImage,
    techStack: ["HTML", "JavaScript"], 
    link: "https://tthompson8416.github.io/Battle-Bots",
    githubLink: "https://github.com/Tthompson8416/Battle-Bots",
  },
  {
    title: "Password Generator",
    description:
      "A simple and secure tool to create random passwords. Users can customize character types and password length. Built with HTML, CSS, and JavaScript.",
    image: projectFourImage,
    techStack: ["HTML", "CSS", "JavaScript"], 
    link: "https://tthompson8416.github.io/Password-Generator",
    githubLink: "https://github.com/Tthompson8416/Password-Generator",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive app that lets users search for real-time weather updates by city and view a detailed 5-day forecast. Built with HTML, CSS, and JavaScript.",
    image: projectFiveImage,
    techStack: ["HTML", "CSS", "JavaScript"], 
    link: "https://tthompson8416.github.io/Weather-Dashboard",
    githubLink: "https://github.com/Tthompson8416/Weather-Dashboard",
  },
];

export default projects;
