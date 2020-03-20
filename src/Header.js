import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import MenuIcon from "@material-ui/icons/Menu"
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
})

function Header(props) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button onClick={() => props.history.push("/")}>
          Home
        </ListItem>
        <ListItem button onClick={() => props.history.push("/blogs")}>
          Blog Posts
        </ListItem>
        <ListItem button onClick={() => props.history.push("/projects")}>
          Projects
        </ListItem>
        <ListItem button onClick={() => props.history.push("/resume")}>
          Resume
        </ListItem>
        <ListItem button onClick={() => props.history.push("/contact")}>
          Contact
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ben Braunstein
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <a
              href="mailto:BenZBraunstein@gmail.com?subject=Hi From Your Portfolio Site"
              style={{ color: "white", textDecoration: "none" }}
            >
              BenZBraunstein@gmail.com
            </a>{" "}
            /{" "}
            <a
              href="sms:+1-516-477-8178?body=Hey Ben, I love your website!"
              style={{ color: "white", textDecoration: "none" }}
            >
              516-477-8178
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
