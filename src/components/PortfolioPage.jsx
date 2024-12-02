import IntroSection from './IntroSection';
import ProjectsSection from '../components/ProjectsSection';
import projects from '../data/projects'; // Import your projects array

const PortfolioPage = () => {
  return (
    <div>
      <IntroSection />
      <ProjectsSection projects={projects} /> {/* Pass the projects array */}
    </div>
  );
};

export default PortfolioPage;