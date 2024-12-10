import { useEffect } from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css';  // Import AOS styles

const ProjectsSection = ({ projects }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className="bg-custom-dark rounded-t-3xl mt-12 px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-custom-accent">My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-custom-light rounded-lg p-6 shadow-md flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 border border-custom-border min-h-[300px] 400:min-h-[350px]"
              // Framer Motion settings
        initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide into position when in view
        transition={{ duration: 0.8, delay: index * 0.2 }} // Animation duration and stagger effect
        viewport={{ once: true }} // Trigger animation only once
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-custom-text">
              {project.title}
            </h3>
            <p className="text-custom-subtext mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-custom-accent text-custom-link text-center px-2 py-1 rounded-full text-xs whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col justify-between items-center mt-4 space-y-2 text-center sm:flex-col sm:items-center sm:space-y-2 w-full">
                <a
                  href={project.link}
                  className="text-custom-accent hover:text-blue-800 transition-colors text-center ml-3 whitespace-nowrap"
                >
                  View Project
                </a>

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-custom-text hover:text-black transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />{" "}
                    {/* Large size GitHub icon */}
                  </a>
                )}
              </div>
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

export default ProjectsSection;
