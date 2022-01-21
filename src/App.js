import './App.css';
import ListPrints from "./componats/ListPrints"
import InputInfo from "./UpperBox/InputInfo";
import {useState} from "react";



function App() {

  const dummyData=[
    {name:"Task 1",
  desc: "This is my task one",
},
    {name:"Task 2",
  desc: "This is my task two",
},
    {name:"Task 3",
  desc: "This is my task three",
},
    {name:"Task 4",
  desc: "This is my task four",
},

]
const [listData, setListData]=useState(dummyData);

const getToolsRecord =(data)=>{
  setListData([ ...listData, data]);

}

const deleteTodos =(data)=>{
  const updateData= (setListData) !==listData;
}

  return (<div className="MainBoxstyle">
    <h1 className='h1Style'>My Todos</h1>
    <InputInfo getToolsRecord={getToolsRecord}/>
   <ListPrints listData={listData} deleteTodos={deleteTodos}/>


  </div>
  );
}

export default App;
