import React from 'react'
import User from "../../image/User.png"
import Vector from "../../image/Vector.png"
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import edit from "../../image/edit.png"
import Del from "../../image/delete.png"
const Admin = () => {
  return (
   <>
    <div className="user-setting">
       
        </div>
        <div className="setting-content">
    
    <div className="login-server" style={{marginBottom:"1rem"}}>
        <p style={{color:"#505793",lineHeight:'20px',fontSize:'12px',fontWeight:'bold',marginLeft:"21px",marginTop:'20px',display:'flex',alignItems:'center'}}> <img src={User} alt="" className="user" />   Create New User:</p>
    <div className="useer-list-setting">
        <ul>
            <li>
                <a href="#">Name :</a>
                <a href="#"> Email:</a>
                <a href="#">Password:</a>
                <a href="#">Access Level :</a>
              
        
            </li>
        </ul>
    </div>
    
        </div>
     
    
    </div>
    <div className="setting-content">
    
    <div className="login-server" style={{marginBottom:"1rem"}}>
        <p style={{color:"#505793",lineHeight:'20px',fontSize:'12px',fontWeight:'bold',marginLeft:"21px",marginTop:'20px',display:'flex',alignItems:'center'}}> User Management :</p>
    <div className="useer-list-setting-admin">
        
                <a href="#">Name </a>
                <a href="#"> Email</a>
                <a href="#">Password</a>
                <a href="#">Access Level </a>
                <a href='#' >
                  <img src={edit} alt="" className="edit" />
                </a>
        <a href='#'>
  <img src={Del} style={{width:'15px',height:'11.4px'}}  />

        </a>
              
        
            
    </div>
    
        </div>
     
    
    </div>
    <div className="setting-content">
    
    <div className="login-server" style={{marginBottom:"1rem"}}>
        <p style={{color:"#505793",lineHeight:'20px',fontSize:'12px',fontWeight:'bold',marginLeft:"21px",marginTop:'20px',display:'flex',alignItems:'center'}}> <img src={User} alt="" className="user" />   Create New User:</p>
    <div className="useer-list-setting admin">
        <ul>
            <li>
                <a href="#">Name :</a>
                <a href="#"> Email:</a>
                <a href="#">Password:</a>
                <a href="#">Access Level :</a>
              
        
            </li>
        </ul>
    </div>
    
        </div>
     
    
    </div>
   </>
  )
}

export default Admin