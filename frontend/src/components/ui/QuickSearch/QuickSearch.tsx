import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const quickSearchItems = [
    { name: 'Our Products', link: '/products' },
    { name: 'Custom Manufacturing', link: '/contact', state: { subject: 'Custom Manufacturing Request', type: 'Manufacturing Request', message: 'Hey, I would like to request custom manufacturing.' } },
    { name: 'Consultation Services', link: '/contact', state: { subject: 'Consultation Request', type: 'Consultation', message: 'Hey, I would like to request a consultation.' } },
    { name: 'Bulk Savings Calculator', link: '/bulk-savings-calculator' },
    { name: 'FAQs', link: '/faq' },
    { name: 'Find Us on Maps', link: '/contact' },
    { name: 'Board of Directors', link: '/board-of-directors' },
    { name: 'Enquiry Form', link: '/contact' },
    { name: 'Our Legacy', link: '/about/#our-legacy' },
    { name: 'Our Story', link: '/about/#our-story' },
    { name: 'Our Vision', link: '/about/#our-vision' },
    { name: 'Message from Team', link: '/message-from-team' },
    { name: 'Who we are', link: '/about' },
    { name: 'What we do', link: '/products' },
    { name: 'Contact Us', link: '/contact' },
];

const QuickSearch = ({ isVisible, searchTerm }: { isVisible: boolean, searchTerm: string }) => {
    const filteredItems = quickSearchItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isVisible ? 'auto' : 0, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute center bg-secondaryGray shadow-lg rounded-lg p-4 z-20 mt-12 ml-24 w-[80vw]"
        >
            <h2 className="text-primaryBlack font-bold mb-4">Quick Search</h2>
            <div className="flex flex-wrap gap-4">
                {filteredItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.link}
                        state={item.state}
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
