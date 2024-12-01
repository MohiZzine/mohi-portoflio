import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import { Medal, Trophy, Award, Star } from 'lucide-react';
import AchievementTimeline from '../components/achievements/AchievementTimeline';

const Achievements = () => {
  const achievements = [
    {
      date: 'November 2024',
      title: 'Hackathon Winner',
      description: 'Bouygues’s AI Builders Challenge Hackathon, First Place – Won by integrating innovative Transformer models to optimize energy consumption for asphalt drying.',
      icon: Award,
      category: 'AI Builders Challenge',
      link: 'https://www.linkedin.com/posts/mohieddine-farid-b1482325b_aibuilderschallenge2024-um6p-microsoft-activity-7265633145989828612-al5l/?utm_source=share&utm_medium=member_desktop'
    },
    {
      date: 'March 2024',
      title: 'Silver Medal - AMPC',
      description: 'National AMPC Programming Competition: Silver medal',
      icon: Award,
      category: 'Competitive Programming',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7173340588845580288/'
    },
    {
      date: 'August 2021',
      title: 'Excellence Scholarship',
      description: 'Awarded full scholarship at UM6P based on academic excellence and competitive examination results.',
      icon: Trophy,
      category: 'Academic',
    },
    {
      date: 'June 2021',
      title: 'Silver Medal - PAMO',
      description: 'Pan-African Mathematical Olympiad (PAMO)',
      icon: Star,
      category: 'Math Olympiad',
    },
    {
      date: 'April 2021',
      title: 'Tenth Place - APMO',
      description: 'Asia Pacific Mathematical Olympiad (APMO): Moroccan competitor, ranked 10th. ',
      icon: Star,
      category: 'Math Olympiads',
      link: 'https://www.apmo-official.org/country_report/MAR/2021'
    },
  ];

  // Group achievements by year
  const groupedAchievements = achievements.reduce((groups, achievement) => {
    const year = new Date(achievement.date).getFullYear();
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(achievement);
    return groups;
  }, {});

  return (
    <PageTransition>
      <div className="min-h-screen py-32">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Achievements & Recognition
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              A chronicle of milestones and accomplishments throughout my academic journey.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="container mx-auto px-4">
          <AchievementTimeline achievements={achievements} />
        </div>
      </div>
    </PageTransition>
  );
};

export default Achievements;