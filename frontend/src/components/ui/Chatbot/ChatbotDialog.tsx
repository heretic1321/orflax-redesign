import Chatbot from 'react-chatbotify';
import { FaTimes } from 'react-icons/fa';
import './ChatbotDialog.scss';
import chatbotStyles from './chatbotStyles';

export const ChatbotDialog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    // necessary to embed the chatbot for it to show on the page
    const settings = {
      general: {
        embedded: true
      }
    }
    
    const themes = [
      {id: "minimal_midnight", version: "0.1.0"},
      {id: "simple_blue", version: "0.1.0"}
    ]

    return (
      <div>
        <button className='closeButton' onClick={onClose}>
          <FaTimes />
        </button>
        <Chatbot themes={themes} settings={settings} styles={chatbotStyles}/>
      </div>
    );
  };