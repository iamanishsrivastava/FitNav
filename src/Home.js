import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { sendUserInputToOpenAI } from './OpenAI';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  // Refs to chat container and chat messages
  const chatContainerRef = useRef(null);
  const chatMessagesRef = useRef(null);
  const [isWaitingForBot, setIsWaitingForBot] = useState(false); 

 // Function to handle user message submission
 const handleSearch = async () => {
  if (searchQuery.trim() !== '' && !isWaitingForBot) {
    const userMessage = { role: 'user', content: searchQuery };
    setChatMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsWaitingForBot(true);

    try {
      const openAIResponse = await sendUserInputToOpenAI(searchQuery);
      const fitNavResponse = { sender: 'FitNav', text: openAIResponse };
      setChatMessages((prevMessages) => [...prevMessages, fitNavResponse]);
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
    } finally {
      setIsWaitingForBot(false);
    }

    setSearchQuery('');
  }
};
  

  // Function to handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Effect to display FitNav's initial message
  useEffect(() => {
    if (chatMessages.length === 0) {
      const initialMessage = {
        sender: 'FitNav',
        text: 'Hello, how can I assist you today?',
      };
      setChatMessages([initialMessage]);
    }
  }, []);

  // Effect to auto-scroll to the last message
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    const chatMessagesDiv = chatMessagesRef.current;

    chatContainer.scrollTop = chatMessagesDiv.scrollHeight;
  }, [chatMessages]);

  return (
    <section className="home">
      <div className="chat-container" ref={chatContainerRef}>
        <div className="chat-messages" ref={chatMessagesRef}>
          {chatMessages.map((message, index) => (
            <div className={`chat-message ${message.sender}`} key={index}>
              <span className="message-sender">
                {message.sender === 'FitNav' ? 'FitNav: ' : 'You: '}
              </span>
              <p className="message-text">{message.content}</p>
              <p className="message-text">{message.text}</p>
            </div>
          ))}
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type your question..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>Send</button>
        </div>
      </div>
    </section>
  );
}

export default Home;