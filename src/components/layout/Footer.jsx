import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Farid Mohieddine. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;