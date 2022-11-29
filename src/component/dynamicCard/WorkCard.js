import "./workStyle.css";
import React from "react";
import { NavLink,Link } from "react-router-dom";
const WorkCard = (props) => {
  const{imgsrc,title,text,view,source}=props
  return (
    <div className="work-container">
      <div className="project-heading">
        <div className="project-container">
          <div className="project-card">
            <img src={imgsrc} />
            <h2 className="project-title">{title}</h2>
            <div className="pro-details">
              <p>{text}</p>
              <div className="pro-btns">
                <a href={''} className="btn">
                  View
                </a>
                <a href={source} className="btn">
                  Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
