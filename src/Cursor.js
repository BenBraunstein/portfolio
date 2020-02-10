import React from "react"

function Cursor(props) {
  return (
    <div
      className="cursor"
      style={{ top: props.ycord, left: props.xcord }}
    ></div>
  )
}

export default Cursor
