import IntroSection from './IntroSection';
import ProjectsSection from '../components/ProjectsSection';
import projects from '../data/projects'; 
import Skills from '../components/Skills';


const PortfolioPage = () => {
  return (
    <div>
      <IntroSection />
      <ProjectsSection projects={projects} /> 
      <Skills /> 
    </div>
  );
};

export default PortfolioPage;