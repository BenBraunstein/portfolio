import React from "react"
import Header from "./Header"
import BlogContainer from "./BlogContainer"
import { Route, Switch, withRouter } from "react-router-dom"
import "./App.css"
import ProjectContainer from "./ProjectContainer"
import Contact from "./Contact"
import Footer from "./Footer"

function App(props) {
  return (
    <div className="App">
      <Header history={props.history} />
      <Switch>
        <Route path="/blogs" render={() => <BlogContainer />} />
        <Route path="/projects" render={() => <ProjectContainer />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/" render={() => <div>Home</div>} />
      </Switch>
      <Footer />
    </div>
  )
}
export default withRouter(App)
