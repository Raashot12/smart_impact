import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
    color: "#555555",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backGround: "transparent",
  },

  iconStyles: {
    justifyContent: "space-between",
  },

  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },

  title: {
    maxWidth: 200,
    height: 100,
    objectFit: "contain",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 150,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
}));

export default useStyles;
