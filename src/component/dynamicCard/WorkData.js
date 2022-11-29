 import "./workStyle.css";
import React from "react";
import WorkCard from "./WorkCard";
import ProjectData from "../../projectData";
const WorkData1 = () => {
  // <h1 className="project-heading">Projects</h1>
  return (
    <div className="work-container">
    <div className="project-container">
    {
      ProjectData.map((it,index)=>{
        return(
          <WorkCard
          key={index}
          imgsrc={it.imgsrc}
          title={it.title}
          text={it.text}
          view={it.view}
          source={it.source} 
          />
          )
        })
      }
      </div>
        </div>
  );
};

export default WorkData1;
