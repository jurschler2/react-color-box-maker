import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import uuid from "uuid/v4";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const renderBoxes = () => {

    return (
      <div className="boxes">
        {boxes.map(box => <Box id={box.id} 
                               key={box.id}
                               width={box.width} 
                               height={box.height} 
                               backgroundColor={box.color} 
                               removeBox={removeBox}/>)}
      </div>
    );
  };
  // end renderBoxes

  /** Add new box object to the boxlist. */
  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  };
  // end addBox

  /** Remove a box object to the boxlist. */
  const removeBox = (key) => {
    console.log("key", key)
    // console.log("boxes", boxes[0].id)
    const boxesCopy = boxes.filter((b)=> b.id !== key);
    console.log("boxes copy", boxesCopy)
    setBoxes(boxesCopy);
  }
  // end addBox



  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
};
// end

export default BoxList;