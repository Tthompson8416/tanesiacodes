import IntroSection from './IntroSection';
import ProjectsSection from '../components/ProjectsSection';



const PortfolioPage = () => {
  const dummyProjects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A comprehensive online shopping application with advanced features and responsive design.',
      image: '/api/placeholder/400/250',
      techStack: ['React', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A sleek, modern portfolio to showcase projects.',
      image: '/api/placeholder/400/250',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app with real-time data.',
      image: '/api/placeholder/400/250',
      techStack: ['Vue.js', 'Bootstrap'],
      link: '#',
    },
  ];

  
  return (
    <div>
      <IntroSection />
      <ProjectsSection projects={dummyProjects} />
    </div>
  );
};


export default PortfolioPage;
