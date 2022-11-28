import "./workStyle.css";
import React from "react";
import WorkCard from "./WorkCard";
import ProjectData from "../../projectData";
const WorkData1 = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {
            ProjectData.map((it,index)=>{
                return(
                    <WorkCard
                    key={index}
                    imgsrc={it.imgsrc}
                    title={it.title}
                    value={it.value}
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
