import React from "react";
import "./ToolsItem.css";



const ToolsItem=(props)=>{
   
    
    return(<div className="rowstyle">
        <div ><div className="Taskstyle"><h1>{props.listData.name}</h1></div><div className="descStyle">{props.listData.desc}</div></div>
        <div className="ConfirmStyle">Confirm</div>
        <button className="DeleteStyle" onClick={props.updateData} >Delete</button>
    </div>)

}

export default ToolsItem;