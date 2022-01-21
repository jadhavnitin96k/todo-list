import React from "react";
import "./InputInfoForm.css";
import { useState } from "react";

const InputInfoForm=(props)=>{
    const [name, setName]= useState('Task no.');
    const [desc, setDesc]= useState("This is my task");

    const handleSubmit = (e)=>{
        e.preventDefault();

        const data={
            name: name,
            desc: desc,
        }

        props.getFormData(data);
        setName("");
        setDesc("");
    }
    return(
        <form onSubmit={handleSubmit} className="rowStyle">
        <div><lable className="lableStyle">Name:</lable> <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/></div>
        <div><lable className="lableStyle">Discription:</lable> <input type="text" onChange={(e)=>{setDesc(e.target.value)}} value={desc} /></div>
        <div><button  className="Buttonstyle"><b>Add Tools</b></button></div>
    </form>
    )
}

export default InputInfoForm;