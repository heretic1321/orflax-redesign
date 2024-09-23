import './AboutPage.scss';
import FAQ from './FAQ';
import Header from './../../components/layout/Header/Header';

const AboutPage = () => {
    return (
        <div className="bg-gradient-to-r from-primaryBlack to-primaryGray min-h-screen">
            <Header/>
            <FAQ/>
        </div>
    );
};

export default AboutPage;
