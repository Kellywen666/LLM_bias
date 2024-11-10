// script.js
document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        // Display user message
        displayMessage(userInput, 'user-message');

        // Simulate bot response with typing effect
        setTimeout(() => {
            const botResponse = 'This is the bot reply for: ' + userInput; // Replace with actual model response
            typeMessage(botResponse); // Function to display bot response gradually
        }, 1000);

        // Clear the input field
        document.getElementById('user-input').value = '';
    }
});

function displayMessage(message, type) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', type);

    const messageContent = document.createElement('div');
    messageContent.classList.add('message');
    messageContent.textContent = message;

    messageElement.appendChild(messageContent);
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function typeMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', 'bot-message');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message');
    messageElement.appendChild(messageContent);
    chatBox.appendChild(messageElement);

    // Scroll to the bottom immediately when typing starts
    chatBox.scrollTop = chatBox.scrollHeight;

    let index = 0;
    const typingInterval = setInterval(() => {
        messageContent.textContent += message[index];
        index++;
        if (index === message.length) {
            clearInterval(typingInterval); // Stop typing effect
        }
    }, 100); // Adjust typing speed (100ms per character)
}
