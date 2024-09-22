import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaPhone, FaComments, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './FloatingButton.module.scss';
import { useNavigate } from 'react-router-dom';
import {ChatbotDialog} from './../Chatbot/ChatbotDialog'

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMailClick = () => {
    navigate('/contact#enquiry-form');
  };

  const handleCallClick = () => {
    navigate('/contact#call-us');
  };

  const handleWhatsAppClick = () => {
    window.open('https://web.whatsapp.com/send?phone=+919313493405', '_blank');
  };

  const handleLiveChatClick = () => {
    setIsChatOpen(true);
    setIsOpen(false);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  // Animation variants
  const buttonVariants = {
    open: { rotate: 0, scale: 0.8, marginBottom: '10px' },
    closed: { rotate: 0 },
  };

  const menuVariants = {
    open: {
      opacity: 1,
      display: 'flex',
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    closed: {
      opacity: 0,
      transitionEnd: { display: 'none' },
    },
  };

  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 },
  };

  return (
    <div className={styles.floatingButtonContainer}>
      { !isChatOpen && (
      <motion.button
        className={styles.floatingButton}
        onClick={toggleMenu}
        variants={buttonVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </motion.button>
      )}
      <motion.div
        className={styles.menu}
        variants={menuVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div className={styles.menuItem} variants={itemVariants} onClick={handleMailClick} data-tooltip="Email">
          <FaEnvelope />
        </motion.div>
        <motion.div className={styles.menuItem} variants={itemVariants} onClick={handleCallClick} data-tooltip="Call">
          <FaPhone />
        </motion.div>
        <motion.div className={styles.menuItem} variants={itemVariants} onClick={handleWhatsAppClick} data-tooltip="WhatsApp">
          <FaWhatsapp />
        </motion.div>
        <motion.div className={styles.menuItem} variants={itemVariants} onClick={handleLiveChatClick} data-tooltip="Live Chat">
          <FaComments />
        </motion.div>
      </motion.div>
      {isChatOpen && <ChatbotDialog isOpen={isChatOpen} onClose={closeChat}/>}
    </div>
  );
};

export default FloatingButton;