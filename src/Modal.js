import React, { useState } from 'react'
import { ImCross } from "react-icons/im";

function Modal({onClose}) {
    const[hide,SetHide] = useState(false);
  return (
    <>
        {hide?"":
        <div className="modal-backdrop">
            <div className="modal-content">
                <ImCross style={{height:"22px",width:"22px",float:"right",marginTop:"15px",marginRight:"15px"}}
                    onClick={()=>{
                        SetHide(true)
                        onClose()
                        }
                    }
                />
                <div style={{marginTop:"14%",marginLeft:"33%",fontSize:"30px"}}>Modal Content</div>
            </div>
        </div>      
        }
    </>
  )
}

export default Modal