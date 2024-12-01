import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors";
  
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-dark-200 dark:text-white dark:hover:bg-dark-300",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;