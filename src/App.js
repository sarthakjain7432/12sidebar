import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Modal from "./Modal";
function App() {
  const [sidebar, setSidebar] = useState(false);
  const [modal,SetModal] = useState(false);
  return (
    <>
    <FaBars style={{color:"blue",width:"30px",height:'30px',marginTop:"30px",marginLeft:"30px"}} 
    onClick={() => setSidebar(!sidebar)}/>
    {sidebar && <Sidebar onClose={()=>setSidebar(false)}/>} 
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <button style={{backgroundColor:"blue",color:"white",height:"30px",border:"none",borderRadius:"5px"}}
      onClick={()=>SetModal(true)}>Show Modal</button>
      {modal && <Modal onClose={()=>SetModal(false)}/>}
    </div>
    </>
  );
}

export default App;
