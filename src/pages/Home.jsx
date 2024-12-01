import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import PageTransition from '../components/shared/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <FeaturedProjects />
    </PageTransition>
  );
};

export default Home;