import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [isChatOpen, setIsChatOpen] = useState(true); // Always open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessages, setChatMessages] = useState([
    // Initial message from FitNav
    { sender: 'FitNav', text: ' Hello! How can I help?' },
  ]);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'You', text: searchQuery },
      ]);
      setSearchQuery('');
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="home">
      <div className="left-section">
        <div className="fitnav-info">
          <h2>FitNav</h2>
          <p>Your Personal Fitness Companion</p>
        </div>
      </div>
      <div className={`right-section ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-container">
          {chatMessages.map((message, index) => (
            <div className={`chat-message ${message.sender}`} key={index}>
              <span className="message-sender">
                {message.sender === 'FitNav' ? 'FitNav: ' : 'You: '}
              </span>
              <p className="message-text">{message.text}</p>
            </div>
          ))}
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
      </div>
    </section>
  );
}

export default Home;
