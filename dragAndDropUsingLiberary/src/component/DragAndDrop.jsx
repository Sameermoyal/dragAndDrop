import React, { useState } from 'react'
import Picture from './Picture'
import "./Dnd.css"
import { useDrop } from 'react-dnd'

function DragAndDrop() {
  const [data,setData]=useState([])
  const [dragData,setDragData]=useState([])
    const pictureList=[
        {
            id:1,
            url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1'
        },
        {
            id:2,
            url:'https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg'
        },
        {
            id:3,
            url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bb/a3/97/predator-ride-in-the.jpg?w=900&h=500&s=1'
        },
    ]

const[{isOver},drop]=useDrop(()=>({
    accept:'image',
    drop:(item)=>addDragElement(item.id),
    collect:(monitor)=>({
        isOver:monitor.isOver()
    })
}))
const addDragElement=(id)=>{
  
 const dragItem=pictureList.filter(item=>id===item.id)
 console.log("id",dragItem)
 setDragData((dragData)=>[...dragData,dragItem[0]])
}
  return (
    <>
     <div>{pictureList.map(picture=>(
        <Picture id={picture.id} url={picture.url}/>
     ))}</div>

     <div className="Board" ref={drop}>{dragData.map(picture=>(
         <Picture id={picture.id} url={picture.url}/>
     ))}</div>
    </>
  )
}

export default DragAndDrop