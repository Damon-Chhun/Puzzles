import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Scroll from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { updateScroll } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    //border: "solid 5px pink",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    minWidth: 300,
    height: "100%",
    width: "100%",
    padding: 0
  },

  image: {
    outline: "solid 2px black",
    position: "relative",
    width: "48%",
    ["@media (max-width: 1012px)"]: { width: "100%" },

    margin: 10,

    [theme.breakpoints.down("xs")]: {
      maxWidth: "100% !important", // Overrides inline-style
      height: "auto"
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 30%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

function ButtonBases({ collections, updateScroll }) {
  const classes = useStyles();
  const scroll = Scroll.animateScroll;
  console.log(window.innerWidth);

  return (
    <div className={classes.root}>
      {collections.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          component={LinkRouter}
          to="/shop"
          onClick={() => updateScroll(image.title)}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.imageUrl})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateScroll: name => dispatch(updateScroll(name))
});

export default connect(null, mapDispatchToProps)(ButtonBases);
