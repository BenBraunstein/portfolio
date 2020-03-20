import React from "react"
import reactJpg from "./images/resume.jpg"
import { Button } from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Save"

function Resume() {
  return (
    <div>
      <img src={reactJpg} alt="Resume" width="1000px" />
      <br />
      <Button
        variant="contain"
        style={{ backgroundColor: "#1976D2", color: "white" }}
        size="large"
        startIcon={<SaveIcon />}
      >
        Download
      </Button>
    </div>
  )
}

export default Resume
