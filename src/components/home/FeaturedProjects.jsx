import { motion } from 'framer-motion';
import ProjectCard from '../projects/ProjectCard';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "/images/project1.jpg", // Add your project images
      github: "https://github.com/yourusername/project1",
      demo: "https://project1demo.com",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "Machine learning application that generates images from text descriptions",
      image: "/images/project2.jpg",
      github: "https://github.com/yourusername/project2",
      demo: "https://project2demo.com",
      technologies: ["Python", "TensorFlow", "Flask", "React"]
    },
    // Add more featured projects
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and experience
            in software development and design.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;