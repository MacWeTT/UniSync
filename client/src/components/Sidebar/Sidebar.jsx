import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Sidebar.css";

const Sidebar = () => {
  // const [sidebarVisible, setSidebarVisible] = useState(true);
  const pathname = useLocation().pathname;

  return (
    <div className="sidebar-container">
      <div className="sidebar-items">
        <Link to="/" classname="link">
          <div className="sidebar-logo">
            <img src={logo}/>
            <span className="item-text">UniSync</span>
          </div>
        </Link>
        <Link
          to="/"
          className={`sidebar-item ${
            pathname === "/" ? "sidebar-item-selected" : ""
          } `}
        >
          <HomeIcon fontSize="large" /> <span className="item-text">Home</span>
        </Link>
        <Link
          to="/messages"
          className={`sidebar-item ${
            pathname === "/messages" ? "sidebar-item-selected" : ""
          } `}
        >
          <ChatIcon fontSize="large" />
          <span className="item-text">Messages</span>
        </Link>
        <Link
          to="/analytics"
          className={`sidebar-item ${
            pathname === "/analytics" ? "sidebar-item-selected" : ""
          } `}
        >
          <AssessmentIcon fontSize="large" />
          <span className="item-text">Analytics</span>
        </Link>
        <Link
          to="/profile"
          className={`sidebar-item ${
            pathname === "/profile" ? "sidebar-item-selected" : ""
          } `}
        >
          <AccountBoxIcon fontSize="large" />
          <span className="item-text">Profile</span>
        </Link>
        <div className="sidebar-item">
          <LogoutIcon fontSize="large" />
          <span className="item-text">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
