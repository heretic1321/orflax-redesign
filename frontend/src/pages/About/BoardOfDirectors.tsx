import Typing from 'react-typing-effect';
import Header from '../../components/layout/Header/Header';
import './BoardOfDirectors.scss'; // Import the CSS file
import { useState } from 'react';

const BoardOfDirectors = () => {
  const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);

  const people = [
    { name: 'Sundar Pichai', top: '26%', left: '19%' },
    { name: 'Dhruv', top: '18%', left: '34%' },
    { name: 'Joysa', top: '19%', left: '60%' },
    { name: 'Priyanka Chopra', top: '24%', left: '75%' },
    { name: 'Mukesh Ambani', top: '40%', left: '8%' },
    { name: 'Amitabh Bachchan', top: '50%', left: '40%' },
    { name: 'Elon Musk', top: '44%', left: '59%' },
    { name: 'Ratan Tata', top: '30%', left: '86%' },
  ];

  return (
    <div className="bg-gradient-to-r from-primaryBlack to-primaryGray min-h-screen">
      <Header />
      <div style={{
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        overflow: 'hidden' // Prevent overflow for animations
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
          flexDirection: 'row',
          position: 'relative'
        }}>
          {/* Left Side with Typing Effect */}
          <div style={{ width: '45%', fontSize: '20px', fontFamily: "'Syne', sans-serif" }}>
            <h1 style={{
              fontSize: '3em',
              fontWeight: '800',
              textAlign: 'left',
              marginBottom: '20px',
              color: '#f1c40f',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' // Text shadow for depth
            }}>Board of Directors</h1>
            <Typing
              speed={50} // Set typing speed (lower number is faster)
              text={[
                '“Orflax India has always stood for excellence, innovation, and integrity. Since our inception, we have embarked on a journey of growth, driven by a relentless pursuit of quality and customer satisfaction. Today, I am proud to say that we have not only met but exceeded our goals, becoming a trusted name in the field of wires and cables manufacturing.”'
              ]}
              cursor={true} // Keep the cursor visible
              eraseDelay={Infinity} // Prevent erasing after typing once
              typingDelay={500} // Delay before it starts typing
              className="typing-text"
              style={{ color: '#ecf0f1' }} // Styling for the typing text
            />
          </div>

          {/* Right Side with Image */}
          <div style={{ width: '45%', position: 'relative' }}>
            <img
              src="https://thumbs.dreamstime.com/b/board-directors-meeting-big-conference-desk-board-directors-meeting-big-conference-desk-business-executives-people-158261381.jpg"
              alt="Board of Directors"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '15px',
                boxShadow: '0px 8px 20px rgba(0,0,0,0.7)', // Deeper shadow for more impact
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for hover effect
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'; // Scale effect on hover
                e.currentTarget.style.boxShadow = '0px 12px 30px rgba(0,0,0,0.8)'; // Enhanced shadow on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; // Reset scale effect
                e.currentTarget.style.boxShadow = '0px 8px 20px rgba(0,0,0,0.7)'; // Reset shadow
              }}
            />
            {people.map((person, index) => (
              <div
                key={index}
                className="hoverable-circle"
                style={{
                  top: person.top,
                  left: person.left,
                }}
                onMouseEnter={() => setHoveredPerson(person.name)}
                onMouseLeave={() => setHoveredPerson(null)}
              >
                {hoveredPerson === person.name && (
                  <div className="tooltip text-primaryBlack text-wrap">
                    {person.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;