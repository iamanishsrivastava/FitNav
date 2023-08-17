import React from 'react';
import './Home.css'; // Import your Home section CSS file

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="left-section">
        {
            /* workout images and AI chat bot*/
            
        }
        </div>
        <div className="right-section">
          <div className="chat-container">
            {
            /* Display chat messages here */
            }
          </div>
          <div className="input-container">
            <input type="text" placeholder="Ask a question" />
            <button>Send</button>
          </div>
        </div>
      </div>
      <div className="section-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact Us</a>
      </div>
    </section>
  );
}

export default Home;