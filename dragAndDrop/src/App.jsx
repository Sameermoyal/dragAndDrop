import React from 'react'
import { useState,useEffect } from 'react'

function App() {
 const[dragItem,setDragItem] =useState([])
 const[dropItem,setDropItem]=useState([])

 const items=[ { id: 1, name: "Item 1" },{ id: 2, name: "Item 2" },{ id: 3, name: "Item 3" },]
 useEffect(()=>setDragItem(items),[])
 
 function handleDragStart(e,item){
  e.dataTransfer.setData("itemid",item.id)
 }

function handleDragOver(e){
  e.preventDefault();
}



   
    
   
   
function handleDrop(e){
  const itemId =e.dataTransfer.getData("itemid")
  const draggableItem=dragItem.find(i=>i.id===parseInt(itemId))
  if(draggableItem){
    setDropItem(pre=>[...pre,draggableItem])
  }
  setDragItem(dragItem.filter(i=>i.id!=draggableItem.id))
}
 return (



    <div>
        <h1>drag and drop</h1>
   
    <div style={{height:"200px" ,width:"100%" ,border:"2px solid black"}}
      onDragOver={handleDragOver} onDrop={handleDrop}
    >
      {dropItem.map(item=>
    <div >
      <div key={item.id} style={{height:"50px" ,width:"500%" ,border:"2px solid black"}}>
       <h2>{item.name}</h2>
        </div> 
    </div>
    )
  }
      </div>
    

  {
    dragItem.map(item=>
    <div key={item.id} style={{border:"2px solid red"}} draggable="true" onDragStart={event=>{handleDragStart(event,item)}}>
       <h2>{item.name}</h2>
    </div> 
    )
  }


    </div>
  )
}

export default App