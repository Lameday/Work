import React from "react";

import "./HomeGrid.css";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ChatIcon from "@material-ui/icons/Chat";
import CollectionsIcon from "@material-ui/icons/Collections";
import DateRangeIcon from "@material-ui/icons/DateRange";
import DraftsIcon from "@material-ui/icons/Drafts";
import FaceIcon from "@material-ui/icons/Face";
import { Link } from "react-router-dom";

const HomeGrid = () => {
  return (
    <div className="grid-container">
      <Link to="/stats">
        <AssessmentIcon style={{ fontSize: 70 }} />
      </Link>
      <Link to="/mail">
        <DraftsIcon style={{ fontSize: 70 }} />
      </Link>
      <Link to="/gallery">
        <CollectionsIcon style={{ fontSize: 70 }} />
      </Link>
      <Link to="/calendar">
        <DateRangeIcon style={{ fontSize: 70 }} />
      </Link>
      <Link to="/verify">
        <FaceIcon style={{ fontSize: 70 }} />
      </Link>
      <Link to="/chat">
        <ChatIcon style={{ fontSize: 70 }} />
      </Link>
    </div>
  );
};

export default HomeGrid;
