import React, { useState, useEffect } from 'react';
import {  FaRegHandshake, FaUsers, FaFile, FaBuilding, FaBell, FaCalendar, FaBook, FaTools, FaImages, FaFolder, FaList, FaLock, FaEnvelope } from 'react-icons/fa'; // Import the necessary icons
import { LuUsers, LuDices  } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineDashboardCustomize ,  MdHistory } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { GrTask } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";


import './Sidenav.css'
import Logo from '../image/Logo.png'

const SideBar = () => {

  return (
    <div className="App">
      <div className="sidebar">
        <img src={Logo} alt="" width="150px" />
        {/* Add your sidebar links here */}
        <ul>
          <li><a href="#"><MdOutlineDashboardCustomize/> Dashboard</a></li>
          <li><a href="#"><LuUsers  /> Total Users</a></li>
          <li><a href="#"><IoIosNotificationsOutline /> Notification</a></li>
          <li><a href="#"><FaRegHandshake /> Total Referral</a></li>
          <li><a href="#"><BiMoneyWithdraw /> Total Withdrawal</a></li>
          <li><a href="#"><LuDices  /> Game Rooms</a></li>
          <li><a href="#"><AiOutlineTransaction  /> Transaction History</a></li>
          <li><a href="#"><GrTask/> Notice Board</a></li>
          <li><a href="#">< MdHistory /> Game History</a></li>
          <li><a href="#"><TbReportSearch /> Reports</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
