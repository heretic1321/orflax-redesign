class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("products")) {
        this.actionProvider.handleProducts();
      }
  
      if (lowerCaseMessage.includes("contact")) {
        this.actionProvider.handleContact();
      }
    }
  }
  
  export default MessageParser;