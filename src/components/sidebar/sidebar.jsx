import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = ({ theme, toggleTheme }) => {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`sidebar ${theme}`}>
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={theme === "dark" ? assets.menu_icon_white : assets.menu_icon}
          alt=""
        />
        <div className="new-chat">
          <img src={theme === "dark" ? assets.plus_icon_white : assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={theme === "dark" ? assets.message_icon_white : assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-items recent-entry">
          <img src={theme === "dark" ? assets.question_icon_white : assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-items recent-entry">
          <img src={theme === "dark" ? assets.history_icon_white : assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-items recent-entry">
          <img src={theme === "dark" ? assets.setting_icon_white : assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
        <div className="theme-toggle" onClick={toggleTheme}>
          <img 
            src={theme === "dark" ? assets.sun_icon : assets.moon_icon} 
            alt="Toggle theme" 
          />
          {extended ? <p>{theme === "dark" ? "Light Mode" : "Dark Mode"}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;