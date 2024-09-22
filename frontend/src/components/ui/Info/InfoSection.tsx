import './InfoSection.scss';
import sampleVideo from'./../../../assets/videos/advertisement1.mp4'
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import madeInIndiaLogo from './../../../assets/images/makeInIndiaLogo.png'
const InfoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const quotes = ["Performance and Reliability", "Best Quality", "Technologically Advanced", 'Customer Satisfaction'];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
    }

    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 6000); // Change quote every 6 seconds to allow for typing and erasing

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <div className="container-info bg-primaryGray py-8">
      <div className="box p-4 text-2xl bg-primaryBlack">
        <TypeAnimation
          sequence={[quotes[currentQuoteIndex], 3000, '', 3000]}
          wrapper="p"
          repeat={Infinity}
          key={currentQuoteIndex} // Add key to force re-render
        />
      </div>
      <div className="box bg-highlightYellow p-2">
        <img src={madeInIndiaLogo} alt="Hero" className="object-fit" />
      </div>
      <div className="box">
        <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop>
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="box p-4 text-4xl bg-primaryBlack">Founded in 2009</div>
    </div>
  );
};

export default InfoSection;