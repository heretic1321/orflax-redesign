import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const quickSearchItems = [
    { name: 'Renewables', link: '/renewables' },
    { name: 'Wind Energy', link: '/wind-energy' },
    { name: 'Hydro Energy', link: '/hydro-energy' },
    { name: 'Sustainability', link: '/sustainability' },
    { name: 'Community', link: '/community' },
    { name: 'EZ Home', link: '/ez-home' },
    { name: 'IOT & Automation', link: '/iot-automation' },
    { name: 'Transmission & Distribution', link: '/transmission-distribution' },
    { name: 'Tata Power', link: '/tata-power' },
    { name: 'Who we are', link: '/who-we-are' },
    { name: 'Energy Services', link: '/energy-services' },
    { name: 'People', link: '/people' },
    { name: 'Solar Energy', link: '/solar-energy' },
    { name: 'What we do', link: '/what-we-do' },
    { name: 'News and Media', link: '/news-media' },
    { name: 'Thermal Energy', link: '/thermal-energy' },
    { name: 'Investor', link: '/investor' },
];

const QuickSearch = ({ isVisible }: { isVisible: boolean }) => {
    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isVisible ? 'auto' : 0, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute center bg-secondaryGray shadow-lg rounded-lg p-4 z-20 mt-12 ml-24 w-[80vw]"
        >
            <h2 className="text-primaryBlack font-bold mb-4">Quick Search</h2>
            <div className="flex flex-wrap gap-4">
                {quickSearchItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.link}
                        className="bg-highlightYellow text-primaryBlack text-sm rounded-full px-6 py-2 flex items-center justify-between"
                    >
                        {item.name} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
                    </Link>
                ))}
            </div>
        </motion.div>
    );
};

export default QuickSearch;
