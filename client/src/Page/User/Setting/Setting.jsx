import Vector from "../../../image/Vector.png"

const Setting=()=>{
    return(
        <>
        <div className="user-setting">
      
        </div>

<div className="setting-content">
    
<div className="login-server">
    <p style={{color:"#505793",lineHeight:'20px',fontSize:'12px',fontWeight:'bold',marginLeft:"21px",marginTop:'40px'}}>Device Setting</p>
<div className="useer-list-setting">
    <ul>
        <li>
            <a href="#">Device Server Refresh Interval :</a>
            <a href="#"> User ID :</a>
            <a href="#">IP Adress Syslog Server :</a>
            <a href="#">Syslog Path :</a>
            <a href="#">Refresh Interval :</a>
          <a href="#" id="">  <button className="refresf">Refresh Now</button></a>
        </li>
    </ul>
</div>

    </div>
    <div className="login-server">
    <p style={{color:"#505793",lineHeight:'20px',fontSize:'12px',fontWeight:'bold',marginLeft:"21px",marginTop:'40px'}}>Log Servers Access  Details </p>
<div className="useer-list-setting">
    <ul >
        <li>
            <a href="#">User ID :</a>
            <a href="#"> User Passowrd :</a>
           
            <a href="#">Applies to all Devices :</a>
           
        </li>
    </ul>
</div>

    </div>
    <div className="login-server" style={{marginBottom:'9rem'}} >
    <p style={{color:"#505793",lineHeight:'20px',fontSize:'12px',fontWeight:'bold',marginLeft:"21px",marginTop:'40px'}}>Update Configuration </p>
<div className="useer-list-setting">
    <ul>
        <li>
         
          <a href="#" id="">  <button className="refresf">Select Flie</button></a>
        </li>
    </ul>
</div>

    </div>

</div>


        </>
    )
}

export default Setting