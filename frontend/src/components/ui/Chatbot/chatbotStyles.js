
const colors =  {
    'primaryBlack': '#0D1B2A',
    'highlightYellow': '#FFC12C',
    'secondaryGray': '#CEE5F2',
    'primaryGray': '#1F2938',
  }

const chatbotStyles = {
  headerStyle: {
    background: '#0D1B2A',
    color: '#fff',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  chatWindowStyle: {
    backgroundColor: '#1F2938',
    color: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
  },
  chatButtonStyle: {
    backgroundColor: '#FFC12C',
    color: '#0D1B2A',
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
    backgroundColor: '#FFC12C',
    color: '#0D1B2A',
    borderRadius: '15px',
    padding: '10px',
    margin: '5px 0',
  },
  botBubbleStyle: {
    backgroundColor: '#CEE5F2',
    color: '#0D1B2A',
    borderRadius: '15px',
    padding: '10px',
    margin: '5px 0',
  },
  chatInputAreaStyle: {
    backgroundColor: '#1F2938',
    color: '#fff',
    borderRadius: '8px',
    padding: '10px',
    border: '1px solid #FFC12C',
  },
  sendButtonStyle: {
    backgroundColor: '#FFC12C',
    color: '#0D1B2A',
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
