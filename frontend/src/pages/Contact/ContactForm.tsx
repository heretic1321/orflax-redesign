import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [buttonText, setButtonText] = useState('Send');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        type: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setButtonText('Sending...');
        setTimeout(() => {
            setButtonText('Message sent');
            setFormData({
                name: '',
                email: '',
                subject: '',
                type: '',
                message: ''
            });
            setTimeout(() => {
                setButtonText('Send');
            }, 2000);
        }, 2000);
    };

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative rounded-md">
                    <iframe width="100%" height="100%" className="absolute inset-0 transition-transform duration-500 hover:scale-105 rounded-md" title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.525869403365!2d77.30715647615862!3d28.673911982199208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb54931e1b5f%3A0xeeab5e4dac767bfa!2sOrflax%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1727113912488!5m2!1sen!2sin"
                        style={{ filter: 'contrast(1.2) opacity(0.7)' }}></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">B-42/15 Jhilmil Industrial Area , G.T.Road , Delhi 110 095</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-highlightYellow leading-relaxed">connect@orflaxindia.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">+91 93134 93405 | +91 93136 66292 | +91 92051 93405 | 011-41523405</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-secondaryGray rounded-md flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Form</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">For product inquiries, orders, or general questions, product complaints, please fill out the form, and our team will be in touch soon.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-highlightYellow focus:ring-2 focus:ring-highlightYellow text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:shadow-lg" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-highlightYellow focus:ring-2 focus:ring-highlightYellow text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:shadow-lg" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-highlightYellow focus:ring-2 focus:ring-highlightYellow text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:shadow-lg" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="type" className="leading-7 text-sm text-gray-600">Type</label>
                            <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-highlightYellow focus:ring-2 focus:ring-highlightYellow text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:shadow-lg">
                                <option value="Order Enquiry">Order Enquiry</option>
                                <option value="Consultation">Consultation</option>
                                <option value="Complaint">Complaint</option>
                                <option value="Manufacturing Request">Manufacturing Request</option>
                            </select>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-highlightYellow focus:ring-2 focus:ring-highlightYellow h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out hover:shadow-lg"></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white bg-highlightYellow border-0 py-2 px-6 focus:outline-none hover:bg-highlightYellow/80 rounded text-lg"
                            type="submit"
                        >
                            {buttonText}
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;