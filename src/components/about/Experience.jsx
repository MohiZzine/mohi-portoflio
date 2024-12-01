import { m, motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      date: '2019-2021',
      title: 'High School - Mathematics Branch',
      company: 'El Yakada High School, Salé',
    },
    {
      date: '2021 - Now',
      title: 'Computer Science Engineering Student',
      company: 'Mohammed VI Polytechnic University',
      description: 'This academic journey was filled with learning, competing, innovation and great people.'
    }
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 border-l-2 border-primary-500"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</span>
          <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
          <p className="mt-2">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;