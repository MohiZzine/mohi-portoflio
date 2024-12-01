import { useState } from 'react';
import PageTransition from '../components/shared/PageTransition';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Add your projects data here
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: "/images/project1.jpg", // Add your image path
      github: "https://github.com/yourusername/project1",
      demo: "https://project1demo.com",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "Machine learning application that generates images from text descriptions",
      image: "/images/project2.jpg", // Add your image path
      github: "https://github.com/yourusername/project2",
      demo: "https://project2demo.com",
      technologies: ["Python", "TensorFlow", "Flask", "React"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS",
      image: "/images/project3.jpg", // Add your image path
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
      technologies: ["React", "Tailwind CSS", "Framer Motion"]
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-display font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </PageTransition>
  );
};

export default Projects;