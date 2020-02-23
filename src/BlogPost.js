import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

function BlogPost(props) {
  const classes = useStyles()
  const [textColor, changeTextColor] = useState("black")

  return (
    <a
      href={props.href}
      onMouseOver={e => {
        props.blogHover(e)
        changeTextColor("blue")
      }}
      onMouseOut={e => {
        props.blogUnHover(e)
        changeTextColor("black")
      }}
    >
      <Card
        style={{
          marginBottom: "40px",
          height: "515px",
          textDecoration: "none"
        }}
        className={classes.card}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent>
            <Typography
              style={{ color: textColor }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {props.title}
            </Typography>
            <Typography
              style={{ color: textColor }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <p style={{ textDecoration: "none", color: "#1976d2" }}>
              {" "}
              Continue Reading on Medium...
            </p>
          </Button>
        </CardActions>
      </Card>
    </a>
  )
}

export default BlogPost
