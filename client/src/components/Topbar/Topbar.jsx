import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">Welcome Back!</div>
      <div className="topbar-right">
        <div className="post-project">
          <AddIcon /> Post Project
        </div>
        <div className="topbar-ico">
          <SettingsIcon fontSize="medium" />
        </div>
        <div className="topbar-ico">
          <NotificationsIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
