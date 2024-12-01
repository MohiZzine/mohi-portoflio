import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <motion.div
            className="h-2 bg-gray-200 dark:bg-dark-300 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full bg-primary-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: skill.level / 100 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Skills;