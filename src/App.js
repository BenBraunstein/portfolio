import React, { useState } from "react"
import Header from "./Header"
import BlogContainer from "./BlogContainer"
import { Route, Switch, withRouter } from "react-router-dom"
import "./App.css"
import ProjectContainer from "./ProjectContainer"
import Contact from "./Contact"
import Footer from "./Footer"
import Tradr from "./Tradr"
import GiffyGuesser from "./GiffyGuesser"
import Home from "./Home"
import Cursor from "./Cursor"

function App(props) {
  const [xcord, changex] = useState(0)
  const [ycord, changey] = useState(0)
  const [cursorClasses, changeClasses] = useState(["cursor"])

  const blogHover = e => {
    changeClasses([...cursorClasses, "img-grow"])
  }
  const blogUnHover = e => {
    changeClasses(cursorClasses.filter(className => className !== "img-grow"))
  }

  return (
    <div
      className="App"
      onMouseMove={e => {
        changex(e.pageX + "px")
        changey(e.pageY + "px")
      }}
      onMouseDown={() => {
        changeClasses([...cursorClasses, "mouse-down"])
      }}
      onMouseUp={() => {
        changeClasses(
          cursorClasses.filter(className => className !== "mouse-down")
        )
      }}
      onMouseLeave={() => {
        changeClasses([...cursorClasses, "mouse-left"])
      }}
      onMouseEnter={() => {
        changeClasses(
          cursorClasses.filter(className => className !== "mouse-left")
        )
      }}
    >
      <Header history={props.history} />
      <Cursor classes={cursorClasses} xcord={xcord} ycord={ycord} />
      <Switch>
        <Route
          path="/blogs"
          render={() => (
            <BlogContainer blogHover={blogHover} blogUnHover={blogUnHover} />
          )}
        />
        <Route path="/projects/tradr" render={() => <Tradr />} />
        <Route path="/projects/giffyguesser" render={() => <GiffyGuesser />} />
        <Route path="/projects" render={() => <ProjectContainer />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
      <Footer date={new Date()} />
    </div>
  )
}
export default withRouter(App)
