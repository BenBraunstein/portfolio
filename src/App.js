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
import Resume from "./Resume"

function App(props) {
  const blogHover = e => {
    const cursor = document.querySelector(".cursor")
    cursor.classList.add("img-grow")
  }

  const blogUnHover = e => {
    const cursor = document.querySelector(".cursor")
    cursor.classList.remove("img-grow")
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
        cursor.classList.add("mouse-down")
      }}
      onMouseUp={() => {
        const cursor = document.querySelector(".cursor")
        cursor.classList.remove("mouse-down")
      }}
      onMouseLeave={() => {
        const cursor = document.querySelector(".cursor")
        cursor.classList.add("mouse-left")
      }}
      onMouseEnter={() => {
        const cursor = document.querySelector(".cursor")
        cursor.classList.remove("mouse-left")
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
          path="/resume"
          render={() => (
            <Resume blogHover={blogHover} blogUnHover={blogUnHover} />
          )}
        />
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
