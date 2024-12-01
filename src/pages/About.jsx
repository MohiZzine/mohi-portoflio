import PageTransition from '../components/shared/PageTransition';
import Experience from '../components/about/Experience';
import Skills from '../components/about/Skills';

const About = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-5xl font-display font-bold mb-16">About Me</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-lg mb-8">
            I'm a fourth-year CS undergraduate, passionate about technology and an avid reader. I have a self-motivated and can-do attitude, thriving in challenging and dynamic environments. I love competing in mathematics and problem solving involving Algorithms & Data Structures. Seeking a competitive position to enhance my skills and contribute to a professional organization.
            </p>
            <Skills />
          </div>
          <Experience />
        </div>
      </div>
    </PageTransition>
  );
};

export default About;