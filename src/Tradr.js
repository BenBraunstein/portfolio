import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import {
  Container,
  GridList,
  GridListTile,
  GridListTileBar
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
  }
}))

function Tradr() {
  const classes = useStyles()

  const tileData = [
    {
      title: "Homepage",
      url:
        "https://camo.githubusercontent.com/7be3493dce65651d501979080183e413e6569666/68747470733a2f2f692e696d6775722e636f6d2f53434e4275394a2e706e67"
    },
    {
      title: "New Item",
      url:
        "https://camo.githubusercontent.com/7a4cb5ba5362d631da2cc5ff4fd20c4c1823bdf1/68747470733a2f2f692e696d6775722e636f6d2f596b64394458622e706e67"
    },
    {
      title: "Outgoing Trade Notification",
      url:
        "https://camo.githubusercontent.com/805dc6cbff42b7c82d5b8868732f448caa36cdf5/68747470733a2f2f692e696d6775722e636f6d2f6f4636466432582e706e67"
    },
    {
      title: "Incoming Trade Notification",
      url:
        "https://camo.githubusercontent.com/3cb4bb8b961910426e60b4b3d5abaf69e9f0edb7/68747470733a2f2f692e696d6775722e636f6d2f4e33446e7362622e706e67"
    },
    {
      title: "Tradr Chat Window",
      url:
        "https://camo.githubusercontent.com/555a8ab634f6ca318a2c6ea4f1e8bec5e8261a30/68747470733a2f2f692e696d6775722e636f6d2f574662303058762e706e67"
    },
    {
      title: "SMS Notification",
      url:
        "https://camo.githubusercontent.com/0435a5e77aecdd9dc2eb30c0c57a02b0abddbac3/68747470733a2f2f692e696d6775722e636f6d2f5955397176446b2e706e67"
    }
  ]

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <h1>Tradr</h1>
      <h2>Motivation</h2>
      <p>
        Everyone has old stuff they don't use anymore, which sits in the corner
        of your room or in the back of a closet somewhere. You don't want to get
        rid of these because they have value. Either that value is to you or to
        someone else, it still exists. Tradr is an app where you could finally
        get these things out of your house (and make your spouse happy) and into
        the hands of someone who will finally put them to good use once again.
        Not only will you rid yourself of these items, you can get something of
        actual value in return.
      </p>
      <h2>Frameworks</h2>
      <p>
        This app is built using React.js, FileStack, Rails 5 API and the Twilio
        API to send SMS messages.
      </p>
      <h2>Features</h2>
      <ul>
        <li>
          Authentication and Authorization using Bcrypt and JSON Web Tokens.
        </li>
        <li>
          Add items you want to trade into your list of items (and add images of
          them using FilesStack)
        </li>
        <li>View, search and filter all available items for trade</li>
        <li>Propose trades with others.</li>
        <li>Integrated notification system to see all pending trades.</li>
        <li>
          New trades use Twilio API to send SMS messages and notify recipient of
          the trade.
        </li>
        <li>Users of the application can chat using Text and Emoji.</li>
      </ul>
      <h2>Screenshots</h2>
      <Container key="Tradr" className={classes.root}>
        {/* Here is the image scroller */}
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.url} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{ root: classes.titleBar, title: classes.title }}
              />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </div>
  )
}

export default Tradr
