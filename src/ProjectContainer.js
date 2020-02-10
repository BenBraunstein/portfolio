import React from "react"
import Tradr from "./Tradr"
import GiffyGuesser from "./GiffyGuesser"
import FactFun from "./FactFun"
import { makeStyles } from "@material-ui/core/styles"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import PeopleIcon from "@material-ui/icons/People"
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset"
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation"

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "gold"
  }
})

function ProjectContainer() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <div className="projects">
      <h1>Projects</h1>
      {value === 0 ? <Tradr /> : null}
      {value === 1 ? <GiffyGuesser /> : null}
      {value === 2 ? <FactFun /> : null}

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Tradr" icon={<PeopleIcon />} />
        <BottomNavigationAction
          label="Giffy Guesser"
          icon={<VideogameAssetIcon />}
        />
        <BottomNavigationAction
          label="Fact Fun"
          icon={<NotListedLocationIcon />}
        />
      </BottomNavigation>
    </div>
  )
}

export default ProjectContainer
