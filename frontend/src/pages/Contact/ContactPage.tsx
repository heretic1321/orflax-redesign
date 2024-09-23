import ContactForm from './ContactForm'
import Header from './../../components/layout/Header/Header'
const ContactPage = () => {
    return (
        <div className="bg-gradient-to-r from-primaryBlack to-primaryGray min-h-screen">
            <Header />
            <div className="px-2 py-8 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-white mb-2 font-secondary">Contact Us</h1>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage;