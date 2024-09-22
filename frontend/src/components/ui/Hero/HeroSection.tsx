import './HeroSection.scss';
import Header from "../../layout/Header/Header"
import heroImage from '../../../assets/images/heroImageCable.png'
import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroImage = document.querySelector('.hero-image');
      const underline = document.querySelector('.underline');
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX / innerWidth) * 30 - 15;
      const moveY = (clientY / innerHeight) * 30 - 15;

      if (heroImage) {
        (heroImage as HTMLElement).style.transform = `translate(${moveX / 2}px, ${moveY / 2}px)`;
      }

      if (underline) {
        (underline as HTMLElement).style.transform = `translateX(${moveX}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='hero relative bg-cover relative overflow-hidden'>
      <img src={heroImage} alt="Hero" className="hero-image w-full h-auto md:h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50 md:opacity-40 lg:opacity-10"></div> {/* Overlay */}
      <Header />
      <section className="relative">
      <div className="container left-0 ml-8 mt-40 text-left relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-secondary relative">
          Engineering the
          <div className="underline"></div>
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 font-secondary">
          future with every
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-highlightYellow font-secondary">cable</h1>

      </div>
    </section>
    </div>
    
  );
};

export default HeroSection;

