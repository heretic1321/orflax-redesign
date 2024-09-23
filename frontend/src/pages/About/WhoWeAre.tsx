import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SectionButton from './SectionButton';
import SectionContent from './SectionContent';

const WhoWeAre: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const location = useLocation();

  const toggleSection = (section: string | null) => {
    setCurrentSection(currentSection === section ? null : section);
  };

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setCurrentSection(hash);
    }
  }, [location]);

  return (
    <div
      style={{
        background: 'linear-gradient(111deg, rgba(13,27,42,1) 49%, rgba(33,65,99,1) 100%)',
        color: 'white',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: "'Syne', sans-serif",
      }}
    >
      {/* Who We Are Section */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <img
          src="https://img.freepik.com/premium-photo/group-individuals-from-different-races-nations-skin-colors-ages-inclusivity-diversity_210545-3746.jpg"
          alt="Who We Are"
          style={{
            width: '100%',
            borderRadius: '15px',
            boxShadow: '0px 8px 20px rgba(0,0,0,0.5)',
          }}
        />
        <h2
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '3em',
            fontWeight: '800',
            color: 'white',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          Who We Are
        </h2>
      </div>

      {/* Welcome Message */}
      <div
        style={{
          backgroundColor: '#f1c40f',
          color: '#1c2e3e',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '40px',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          boxShadow: '0px 8px 20px rgba(0,0,0,0.5)',
        }}
      >
        <p>
          Welcome to our company! We specialize in providing the best services to our clients.
        </p>
      </div>

      {/* Section Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '60px',
          gap: '40px',
        }}
      >
        {/* Our Legacy Button */}
        <SectionButton
          title="Our Legacy"
          isActive={currentSection === 'legacy'}
          onClick={() => toggleSection('legacy')}
        />
        {/* Our Story Button */}
        <SectionButton
          title="Our Story"
          isActive={currentSection === 'story'}
          onClick={() => toggleSection('story')}
        />
        {/* Our Vision Button */}
        <SectionButton
          title="Our Vision"
          isActive={currentSection === 'vision'}
          onClick={() => toggleSection('vision')}
        />
      </div>

      {/* Section Content */}
      <AnimatePresence>
        {currentSection === 'legacy' && (
          <SectionContent
            key="legacy"
            title="Our Legacy"
            text="For over 15 years, ORFLAX INDIA PVT LTD has been a leading manufacturer of high-quality electric wires and cables, proudly ISO 9001-2015 certified. Based in North India, we specialize in innovative solutions like Triple Layer Coating for multi-strand and submersible wires. Our focus on quality and customer satisfaction sets us apart in the industry."
            imageUrl="https://zmscable.es/wp-content/uploads/2023/06/alambres-cables-1024x683.jpg"
            onClose={() => toggleSection(null)}
          />
        )}
        {currentSection === 'story' && (
          <SectionContent
            key="story"
            title="Our Story"
            text="At ORFLAX, we aim to lead in wire and cable technology, delivering unmatched quality and reliability. Our focus on innovation and customer-centric solutions drives us to meet evolving demands and shape the industry's future, both in India and globally."
            imageUrl="https://www.cablecreation.com/cdn/shop/files/about_us-2.jpg?v=1636015892"
            onClose={() => toggleSection(null)}
          />
        )}
        {currentSection === 'vision' && (
          <SectionContent
            key="vision"
            title="Our Vision"
            text="At ORFLAX, we aim to lead in wire and cable technology, delivering unmatched quality and reliability. Our focus on innovation and customer-centric solutions drives us to meet evolving demands and shape the industry's future, both in India and globally."
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFNALxKGso4M025F5dBRV8HWFjB-jfbm6Hw&s"
            onClose={() => toggleSection(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhoWeAre;
