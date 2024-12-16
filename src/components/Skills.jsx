import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 


import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaReact, FaAngular, FaGithub, FaGit, FaWordpress, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { RiBootstrapLine } from "react-icons/ri";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillGroups = [
    {
      groupName: "Languages",
      skills: [
        { name: "HTML5", icon: <TiHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <IoLogoJavascript /> },
        { name: "TypeScript", icon: <TbBrandTypescript /> },
      ],
    },
    {
      groupName: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "Bootstrap", icon: <RiBootstrapLine /> },
      ],
    },
    {
      groupName: "Tools & Platforms",
      skills: [
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Git", icon: <FaGit /> },
        { name: "WordPress", icon: <FaWordpress /> },
        { name: "Node.js", icon: <FaNodeJs /> },
      ],
    },
  ];

  const textSkillGroups = [
    {
      groupName: "Design & User Experience",
      skills: [
        { name: "UI/UX Design" },
        { name: "Responsive Design" },
      ],
    },
    {
      groupName: "Performance & Optimization",
      skills: [
        { name: "Cross-Browser Compatibility" },
        { name: "REST APIs" },
      ],
    },
  ];

  return (
    <section id="techskills" className="bg-custom-dark rounded-t-3xl px-8 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-custom-accent">
        My Skills
      </h2>
      {/* Row for groups with icons */}
      <div className="flex flex-wrap justify-center gap-16 mb-16">
        {skillGroups.map((group, index) => (
          <div key={index} data-aos="fade-up" className="text-center">
            <h3 className="text-3xl font-semibold mb-4 text-custom-accent">
              {group.groupName}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {group.skills.map((skill, i) => (
                <div key={i} className="relative group flex flex-col items-center">
                  <div className="text-5xl text-custom-accent">{skill.icon}</div>
                  {/* Tooltip */}
                  <span className="absolute bottom-full mb-1 hidden group-hover:flex px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg w-max text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Row for groups without icons */}
      <div className="flex flex-wrap justify-center gap-40 mt-28">
        {textSkillGroups.map((group, index) => (
          <div key={index} data-aos="fade-up" className="text-center">
            <h3 className="text-3xl font-semibold mb-4 text-custom-accent">
              {group.groupName}
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {group.skills.map((skill, i) => (
                <div
                  key={i}
                  className="text-2xl font-bold text-custom-subtext whitespace-nowrap"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
