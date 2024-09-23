import Chatbot from 'react-chatbotify';
import { FaTimes } from 'react-icons/fa';
import './ChatbotDialog.scss';
import chatbotStyles from './chatbotStyles';
export const ChatbotDialog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    // necessary to embed the chatbot for it to show on the page
    const flow = {
      start: {
        message: "Hello, I'm O 👋! Welcome to Orflax India, your trusted partner for high-quality wires and cables. How can I assist you today? Feel free to ask anything from product details to support 😊!",
        path: "askName"
      },
      askName: {
        message: "May I know your name, please?",
        path: "greetUser"
      },
      greetUser: {
        message: (params: any) => `Nice to meet you, ${params.userInput}! How can I make your day easier?`,
        options: ["Product Info", "Support", "Expert Advice", "Other"],
        path: "getCategory"
      },
      getCategory: {
        message: "What would you like to know more about?",
        dynamicOptions: ["Products", "Support", "Pricing", "Order Status", "General Inquiry"],
        path: "handleCategory"
      },
      handleCategory: {
        message: (params: any) => {
          const category = params.userInput.toLowerCase();
          switch (category) {
            case "products":
              return "Great! We have a wide range of wires and cables designed for various needs. Are you looking for residential, commercial, or industrial solutions?";
            case "support":
              return "Our support team is always here to help. What kind of assistance do you need—technical support, warranty information, or order tracking?";
            case "pricing":
              return "We offer competitive prices tailored to your project size. Let me know which products you're interested in, and I’ll provide a quote!";
            case "order status":
              return "Could you provide your order number so I can track it for you?";
            default:
              return "I’m here to assist you with anything else you need. Feel free to ask about products, services, or support!";
          }
        },
        path: "getDetails"
      },
      getDetails: {
        message: "Please provide more details so I can assist you better.",
        path: "provideAnswer"
      },
      provideAnswer: {
        message: (params: any) => {
          const userInput = params.userInput.toLowerCase();
          if (userInput.includes("orflax")) {
            return "Orflax offers a broad range of high-quality wires and cables tailored for durability, safety, and efficiency. How can I help with product details?";
          } else if (userInput.includes("support")) {
            return "What specific support do you need—technical help, warranty information, or order tracking?";
          } else {
            return "I’m sorry, could you clarify your question? I want to ensure I provide the right assistance.";
          }
        },
        path: "additionalHelp"
      },
      additionalHelp: {
        message: (params: any ) => `Thanks for your question, ${params.userInput}. Can I assist with anything else?`,
        options: ["Yes", "No"],
        path: "end"
      },
      end: {
        message: (params: any) => params.userInput === "Yes"
          ? "Great! What else can I help you with today?"
          : "Thank you for visiting Orflax! If you have more questions later, feel free to ask. Have a great day! 😊",
        chatDisabled: (params: any) => params.userInput === "No"
      }
    };
    

    const settings = {
      general: {
        embedded: true
      }
    }
    
    const themes = [
      {id: "minimal_midnight", version: "0.1.0"},
      {id: "simple_blue", version: "0.1.0"}
    ]

    if (!isOpen) return null;

    return (
      <div>
        <button className='closeButton' onClick={onClose}>
          <FaTimes />
        </button>
        <Chatbot themes={themes} settings={settings} styles={chatbotStyles} flow={flow}/>
      </div>
    );
  };