import React from "react"

function Cursor(props) {
  return (
    <div
      className={props.classes.join(" ")}
      style={{ top: props.ycord, left: props.xcord }}
    ></div>
  )
}

export default Cursor
