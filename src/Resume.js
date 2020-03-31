import React from "react"
import reactJpg from "./images/resume.jpg"
import { Button } from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Save"

function Resume(props) {
  return (
    <div>
      <img
        onMouseOver={e => props.blogHover(e)}
        onMouseOut={e => props.blogUnHover(e)}
        src={reactJpg}
        alt="Resume"
        style={{ width: "85vmin" }}
      />
      <br />
      <Button
        variant="contain"
        style={{ backgroundColor: "#1976D2", color: "white" }}
        size="large"
        startIcon={<SaveIcon />}
        onClick={() =>
          window.open(
            "https://drive.google.com/u/0/uc?id=15_cMKtKWm9QdD4kX1ZCY4QBC_Rxd9QzL&export=download"
          )
        }
      >
        Download PDF
      </Button>
    </div>
  )
}

export default Resume
