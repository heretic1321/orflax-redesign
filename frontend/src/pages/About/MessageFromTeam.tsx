import { useState } from 'react';
import Header from '../../components/layout/Header/Header';
const messages = [
  {
    imageUrl: 'https://i.pinimg.com/564x/ee/4d/74/ee4d741756d7f8868c71ad071250cad4.jpg', // Replace with actual image URL
    text: 'Message from Team: At Orflax India we are more than just a cables company we are innovators. Our R&D team is constantly pushing boundaries to create more efficient and durable products. If you are passionate about engineering and want to make a real impact, join us in powering the future!'
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/2f/09/21/2f09216ed25ae697f71a67c205b705f8.jpg',
    text: 'Message from Team: Working at Orflax has been incredibly rewarding. From our commitment to sustainability to our focus on employee growth, this company truly values its people and the planet. To anyone considering a career here: expect challenges, growth, and the satisfaction of knowing your work matters.'
  },
  {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pYl-QJhucsXHjQmSswOLQOsSZWAqDFqgP7aWHNy84cUF6go4GXKLU9VuDx4mvTe-sRQ&usqp=CAU',
    text: 'Message from Team: Orflax India isnt just a job, its a family. The support and camaraderie among colleagues here is unmatched. We work hard, celebrate our successes together, and always strive for excellence. If you are looking for a workplace that feels like home, look no further!.'
  }
];
const TeamMessage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextMessage = () => {
      if (currentIndex < messages.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const prevMessage = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    return (
      <div className='bg-gradient-to-r from-primaryBlack to-primaryGray min-h-screen'>
        <Header />
      <div style={{
        background: 'transparent',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'Syne', sans-serif"  // Apply the font here
      }}>
        <div style={{
          display: 'flex',
          width: '80%',
          backgroundColor: '#1c2e3e',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0px 8px 20px rgba(0,0,0,0.5)',
          position: 'relative',
          fontFamily: "'Syne', sans-serif"  // Apply the font to this section
        }}>
          {/* Left Side - Image */}
          <div style={{ width: '40%' }}>
            <img 
              src={messages[currentIndex].imageUrl} 
              alt="Team Message" 
              style={{ 
                width: '100%', 
                borderRadius: '15px', 
                boxShadow: '0px 8px 20px rgba(0,0,0,0.5)' 
              }} 
            />
          </div>
  
          {/* Right Side - Message */}
          <div style={{ width: '55%', marginLeft: '20px' }}>
            <h2 style={{
              fontSize: '2em',
              fontWeight: '800',
              marginBottom: '20px',
              color: '#f1c40f',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
              fontFamily: "'Syne', sans-serif"  // Apply the font here
            }}>Message from Team</h2>
            <p style={{
              fontSize: '1.2em',
              lineHeight: '1.6',
              color: '#ecf0f1',
              fontFamily: "'Syne', sans-serif"  // Apply the font here
            }}>
              {messages[currentIndex].text}
            </p>
          </div>
  
          {/* Next Arrow */}
          <button 
            onClick={nextMessage}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: '#f1c40f',
              color: '#1c2e3e',
              border: 'none',
              borderRadius: '50%',
              padding: '10px 15px',
              cursor: 'pointer',
              boxShadow: '0px 8px 20px rgba(0,0,0,0.3)',
              fontSize: '1.5em',
              fontFamily: "'Syne', sans-serif"  // Apply the font here
            }}
            disabled={currentIndex === messages.length - 1}
          >
            →
          </button>
  
          {/* Previous Arrow */}
          {currentIndex > 0 && (
            <button 
              onClick={prevMessage}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                backgroundColor: '#f1c40f',
                color: '#1c2e3e',
                border: 'none',
                borderRadius: '50%',
                padding: '10px 15px',
                cursor: 'pointer',
                boxShadow: '0px 8px 20px rgba(0,0,0,0.3)',
                fontSize: '1.5em',
                fontFamily: "'Syne', sans-serif"  // Apply the font here
              }}
            >
              ←
            </button>
          )}
        </div>
      </div>
      </div>
    );
  };
  
  export default TeamMessage;