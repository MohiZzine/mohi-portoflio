import { motion } from 'framer-motion';

const AchievementTimeline = ({ achievements }) => {
  // Animation variants remain the same
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Helper function to render the title with optional link
  const renderTitle = (achievement) => {
    const titleContent = (
      <h3 className="text-xl font-bold mb-2">
        {achievement.title}
      </h3>
    );

    // If link exists, wrap the title in an anchor tag
    if (achievement.link) {
      return (
        <a 
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-500 transition-colors duration-200"
        >
          {titleContent}
        </a>
      );
    }

    return titleContent;
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-px md:translate-x-0 md:left-[60px] top-0 h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-300" />

      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          variants={item}
          className="relative flex flex-col md:flex-row items-center md:items-start mb-16 last:mb-0"
        >
          {/* Date - Mobile */}
          <div className="md:hidden mb-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/20 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium">
            {achievement.date}
          </div>

          {/* Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:left-[60px] z-10">
            <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white shadow-lg">
              <achievement.icon className="w-6 h-6" />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-auto md:ml-32 md:pl-8">
            {/* Date - Desktop */}
            <div className="hidden md:block mb-2 text-sm text-gray-500 dark:text-gray-400">
              {achievement.date}
            </div>

            <div className="bg-white dark:bg-dark-200 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-2">
                <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">
                  {achievement.category}
                </span>
              </div>
              {renderTitle(achievement)}
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AchievementTimeline;