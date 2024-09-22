import aboutImage from '../../../assets/images/aboutUsImage.png';
import Button from '../Button/Button';

import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="about-section relative mx-auto pt-16 pb-32 px-8 flex flex-col lg:flex-row items-center bg-secondaryGray">
      <div className="about-image-container flex-shrink-0 mb-8 lg:mb-0 lg:mr-8 hidden lg:block">
        <img src={aboutImage} alt="About Orflax" className="about-image object-cover h-[400px] w-[400px]" />
      </div>
      <div className="about-content">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-primaryGray font-bold text-secondary font-secondary mb-4">
          About Orflax
        </h2>
        <p className="text-lg md:text-xl text-primaryBlack leading-relaxed">
        Since 15 Years, ORFLAX is dedicated to excel in the research, development and production of wires and cables for electrical and other electronic applications. We manufacture our products in various sizes as per IS specification and also as per customers specifications.
        </p>
        <p className="text-lg md:text-xl text-primaryBlack leading-relaxed mt-4">
        It is the result of our continuous efforts and sheer determination that we have been able to win the confidence of our clients.
        </p>
        <p className="text-lg md:text-xl text-primaryBlack leading-relaxed mt-4">
        Our brand of wires & cables matches highest international standards for quality and dependability each Cable/Wire undergoes rigorous quality check at every stage right from purchasing of raw materials to designing, manufacturing & dispatching.
        </p>
        <p className="text-lg md:text-xl text-primaryBlack leading-relaxed mt-4">
        We are a North India based business group with wide range of copper and aluminium wires & cables.
        </p>
      </div>
      <div className="absolute bottom-12 left-[32%] ">
          <Button text="Know More" onClick={() => navigate('/about')} />
        </div>
    </div>
  );
};

export default AboutSection;
