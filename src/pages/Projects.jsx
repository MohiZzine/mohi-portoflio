import { useState } from 'react';
import PageTransition from '../components/shared/PageTransition';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
// import project1Image from '../assets/images/project2.png';
// import project2Image from '../assets/images/project2.png';
import project3Image from '../assets/images/project3.png'; 


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Efficient Key-Value Store with Go",
      description: "High-performance distributed key-value store built with Go, featuring LSM tree architecture for optimal data handling and a RESTful API. Implements industry-standard storage patterns to achieve fast read/write operations and memory efficiency.",
      image: "/images/project1.jpg", 
      github: "https://github.com/MohiZzine/Key-Value-Store-GO",
      // demo: "https://project1demo.com",
      technologies: ["Go"]
    },
    {
      id: 2,
      title: "Electric Vehicles Stations App",
      description: "Full-stack mobile application that helps EV drivers locate charging stations in real-time. Built with React Native and Node.js, featuring interactive maps, smart filtering, and location-based services. Demonstrates expertise in modern mobile development and API integration.",
      image: "/images/project2.jpg",
      github: "https://github.com/MohiZzine/EVApp",
      // demo: "https://project2demo.com",
      technologies: ["React-Native", "CSS", "PostgreSQL", "Node.js"]
    },
    {
      id: 3,
      title: "Mini Scikit Learn",
      description: "A lightweight machine learning library that packs the power of Scikit-Learn into a streamlined package, featuring advanced algorithms, efficient data preprocessing, and comprehensive model evaluation tools. Built from scratch to demonstrate deep understanding of ML fundamentals.",
      image: project3Image, 
      github: "https://github.com/MohiZzine/mini-scikit-learn",
      // demo: "https://yourportfolio.com",
      technologies: ["Pandas", "Scikit-Learn", "NumPy"]
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