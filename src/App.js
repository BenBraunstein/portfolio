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

  return (
    <div
      className="App"
      onMouseMove={e => {
        changex(e.pageX + "px")
        changey(e.pageY + "px")
      }}
      onMouseDown={() => {
        console.log("mouse down")
      }}
    >
      <Header history={props.history} />
      <Cursor classes={cursorClasses} xcord={xcord} ycord={ycord} />
      <Switch>
        <Route path="/blogs" render={() => <BlogContainer />} />
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
