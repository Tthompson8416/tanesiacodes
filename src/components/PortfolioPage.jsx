import IntroSection from './IntroSection';
import ProjectsSection from '../components/ProjectsSection';
import projects from '../data/projects'; // Import your projects array
import Skills from '../components/Skills'; // Adjust the path if necessary


const PortfolioPage = () => {
  return (
    <div>
      <IntroSection />
      <ProjectsSection projects={projects} /> {/* Pass the projects array */}
      <Skills /> {/* Add the Skills section here */}
    </div>
  );
};

export default PortfolioPage;