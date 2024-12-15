import { useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion"; 
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiAngular,
  SiTypescript,
} from "react-icons/si";
import projectsData from "../data/projects";

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-custom-dark rounded-t-3xl px-8 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-custom-accent">
        My Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-custom-light rounded-lg p-4 shadow-md flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-105 border border-custom-border min-h-[350px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: index * 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative group" 
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full rounded-md object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to view project
              </span>
            </a>

            <h3 className="text-2xl font-semibold mb-2 pt-3 text-custom-accent">
              {project.title}
            </h3>
            <p className="text-custom-subtext mb-4 font-thin">
              {project.description}
            </p>
            <div className="flex space-x-2 mb-4">
              {project.techStack.map((tech, i) => {
                let IconComponent;
                switch (tech) {
                  case "HTML":
                    IconComponent = SiHtml5;
                    break;
                  case "CSS":
                    IconComponent = SiCss3;
                    break;
                  case "JavaScript":
                    IconComponent = SiJavascript;
                    break;
                  case "React":
                    IconComponent = SiReact;
                    break;
                  case "Tailwind CSS":
                    IconComponent = SiTailwindcss;
                    break;
                  case "Angular":
                    IconComponent = SiAngular;
                    break;
                  case "TypeScript":
                    IconComponent = SiTypescript;
                    break;
                  default:
                    IconComponent = null;
                }
                return IconComponent ? (
                  <div
                    key={i}
                    className="relative group flex flex-col items-center"
                   
                  >
                    <IconComponent className="text-3xl text-gray-700" />
                   
                    <span
                      className="absolute bottom-full mb-1 hidden group-hover:flex px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg w-max text-center whitespace-nowrap"
                   
                    >
                      {tech}
                    </span>
                  </div>
                ) : null;
              })}
            </div>
            <div className="flex flex-col justify-center items-center mt-4 space-y-2 text-center sm:flex-col sm:items-center sm:space-y-2 w-full">
              <button
                onClick={() => window.open(project.link, "_blank")}
                href={project.link}
                className="text-white bg-custom-accent p-1 rounded-lg shadow-lg  hover:text-custom-gradient transition-colors duration-300 hover:shadow-xl text-center whitespace-nowrap"
              >
                Explore Project
              </button>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-gh hover:text-black transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      techStack: PropTypes.arrayOf(PropTypes.string).isRequired, 
      link: PropTypes.string.isRequired,
      githubLink: PropTypes.string,
    })
  ).isRequired,
};

ProjectsSection.propTypes = {};
export default ProjectsSection;
