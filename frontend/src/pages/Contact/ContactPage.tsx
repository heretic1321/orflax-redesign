import { useLocation } from 'react-router-dom';
import ContactForm from './ContactForm';
import Header from './../../components/layout/Header/Header';

const ContactPage = () => {
    const location = useLocation();
    const enquiryData = location.state?.enquiryData;

    return (
        <div className="bg-gradient-to-r from-primaryBlack to-primaryGray min-h-screen">
            <Header />
            <div className="px-2 py-8 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-white mb-2 font-secondary">Contact Us</h1>
                <ContactForm enquiryData={enquiryData} />
            </div>
        </div>
    );
};

export default ContactPage;