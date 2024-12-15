import React from 'react'
import { useDrag } from 'react-dnd'

function Picture({id,url}) {
const [{isDragging},drag]=useDrag(()=>({
    type:'image',
    item:{id:id},
    collect:(monitor)=>({
        isDragging:monitor.isDragging()
    })
}))

  return (
   <img src={url} width="150px" ref={drag} alt={id} style={{border: isDragging ?"5px solid green":"2px"}}/>
  )
}

export default Picture