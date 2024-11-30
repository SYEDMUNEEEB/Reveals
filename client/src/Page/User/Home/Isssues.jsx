import React, { useState } from 'react'
import Radio from "../../../image/Radio 5.png"
import Vector from "../../../image/Vector.png"
import CriticalIssueone from './CriticalIssueone'
const Issues = () => {
    const [showResults, setShowResults] = useState(false)
   


    const toggleShow = (id) => {
        setShowResults(id );

    }

    const Issues = [
        {
            id: 1, title: "Critical Issue 1", icon: Vector,
            issueStats: [{ menuTitle: "Error Propagation" },
            { menuTitle: "Remidiatoin Steps" },
            { menuTitle: "Analysis Detail" },
            { menuTitle: "Find Answer" }],

        },
        {
            id: 2, title: "Critical Issue 2", icon: Vector, issueStats: [{ menuTitle: "Error Propagation" },
            { menuTitle: "Remidiatoin Steps" },
            { menuTitle: "Analysis Detail" },
            { menuTitle: "Find Answer" }],
        },
        {
            id: 3, title: "Critical Issue 3", icon: Vector,
            issueStats: [{ menuTitle: "Error Propagation" },
            { menuTitle: "Remidiatoin Steps" },
            { menuTitle: "Analysis Detail" },
            { menuTitle: "Find Answer" }],
        },
        {
            id: 4, title: "Critical Issue 4", icon: Vector,
            issueStats: [{ menuTitle: "Error Propagation" },
            { menuTitle: "Remidiatoin Steps" },
            { menuTitle: "Analysis Detail" },
            { menuTitle: "Find Answer" }],
        },
        {
            id: 5, title: "Critical Issue 5", icon: Vector,
            issueStats: [{ menuTitle: "Error Propagation" },
            { menuTitle: "Remidiatoin Steps" },
            { menuTitle: "Analysis Detail" },
            { menuTitle: "Find Answer" }],
        },
    ]

    return (
        <div>
            <div className="critical-issues">
                {Issues.map((Issues) => (
                    <div
                        className="critical-issue"
                        key={Issues.id}
                        style={{ position: "relative", cursor: "pointer" }}
                        onClick={() => toggleShow(Issues.id)}
                    >
                        <div className="align">
                            <img
                                src={Radio}
                                alt="radio"
                                style={{ width: "16.13px", height: "16.13px", marginTop: "4px" }}
                            />
                            <p style={{ marginLeft: "10px", color: "#DE3B40" }}>{Issues.title}</p>
                        </div>
                        <div className="vector-icon">
                            <img src={Issues.icon} alt="" />
                        </div>
                    </div>
                ))}
  
            </div>
            {
               showResults && (
            <div className="one-criotical-issue">

                <CriticalIssueone title={Issues.find((muneeb)=>muneeb.id === showResults )?.title} menu={Issues.find((muneeb)=>muneeb.id===showResults)?.issueStats} />
            </div>

              
               )
            }
        </div>
    )
}

export default Issues