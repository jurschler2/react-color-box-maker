import React from "react";


function Box({ id, width, height, backgroundColor, removeBox}) {

  const style = {width: `${width}px`, height: `${height}px`, backgroundColor: backgroundColor}
  return(
    <div id={id}>
    <div style={style} id={id}>
    </div>
    <button id={id} onClick={()=> removeBox(id)}>X</button>
    </div>
  )

}

export default Box;