import React, { useState } from 'react'
import logo from "./logo.svg";
import { ImCross } from "react-icons/im";
import { links,social } from './data';

function Sidebar({onClose}) {
    const [hide,SetHide] = useState(false)
    
    const handleTransitionEnd = () => {
    if (hide) {
      onClose();
    }
  };
  return (
    <>
    <div className={hide? "hide" : "show"} style={{backgroundColor:"white",width:"30%",position:"absolute",top:"0"}} onTransitionEnd={handleTransitionEnd}>
        <img src={logo} alt="" style={{marginBottom:"50px"}}/>
        <ImCross style={{float:"right",height:"22px",width:"22px",marginTop:"15px",marginRight:"15px"}}
            onClick={() => SetHide(true)}
        />
        {
            links.map((item)=>
                <div style={{marginBottom:"20px"}}>
                <a href={item.url} style={{ display: "flex", alignItems: "center",textDecoration:"none" }}>
                    <span style={{fontSize:"24px",marginLeft:"20px"}}>
                        {item.icon}
                    </span>
                    <span style={{fontSize:"20px",marginLeft:"20px"}}>
                        {item.text}
                    </span>
                </a>
                </div>    
            )           
        }
        <div style={{marginTop:"279px"}}>
        {
            social.map((item,index)=>
                <a key={index} href={item.url} style={{marginRight:"10px",fontSize:"23px", marginLeft: index === 0 ? "120px" : "0"}}>{item.icon}</a>
            )
        }
        </div>
    </div>
    </>
  )
}

export default Sidebar