import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  Modal,
  Backdrop,
  Fade
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: "white"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

function FactFun(props) {
  const classes = useStyles()
  const [imageModal, changeImageModal] = useState(false)
  const [currentImage, changeCurrentImage] = useState({})

  const handleOpen = () => {
    changeImageModal(true)
  }

  const handleClose = () => {
    changeImageModal(false)
  }

  const tileData = [
    {
      title: "Example Question",
      url: "https://i.imgur.com/u2RqCm1.png"
    },
    {
      title: "Leaderboards",
      url: "https://i.imgur.com/6tBcEdt.png"
    },
    {
      title: "Correct Answer",
      url: "https://i.imgur.com/5vJ6RJ8.png"
    },
    {
      title: "Incorrect Answer",
      url: "https://i.imgur.com/XJgvGHJ.png"
    },
    {
      title: "Score Tracking",
      url: "https://i.imgur.com/fi5DwAm.png"
    }
  ]

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <h1>Fact Fun</h1>
      <h2>Motivation</h2>
      <p>
        Quite simply, whe discovered the CIA World Factbook API and thought,
        "how can we not use this!?" It was extra fun too, because as part of our
        entrance exam we had to pass an infamous exercise known as
        "Hashketball", and the JSON data was so deeply nested this felt like
        "Hashketball 2!"
      </p>
      <h2>Frameworks</h2>
      <p>
        This app uses vanilla Javascript with a Rails API backend to track user
        scores.
      </p>
      <h2>How to use:</h2>
      <p>
        When you've opened test.html, either sign up or log in. Once you're
        logged in, you can play the game! Read over the facts presented, and
        click the one of four presented countries you believe is the country
        being described. If you're right, you get points! If not, you don't!
        Either way, it's fun!
      </p>
      <h2>Screenshots</h2>
      <Container
        key="FactFun"
        className={classes.root}
        onMouseOver={e => {
          props.blogHover(e)
        }}
        onMouseOut={e => {
          props.blogUnHover(e)
        }}
      >
        {/* Here is the image scroller */}
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img
                src={tile.url}
                alt={tile.title}
                onClick={e => {
                  changeCurrentImage({
                    title: e.target.alt,
                    href: e.target.src
                  })
                  handleOpen()
                }}
              />
              <GridListTileBar
                title={tile.title}
                classes={{ root: classes.titleBar, title: classes.title }}
              />
            </GridListTile>
          ))}
        </GridList>
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={imageModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={imageModal}>
          <div className={classes.paper}>
            <img
              style={{ maxWidth: "70%" }}
              src={currentImage.href}
              alt={currentImage.alt}
            />
          </div>
        </Fade>
      </Modal>
      <h2>
        <a
          href="https://github.com/BenBraunstein/Fact-Fun"
          onMouseOver={e => {
            props.blogHover(e)
            e.target.style.color = "orange"
          }}
          onMouseOut={e => {
            props.blogUnHover(e)
            e.target.style.color = ""
          }}
        >
          Front-End Github
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/nicholasstano/Fact-Fun-Backend"
          onMouseOver={e => {
            props.blogHover(e)
            e.target.style.color = "orange"
          }}
          onMouseOut={e => {
            props.blogUnHover(e)
            e.target.style.color = ""
          }}
        >
          Back-End Github
        </a>
      </h2>
      <h2>
        <a
          href="https://benbraunstein.github.io/Fact-Fun/test.html"
          onMouseOver={e => {
            props.blogHover(e)
            e.target.style.color = "orange"
          }}
          onMouseOut={e => {
            props.blogUnHover(e)
            e.target.style.color = ""
          }}
        >
          Try it on GitHub Pages!
        </a>
      </h2>
      <br />
    </div>
  )
}

export default FactFun
