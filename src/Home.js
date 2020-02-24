import React from "react"
import BlogContainer from "./BlogContainer"
import ProjectContainer from "./ProjectContainer"

function Home(props) {
  return (
    <div>
      <BlogContainer
        blogHover={props.blogHover}
        blogUnHover={props.blogUnHover}
      />
      <ProjectContainer
        blogHover={props.blogHover}
        blogUnHover={props.blogUnHover}
      />
    </div>
  )
}

export default Home
