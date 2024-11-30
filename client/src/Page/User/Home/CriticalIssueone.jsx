import React from 'react'
import Vector from "../../../image/Vector.png"
const CriticalIssueone = ({ title, menu }) => {

  return (
    <div className="critione">
      <div className="cricticalisssue " style={{zIndex:"-99"}}>
        <p style={{ marginLeft: '10px', color: "#DE3B40" }}  >{title} </p>
      </div>
      <div className="root">
        {
          menu.map((issueStats) => (
            <div key={issueStats.index} className="top-root">
              <span className="root-analysis">{issueStats.menuTitle}</span>
              <img src={Vector} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CriticalIssueone