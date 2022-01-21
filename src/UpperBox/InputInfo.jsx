import React from "react";
import InputInfoForm from "./InputInfoForm";

const InputInfo =(props)=>{
    
    const getFormData=(data)=>{
        //alert("hii from inputInfo");
        console.log(data);
        props.getToolsRecord(data);
    }
    return(
        <div>
            <InputInfoForm getFormData={getFormData} />
        </div>
    );

}

export default InputInfo;