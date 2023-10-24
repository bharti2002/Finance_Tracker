// Function to scroll the chat log to the bottom
function scrollChatLog() {
    const chatLog = document.getElementById("chatlog");
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
  // Function to add a user message to the chat log
  function addUserMessage(message) {
    const chatLog = document.getElementById("chatlog");
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.textContent = message;
    messageContainer.appendChild(userMessage);
    chatLog.appendChild(messageContainer);
    scrollChatLog();
  }
  
  // Function to add a bot message to the chat log
  function addBotMessage(message) {
    const chatLog = document.getElementById("chatlog");
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    botMessage.textContent = message;
    messageContainer.appendChild(botMessage);
    chatLog.appendChild(messageContainer);
    scrollChatLog();
  }
  
  // Function to process user input and generate a bot response
  function processUserInput() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();
  
    if (userMessage !== "") {
      addUserMessage(userMessage);
      userInput.value = "";
  
      // Generate bot response
      const botResponse = generateBotResponse(userMessage);
      addBotMessage(botResponse);
    }
  }
  
  // Function to generate a bot response based on user input
  function generateBotResponse(userMessage) {
    // Here you can implement your own logic to generate bot responses based on user input
    if (userMessage.toLowerCase().includes("balance")) {
      return "Here is your balance: $5,000";
    }
    else if (userMessage.toLowerCase().includes("thank")) {
      return "You're welcome! I'm glad I could help. If you have any more questions, feel free to ask.";
    }
    else if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("help")) {
        return "Hello Shivani! How can I help you today?";
      }
    else
        return "I'm sorry, I cannot assist with that at the moment.";
  }
  
  // Event listener for send button click
  document.getElementById("sendBtn").addEventListener("click", processUserInput);
  
  // Event listener for Enter key press in the input field
  document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      processUserInput();
    }
  });
  
  