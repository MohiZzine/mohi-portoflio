import ContactForm from '../components/contact/ContactForm';
import PageTransition from '../components/shared/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-display font-bold mb-8">Get in Touch</h1>
          <ContactForm />
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;