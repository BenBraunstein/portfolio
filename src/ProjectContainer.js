import React from "react"
import Tradr from "./Tradr"
import GiffyGuesser from "./GiffyGuesser"
import FactFun from "./FactFun"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import PeopleIcon from "@material-ui/icons/People"
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset"
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation"


function ProjectContainer(props) {
  const [value, setValue] = React.useState(0)

  return (
    <div className="projects extra-bottom-padding">
      <h1>Projects</h1>
      {value === 0 ? (
        <Tradr blogHover={props.blogHover} blogUnHover={props.blogUnHover} />
      ) : null}
      {value === 1 ? (
        <GiffyGuesser
          blogHover={props.blogHover}
          blogUnHover={props.blogUnHover}
        />
      ) : null}
      {value === 2 ? (
        <FactFun blogHover={props.blogHover} blogUnHover={props.blogUnHover} />
      ) : null}

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        id="bottom-nav"
      >
        <BottomNavigationAction
          label="Tradr"
          icon={<PeopleIcon />}
          onMouseOver={e => {
            props.blogHover(e)
            e.target.style.color = "red"
          }}
          onMouseOut={e => {
            props.blogUnHover(e)
            e.target.style.color = ""
          }}
        />
        <BottomNavigationAction
          label="Giffy Guesser"
          icon={<VideogameAssetIcon />}
          onMouseOver={e => {
            props.blogHover(e)
            e.target.style.color = "red"
          }}
          onMouseOut={e => {
            props.blogUnHover(e)
            e.target.style.color = ""
          }}
        />
        <BottomNavigationAction
          label="Fact Fun"
          icon={<NotListedLocationIcon />}
          onMouseOver={e => {
            props.blogHover(e)
            e.target.style.color = "red"
          }}
          onMouseOut={e => {
            props.blogUnHover(e)
            e.target.style.color = ""
          }}
        />
      </BottomNavigation>
    </div>
  )
}

export default ProjectContainer
