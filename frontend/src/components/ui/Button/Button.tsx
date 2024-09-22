import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ } }
      whileTap={{ scale: 0.9 }}
      className="px-6 py-3 bg-primaryBlack text-secondaryGray font-semibold transition-colors duration-300 ease-in-out hover:bg-highlightYellow hover:text-primaryBlack"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
