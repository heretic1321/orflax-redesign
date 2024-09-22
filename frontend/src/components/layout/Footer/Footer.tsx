import { Link } from 'react-router-dom';
import logo from '../../../assets/images/oipl_icon.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer bg-primaryBlack py-8">
      <div className="container mx-auto flex flex-col items-center">
        <img src={logo} alt="Orflax Logo" className="footer-logo mb-4" />
        <p className="text-secondaryGray text-center mb-4">
          Masters in industrial manufacturing with 15 years of experience and 10+ awards!
        </p>
        <div className="footer-links flex flex-wrap justify-center mb-4">
          <Link to="/products" className="footer-link mx-2">Products</Link>
          <Link to="/about" className="footer-link mx-2">About Us</Link>
          <Link to="/contact" className="footer-link mx-2">Contact Us</Link>
        </div>
        <p className="text-secondaryGray text-center">
          &copy; {new Date().getFullYear()} Orflax. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;