import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your Home section CSS file

function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to track chat window status
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessages, setChatMessages] = useState([]); // State to track chat messages

  // Function to handle search and expand chat
  const handleSearch = () => {
    setIsChatOpen(true);
    if (searchQuery.trim() !== '') {
      // Add user's message to chat messages
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'You', text: searchQuery }, // Sender is 'You'
      ]);
      setSearchQuery('');
    }
  };

  // Function to handle chat input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const [currentImage, setCurrentImage] = useState(0);

  // Function to handle image transition
  const handleImageTransition = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % 3);
  };

  useEffect(() => {
    const interval = setInterval(handleImageTransition, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <section className="home">
      <div className="home-content">
      <div className="left-section">
          <div className="image-stack">
            <img
              src="https://source.unsplash.com/180x260/?vector-fitness"
              alt="Workout"
              className={`image ${currentImage === 0 ? 'active' : ''}`}
            />
            <img
              src="https://source.unsplash.com/180x260/?vector-fitness"
              alt="Workout"
              className={`image ${currentImage === 1 ? 'active' : ''}`}
            />
            <img
              src="https://source.unsplash.com/180x260/?fitness"
              alt="Workout"
              className={`image ${currentImage === 2 ? 'active' : ''}`}
            />
          </div>
        </div>
        <div className={`right-section ${isChatOpen ? 'open' : ''}`}>
          <div className="chat-container">
            {chatMessages.map((message, index) => (
              <div
                className={`chat-message ${message.sender}`}
                key={index}
              >
                <span className="message-sender">
                  {message.sender === 'fitnav' ? 'FitNav' : 'You'}
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
      </div>
      <div className="section-links">
        <a href="About.js">About</a>
        <a href="Services.js">Services</a>
        <a href="Testimonials.js">Testimonials</a>
        <a href="Contact.js">Contact Us</a>
      </div>
    </section>
  );
}

export default Home;
