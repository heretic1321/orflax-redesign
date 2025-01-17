import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaBars, FaArrowRight } from 'react-icons/fa';
import { MenuItem } from '../../../types/ui';
import styles from './Menu.module.scss';
import { useNavigate } from 'react-router-dom';


const menuItems: MenuItem[] = [
    { name: 'Who we are', subItems: [
        { name: 'Our legacy', link: '/about/#our-legacy' },
        { name: 'Our story', link: '/about/#our-story' },
        { name: 'Our vision', link: '/about/#our-vision' },
    ]},
    { name: 'What we do', subItems: [
        { name: 'Our Products', link: '/products' },
        { name: 'Consultation', link: '/contact', state: { subject: 'Consultation Request', type: 'Consultation', message: 'Hey, I would like to request a consultation.' } },
        { name: 'Custom Manufacturing', link: '/contact', state: { subject: 'Custom Manufacturing Request', type: 'Manufacturing Request', message: 'Hey, I would like to request custom manufacturing.' } }
    ]},
    { name: 'Leadership and Team', subItems: [
        { name: 'Board of Directors', link: '/board-of-directors' },
        { name: 'Message from Team', link: '/message-from-team' },
    ]},
    { name: 'Resources', subItems: [
        { name: 'Bulk Savings Calculator', link: '/bulk-savings-calculator' },
        { name: 'Frequently Asked Questions', link: '/faq' },
    ] },
    { name: 'Contact Us', subItems: [
        { name: 'Contact Page', link: '/contact' },

    ] },
];

const Menu = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (isMenuOpen: boolean) => void }) => {
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(menuItems[0]);
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        };

    useEffect(() => {
        if (isMenuOpen) {
            setSelectedItem(menuItems[0]);
        }
    }, [isMenuOpen, setIsMenuOpen]);

    const handleItemClick = (item: MenuItem) => {
        setSelectedItem(item);
    };

    const handleSubItemClick = (link: string, state?: any) => {
        navigate(link, { state: { enquiryData: state } });
    };

    return (
        <div>
            <button onClick={toggleMenu} className="text-secondaryGray mt-[0.2rem]">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            {isMenuOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '92vh' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute left-0 w-full top-16 bg-primaryBlack text-secondaryGray z-50" // Increased z-index to 50
                >
                    <div className="flex mx-4 h-full z-20">
                        <div className="w-1/3 p-4">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`py-4 px-2 title cursor-pointer border-b border-gray-600 ${styles.title} ${selectedItem === item ? 'bg-highlightYellow text-primaryBlack' : ''}`}
                                    onClick={() => handleItemClick(item)}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg">{item.name}</span>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: selectedItem === item ? 1 : 0, scale: selectedItem === item ? 1 : 0 }}
                                            whileHover={{ opacity: 1, scale: 1.5 }}
                                            transition={{ duration: 0.3 }}
                                            className={styles.arrow}
                                        >
                                            <FaArrowRight />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="w-2/3 p-4">
                            {selectedItem && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="flex flex-wrap gap-6">
                                        {selectedItem.subItems.map((subItem, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => handleSubItemClick(subItem.link, subItem.state)}
                                                className={`cursor-pointer  p-4 bg-secondaryGray text-primaryBlack text-xl font-bold rounded-lg shadow-lg ${styles.card} h-52 w-52`}
                                            >
                                                {subItem.name}
                                            </motion.div>
                                            
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Menu;

