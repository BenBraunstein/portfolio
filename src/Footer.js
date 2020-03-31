import React from "react"
import SocialButtons from "./social-media-logos"

function Footer(props) {
  return (
    <div id="footer">
      <SocialButtons />
      Copyright © 2020{" "}
      {props.date.getFullYear() === 2020
        ? null
        : `- ${props.date.getFullYear()}`}{" "}
      Ben Braunstein
    </div>
  )
}

export default Footer
