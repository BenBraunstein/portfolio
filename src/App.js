import React from "react"
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

function App(props) {
  return (
    <div className="App">
      <Header history={props.history} />
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
