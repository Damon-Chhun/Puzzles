import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 240,
    width: 500,
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundPositionX: "25%"
  },
  mainInfo: {
    marginTop: "10px"
  }
});

export default function MuiCard({ info }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={info.imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {info.Department}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {info.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.mainInfo}
          >
            {info.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
