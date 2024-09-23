import React from 'react';
import { motion } from 'framer-motion';

interface SectionButtonProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const SectionButton: React.FC<SectionButtonProps> = ({ title, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: isActive ? '#f1c40f' : 'transparent',
        border: '4px solid #f1c40f',
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        fontSize: '1.2em',
        color: '#f1c40f',
        fontWeight: '700',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s',
      }}
    >
      {title}
    </motion.button>
  );
};

export default SectionButton;
