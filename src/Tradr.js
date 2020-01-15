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
    <Container className={classes.root}>
      <h1>Tradr</h1>
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
  )
}

export default Tradr
