import react from "react";
import { Drawer as MUIDrawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { textAlign } from "@material-ui/system";

const useStyles = makeStyles({
  drawer: {
    width: "25%",
    minWidth: "350px",
    marginTop: "80px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "flex-start;",
    textAlign: "center"
  }
});

const Drawer = () => {
  const classes = useStyles();
  return (
    <MUIDrawer
      variant="permanent"
      anchor="right"
      classes={{ paper: classes.drawer }}
    >
      <h1>Your Cart</h1>
    </MUIDrawer>
  );
};
export default Drawer;
