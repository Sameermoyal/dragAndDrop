import React, { useState } from 'react';

function App() {
  // Initial items to drag
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const [droppedItems, setDroppedItems] = useState([]);

  
  const handleDragStart = (event, item) => {
    event.dataTransfer.setData("itemId", item.id); 
  };


  const handleDragOver = (event) => {
    event.preventDefault(); 
  };


  const handleDrop = (event) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("itemId"); 
    const draggedItem = items.find((item) => item.id === parseInt(itemId));
    
    if (draggedItem) {
      setDroppedItems((prev) => [...prev, draggedItem]); // Add to the dropped area
      setItems((prev) => prev.filter((item) => item.id !== draggedItem.id)); // Remove from original list
    }
  };

  return (
    <div>
      <h1>React Drag and Drop Example</h1>

      <div id="droppable-area" style={{width: "500px",height: "200px", border: "2px solid black",margin: "20px",padding: "10px",backgroundColor: "#f9f9f9",}} onDragOver={handleDragOver} onDrop={handleDrop}>
        <p>Drop items here</p>
        {droppedItems.map((item) => (
          <div key={item.id}
            style={{padding: "5px",margin: "5px",backgroundColor: "#d4edda",border: "1px solid #c3e6cb", }}>
            {item.name}
          </div>
        ))}
      </div>

      <div>
        <h2>Draggable Items</h2>
        {items.map((item) => (
          <div key={item.id} id={`item-${item.id}`} draggable="true" onDragStart={(event) => handleDragStart(event, item)}
            style={{ margin: "10px",padding: "10px",backgroundColor: "#f0f0f0",border: "1px solid #ccc",cursor: "grab" }}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
