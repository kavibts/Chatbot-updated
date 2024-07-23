document.getElementById('chatbot-toggle-btn').addEventListener('click', function() {
    document.querySelector('.chatbot-container').style.display = 'flex';
    this.style.display = 'none';
  });

  document.getElementById('chatbot-close-btn').addEventListener('click', function() {
    document.querySelector('.chatbot-container').style.display = 'none';
    document.getElementById('chatbot-toggle-btn').style.display = 'block';
  });

  document.getElementById('chatbot-send-btn').addEventListener('click', function() {
    const inputField = document.getElementById('chatbot-input');
    const userMessage = inputField.value;
    if (userMessage.trim() === '') return;

    // Add user message to chat
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'message user-message';
    userMessageElement.innerText = userMessage;
    document.getElementById('chatbot-messages').appendChild(userMessageElement);

    // Scroll to the bottom
    document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;

    // Clear input field
    inputField.value = '';

    // Add bot response (simple echo response for demo purposes)
    setTimeout(function() {
      const botMessageElement = document.createElement('div');
      botMessageElement.className = 'message bot-message';
      botMessageElement.innerText = `You said: ${userMessage}`;
      document.getElementById('chatbot-messages').appendChild(botMessageElement);

      // Scroll to the bottom
      document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;
    }, 500);
  });

  document.getElementById('chatbot-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('chatbot-send-btn').click();
    }
  });
