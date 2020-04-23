import React from "react";


function Box({ id, width, height, backgroundColor, removeBox }) {

  function handleRemove() {
    removeBox(id);
  }
  const boxStyle = { width: `${width}px`, height: `${height}px`, backgroundColor }
  return (
    <div id={id} data-testid={`box-element-${id}`}>
      <div style={boxStyle} id={id}>
      </div>
      <button onClick={handleRemove}>Delete this box!</button>
    </div>
  );

}

export default Box;