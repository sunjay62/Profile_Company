import React from "react";
import "./milestone.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const Milestone = () => {
  return (
    <div className="milestoneContainer">
      <h1>Our Milestone</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date={<span className="date-border">2011 - 2012</span>}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<VerifiedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date={<span className="date-border">2011 - 2012</span>}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<VerifiedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date={<span className="date-border">2011 - 2012</span>}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<VerifiedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date={<span className="date-border">2011 - 2012</span>}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<VerifiedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<VerifiedIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Milestone;
