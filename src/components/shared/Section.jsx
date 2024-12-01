import { motion } from 'framer-motion';

const Section = ({ children, className = '', ...props }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`py-20 ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;