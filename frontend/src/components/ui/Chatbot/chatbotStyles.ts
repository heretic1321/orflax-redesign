import React from 'react';

const colors: Record<string, string> = {
  primaryBlack: '#0D1B2A',
  highlightYellow: '#FFC12C',
  secondaryGray: '#CEE5F2',
  primaryGray: '#1F2938',
};

const chatbotStyles: {
  [key: string]: React.CSSProperties;
} = {
  headerStyle: {
    background: colors.primaryBlack,
    color: '#fff',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  chatWindowStyle: {
    backgroundColor: colors.primaryGray,
    color: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
  },
  chatButtonStyle: {
    backgroundColor: colors.highlightYellow,
    color: colors.primaryBlack,
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  chatButtonHoveredStyle: {
    backgroundColor: '#e0a800',
  },
  userBubbleStyle: {
    backgroundColor: colors.highlightYellow,
    color: colors.primaryBlack,
    borderRadius: '15px',
    padding: '10px',
    margin: '5px 0',
  },
  botBubbleStyle: {
    backgroundColor: colors.secondaryGray,
    color: colors.primaryBlack,
    borderRadius: '15px',
    padding: '10px',
    margin: '5px 0',
  },
  chatInputAreaStyle: {
    backgroundColor: colors.primaryGray,
    color: '#fff',
    borderRadius: '8px',
    padding: '10px',
    border: '1px solid ' + colors.highlightYellow,
  },
  sendButtonStyle: {
    backgroundColor: colors.highlightYellow,
    color: colors.primaryBlack,
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default chatbotStyles;
