import React from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import DragAndDrop from "./component/DragAndDrop"
function App() {
  return (
   <DndProvider backend={HTML5Backend}>
    <DragAndDrop/>
   </DndProvider>
  )
}

export default App