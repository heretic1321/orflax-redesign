import { createChatBotMessage } from 'react-chatbotify';
import Overview from './widgets/Overview';

const config = {
  botName: "OrflaxBot",
  initialMessages: [createChatBotMessage(`Hi! How can I help you today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#007bff",
    },
    chatButton: {
      backgroundColor: "#007bff",
    },
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"],
    },
  ],
};

export default config;
