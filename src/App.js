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
import Cursor from "./Cursor"

function App(props) {
  const blogHover = e => {
    const cursor = document.querySelector(".cursor")
    cursor.style.transform = "scale(1.5)"
  }
  const blogUnHover = e => {
    const cursor = document.querySelector(".cursor")
    cursor.style.transform = ""
  }

  return (
    <div
      className="App"
      onMouseMove={e => {
        const cursor = document.querySelector(".cursor")
        cursor.style.left = `${e.pageX}px`
        cursor.style.top = `${e.pageY}px`
      }}
      onMouseDown={() => {
        const cursor = document.querySelector(".cursor")
        cursor.style.border = "2px solid cornflowerblue"
        cursor.style.background = "cornflowerblue"
      }}
      onMouseUp={() => {
        const cursor = document.querySelector(".cursor")
        cursor.style.border = ""
        cursor.style.background = ""
      }}
      onMouseLeave={() => {
        const cursor = document.querySelector(".cursor")
        cursor.style.display = "none"
      }}
      onMouseEnter={() => {
        const cursor = document.querySelector(".cursor")
        cursor.style.display = ""
      }}
    >
      <Header history={props.history} />
      <Cursor />
      <Switch>
        <Route
          path="/blogs"
          render={() => (
            <BlogContainer blogHover={blogHover} blogUnHover={blogUnHover} />
          )}
        />
        <Route path="/projects/tradr" render={() => <Tradr />} />
        <Route path="/projects/giffyguesser" render={() => <GiffyGuesser />} />
        <Route
          path="/projects"
          render={() => (
            <ProjectContainer blogHover={blogHover} blogUnHover={blogUnHover} />
          )}
        />
        <Route path="/contact" render={() => <Contact />} />
        <Route
          path="/"
          render={() => (
            <Home blogHover={blogHover} blogUnHover={blogUnHover} />
          )}
        />
      </Switch>
      <Footer date={new Date()} />
    </div>
  )
}
export default withRouter(App)
