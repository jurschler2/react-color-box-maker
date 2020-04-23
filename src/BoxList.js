import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const renderBoxes = () => {

    return (
      <div className="boxes" data-testid="boxes-container">
        {boxes.map(box => <Box id={box.id} 
                               key={box.id}
                               width={box.width} 
                               height={box.height} 
                               backgroundColor={box.color} 
                               removeBox={removeBox}/>)}
      </div>
    );
  };


  /** Add new box object to the boxlist. */
  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  };
  

  /** Remove a box object to the boxlist. */
  const removeBox = (boxID) => {
    
    const boxesCopy = boxes.filter((b)=> b.id !== boxID);
    setBoxes(boxesCopy);
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
};


export default BoxList;