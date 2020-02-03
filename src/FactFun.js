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

function FactFun() {
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
      title: "Homepage",
      url:
        "https://camo.githubusercontent.com/cc0e604a598085aad3d6077e157045e161e301ae/68747470733a2f2f692e696d6775722e636f6d2f6d4363424f5a5a2e706e67"
    },
    {
      title: "Matching Game Question",
      url:
        "https://camo.githubusercontent.com/be259047b69025141440ceab0c878c269512d98c/68747470733a2f2f692e696d6775722e636f6d2f546d4b586e6b452e706e67"
    },
    {
      title: "Incorrectly Answered Movie Question",
      url:
        "https://camo.githubusercontent.com/354a1ac43df9e67fae92794d935c4ec4bb1809de/68747470733a2f2f692e696d6775722e636f6d2f33434e397043752e706e67"
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
      <Container key="FactFun" className={classes.root}>
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
                  console.log("Variable", currentImage)
                  console.log("Clicked", e.target.alt)
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
        <a href="https://github.com/BenBraunstein/Fact-Fun">Front-End Github</a>{" "}
        |{" "}
        <a href="https://github.com/nicholasstano/Fact-Fun-Backend">
          Back-End Github
        </a>
      </h2>
      <h2>
        <a href="https://benbraunstein.github.io/Fact-Fun/test.html">
          Try it on GitHub Pages!
        </a>
      </h2>
      <br />
    </div>
  )
}

export default FactFun
