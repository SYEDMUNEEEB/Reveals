import React, { useState } from 'react'
import Vector from "../../../image/Vector.png"
import RangeSlider from './RangeSlider'
import Filter from './Filter'
import DayRange from './DayRange'
import HoursRangs from './HoursRangs'
import circle from "../../../image/circle.png"
import DeviceInventroy from './DeviceInventroy'
import Isssues from './Isssues'
import CriticalIssueone from './CriticalIssueone'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import User from '../Sidebar'
const Home = () => {
const[open,setOpen]=useState(false)
const[minutes,setMinutes]=useState(false)
const[days,setDays]=useState(false)
const[hours,setHours]=useState(false)
const [ShowResult,setShowResult]=useState(false)
const [selectFilter,setSelectFilter]=useState('Select')


const handleFilter=(event)=>{
  setSelectFilter(event.target.value)
  console.log(event.target.value)
}
const onClick=()=>{
    setShowResult(!ShowResult)
}


const handleHours=()=> {
  setHours(!hours)
  setMinutes(false)
  setDays(false)
}
const handleDays=()=>{
  setDays(!days)
  setMinutes(false)
}

const handleOpen=()=>{
  setOpen(!open)
 
}
const handleMinutes=()=>{
setMinutes(!minutes)

}


  return (
    <>
   

    <div className="device" style={{background:"#161717",marginTop:"12px"}}>
      <p style={{color:'#626975' ,lineHeight:'20px',marginLeft:"23px",marginTop:"5px"}}>Device Health Summary</p>
      <div className="btn">
        <button className="critical">7  <span style={{color:"#DE3B40"}}>Critical </span> <img src={Vector} alt="" /></button>
        <div className="btn-2">
        <button className="warning">12  <span style={{color:"#FFB82A"}}>Warning </span> <img src={Vector} alt="" /></button>
       
  </div>
  <div className="fiterd-by">
          <p style={{color:'#626975' ,lineHeight:'20px',marginLeft:"23px"}} className='filterby' >Filter by:    </p>
       
       
        <div className="custom-select" style={{position:"relative"}} >
 
        <select  onChange={handleFilter}>
 
        <option >Select Filters</option>
  <option value="Minutes">Minutes</option>
  <option value="Hours">Hours</option>
  <option value="Days">Days</option>
</select>

      <div className="filter-display">
        {selectFilter === "Minutes"&& <Filter/>}
        {selectFilter ==="Hours"  && <HoursRangs />}
        {selectFilter === "Days" && <DayRange />}
      </div>
    </div>
          {/* <span className='after'></span> */}
          <div className="btn-3">
            <button className='circle'>

            <img src={circle} alt="" />
          
            </button>
            <div className="count">
              <p style={{color:'#B4BBC6' ,lineHeight:'20px'} }  id='devices' >Devices</p>
            </div>

            <div className="count">
              <p style={{color:'#B4BBC6' ,lineHeight:'20px',  }} id='158'>158</p>
            </div>
          </div>
        </div>
       
      </div>
     
    </div>
    <div className="inventory"><DeviceInventroy/></div>
    <div className="issue">
      <Isssues  />
    </div>
   
 

    </>
   
  )
}

export default Home