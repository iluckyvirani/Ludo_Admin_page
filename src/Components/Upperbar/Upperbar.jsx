
// TopBar.js
import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Upperbar.css'
import adminimg from '../../Components/image/admin.jpeg'

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="profile">
        <img src={adminimg} alt="Admin Avatar" />
        <div className="details">
          <p>Mr Admin</p>
          <p>Boss</p>
        </div>
      </div>
      <div className="actions">
        <div className="search">
        <FaSearch className='icons'/>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="settings">
        
        </div>
      </div>
    </div>
  );
};

export default TopBar
