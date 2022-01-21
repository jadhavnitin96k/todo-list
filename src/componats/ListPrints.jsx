import React from "react";
import ToolsItem from "./ToolsItem";
// import InputInfoForm from "../UpperBox/InputInfoForm";

const ListPrints=({listData})=>{
    

    return(
        <div>
            {
                listData.map(row=>{
                    return(
                        <ToolsItem listData={row} />
                )
                })
            }
        </div>
    )
}

export default ListPrints;