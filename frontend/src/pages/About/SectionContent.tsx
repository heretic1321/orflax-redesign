import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SectionContentProps {
  title: string;
  text: string;
  imageUrl: string;
  onClose: () => void;
}

const SectionContent: React.FC<SectionContentProps> = ({ title, text, imageUrl, onClose }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    async function animateAndScroll() {
      // Start the animation
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });

      // After animation completes, scroll to the content
      const element = contentRef.current;
      if (element) {
        const headerOffset = 0; // Adjust this value if you have a fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }

    animateAndScroll();
  }, [controls]);

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      exit={{ opacity: 0, y: 50 }}
      style={{
        backgroundColor: '#1c2e3e',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 8px 20px rgba(0,0,0,0.5)',
        marginTop: '30px',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        position: 'relative',
      }}
    >
      <h4 style={{ color: '#f1c40f', fontFamily: "'Syne', sans-serif" }}>{title}</h4>
      <p style={{ marginTop: '10px' }}>{text}</p>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }}
      />
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'transparent',
          border: 'none',
          color: '#f1c40f',
          fontSize: '1.5em',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        ×
      </motion.button>
    </motion.div>
  );
};

export default SectionContent;
