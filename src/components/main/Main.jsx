import React, { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = ({ theme }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello, Dev", isBot: true },
    { text: "How can I help you today?", isBot: true }
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage = { text: input, isBot: false };
    setMessages([...messages, userMessage]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I'm a Gemini AI clone. In a real implementation, this would connect to the Gemini API.", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <div className={`main ${theme}`}>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="chat-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.isBot ? "bot" : "user"}`}>
              {message.isBot ? (
                <img src={theme === "dark" ? assets.gemini_icon_white : assets.gemini_icon} alt="Gemini" />
              ) : (
                <img src={assets.user_icon} alt="User" />
              )}
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <div className="main-bottom">
          <form className="search-box" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Enter a prompt here..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={theme === "dark" ? assets.gallery_icon_white : assets.gallery_icon} alt="" />
              <img src={theme === "dark" ? assets.mic_icon_white : assets.mic_icon} alt="" />
              <button type="submit">
                <img src={theme === "dark" ? assets.send_icon_white : assets.send_icon} alt="" />
              </button>
            </div>
          </form>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;