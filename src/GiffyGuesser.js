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

function GiffyGuesser(props) {
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
    },
    {
      title:
        "Admin Center where you can use our bot to approve new questions and check overall statistics",
      url: "https://i.imgur.com/1mpovGX.png"
    }
  ]

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <h1>Giffy Guesser</h1>
      <h2>Motivation</h2>
      <p>
        Everyone loves a good gif, but have you ever played a multiple choice
        game where you try and pick specific gifts? Thats exactly why we made
        one.
        <br />
        We built an application which automatically generates questions for our
        four game modes:
        <ul>
          <li>
            The Synonym Game - Try and guess the search term that found this Gif
          </li>
          <li>The Dog Breed Game - Try and guess the dog breed in this Gif</li>
          <li>The Movie Game - Try and Guess the movie this Gif comes from</li>
          <li>
            The Matching Game - Given a searched term and 4 Gifs. Try and guess
            the least popular Gif for from this search term
          </li>
        </ul>
      </p>
      <h2>Frameworks</h2>
      <p>
        This app is created with the Rails MVC Framework and uses the Tenor API
        to find Gifs.
      </p>
      <h2>How to use:</h2>
      <p>
        Sign up or log in to an existing account. Click "Choose a Game", then
        pick the type of game you want to play. You can also challenege another
        user who has recently played and play the exact same game as they did to
        try and beat their score and get your name to the top of the
        leaderboards for that game. In your profile you can see your completed
        games as well as your overall statistics in all game types.
      </p>
      <h2>Screenshots</h2>
      <Container
        key="GiffyGuesser"
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
          href="https://github.com/BenBraunstein/GifGame"
          onMouseOver={e => {
            props.blogHover(e)
            e.target.style.color = "orange"
          }}
          onMouseOut={e => {
            props.blogUnHover(e)
            e.target.style.color = ""
          }}
        >
          Github Page
        </a>
      </h2>
      <h2>
        <a
          href="https://giffyguesser.herokuapp.com/"
          onMouseOver={e => {
            props.blogHover(e)
            e.target.style.color = "orange"
          }}
          onMouseOut={e => {
            props.blogUnHover(e)
            e.target.style.color = ""
          }}
        >
          Try it on Heroku!
        </a>
      </h2>
      <br />
    </div>
  )
}

export default GiffyGuesser
