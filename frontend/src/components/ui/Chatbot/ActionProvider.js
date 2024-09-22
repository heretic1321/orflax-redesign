class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const message = this.createChatBotMessage("Hello! How can I assist you?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    handleProducts() {
      const message = this.createChatBotMessage(
        "We offer a variety of products including Multistrand Wires, Coaxial Cable, Flexible Copper Wire, and more. Which one would you like to know more about?"
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    handleContact() {
      const message = this.createChatBotMessage(
        "You can contact us via email, phone, or WhatsApp. How would you like to get in touch?"
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;