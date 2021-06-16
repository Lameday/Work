import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import WorkIcon from "@material-ui/icons/Work";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <IconButton>
          <HomeIcon style={{ color: "white", fontSize: "40" }} />
        </IconButton>
      </Link>
      <div>
        <WorkIcon style={{ color: "white", fontSize: "40" }} />
        <WorkIcon style={{ color: "white", fontSize: "40" }} />
        <WorkIcon style={{ color: "white", fontSize: "40" }} />
      </div>
      <h2></h2>
    </div>
  );
};

export default Header;
