import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100 focus:ring-white',
    secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black focus:ring-white',
    accent: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent',
    ghost: 'bg-transparent text-white hover:bg-gray-800 focus:ring-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden inline-flex items-center gap-2 whitespace-nowrap"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {buttonContent}
    </button>
  );
};

export default Button;
