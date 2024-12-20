import React from 'react';
import { GoSidebarExpand } from "react-icons/go";
import { LuLayoutDashboard, LuUsersRound, LuLayoutTemplate } from "react-icons/lu";
import { SiGoogleadsense } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaChartLine, FaRegUserCircle } from "react-icons/fa";
import './Testimonials.css';

const Testimonial = () => {
  return (
    <div className="main-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <GoSidebarExpand className="sidebar-icon" />
          <div>
            Turnkey<br />
            <span className="subtext">Control Panel</span>
          </div>
        </div>
        <div className="sidebar-menu">
          <div className="menu-item active">
            <LuLayoutDashboard className="menu-icon" />
            <span>Dashboard</span>
          </div>
          <div className="menu-item">
            <LuUsersRound className="menu-icon" />
            <span>Users</span>
          </div>
          <div className="menu-item">
            <SiGoogleadsense className="menu-icon" />
            <span>Leads</span>
          </div>
          <div className="menu-item">
            <FaChartLine className="menu-icon" />
            <span>Economy</span>
          </div>
          <div className="menu-item">
            <MdProductionQuantityLimits className="menu-icon" />
            <span>Products</span>
          </div>
          <div className="menu-item">
            <IoMdTime className="menu-icon" />
            <span>Time Report</span>
          </div>
          <div className="menu-item">
            <LuLayoutTemplate className="menu-icon" />
            <span>Templates</span>
          </div>
        </div>
        <div className="sidebar-footer">
          <FaRegUserCircle className="menu-icon" />
          <div>
            Ketan Jain<br />
            <span className="subtext">Turnkey Manager</span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="content">
        <header className="content-header">
          <h1>Dashboard</h1>
          <div className="stat-cards">
            <div className="stat-card">Portal Users<br /><span>60</span></div>
            <div className="stat-card">New Leads<br /><span>6</span></div>
            <div className="stat-card">Companies<br /><span>48</span></div>
            <div className="stat-card">Products<br /><span>578</span></div>
          </div>
        </header>

        <section className="content-section">
          <div className="table-container">
            <h2>New Customers Leads</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Mobile Phone</th>
                  <th>Type of Project</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>19</td>
                  <td>Alan Cooper</td>
                  <td>alan.cooper@gmail.com</td>
                  <td>+4721679747</td>
                  <td>Big Job</td>
                  <td>25.12.2022 11:15</td>
                  <td><span className="action-delete">Delete</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h2>New Companies Leads</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Manager</th>
                  <th>Mobile Phone</th>
                  <th>City</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>376</td>
                  <td>Art Building</td>
                  <td>artbuilding@gmail.com</td>
                  <td>Harry Stone</td>
                  <td>+4721679747</td>
                  <td>Oslo</td>
                  <td>25.12.2022 11:15</td>
                  <td><span className="action-delete">Delete</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;



// // side bar
// import { GoSidebarExpand } from "react-icons/go";
// <GoSidebarExpand />
// //Dashboard
// import { LuLayoutDashboard } from "react-icons/lu";
// <LuLayoutDashboard />
// //users\
// import { LuUsersRound } from "react-icons/lu";
// <LuUsersRound />
// // leads
// import { SiGoogleadsense } from "react-icons/si";
// <SiGoogleadsense />
// // economy
// koi acha sa icon dekh kar laga dena 
// //products
// import { MdProductionQuantityLimits } from "react-icons/md";
// <MdProductionQuantityLimits />
// //time report
// import { IoMdTime } from "react-icons/io";
// <IoMdTime />
// // templates
// import { LuLayoutTemplate } from "react-icons/lu";
// <LuLayoutTemplate />