/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Container,
  useMediaQuery,
} from "@material-ui/core";
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import logo from "../../assests/images/Logo.png";
import useStyles from "./style";
import styles from "../../components/Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";
import UseDocTitle from "../../Utilities/UseDocTitle";

const menuItems = [
  {
    menuTitle: "Home",
    pageURL: "/",
    documenttitle: "|Home"
  },
  {
    menuTitle: "Blog",
    pageURL: "/blog",
    documenttitle: "|Blog"
  },
  {
    menuTitle: "Build & Dev.",
    pageURL: "/build-dev",
    documenttitle: "|Build and Dev"
  },
  {
    menuTitle: "Education",
    pageURL: "/education",
    documenttitle: "|Education"
  },
  {
    menuTitle: "About Us",
    pageURL: "/about-us",
    documenttitle: "|About Us"
  },
  {
    menuTitle: "Contact Us",
    pageURL: "/contact-us",
    documenttitle: "|Contact Us"
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState( false );
  const [doctitle, setDocTitle] = UseDocTitle( " " );
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery( theme.breakpoints.down( "sm" ) );

  const handleDrawerToggle = () => {
    setMobileOpen( !mobileOpen );
  };

  const handleButtonClick = pageURL => {
    history.push( pageURL );
    if ( isMobile ) handleDrawerToggle();
  };

  const drawer = (
    <div>
      <List>
        {menuItems.map((text, index) => (
          <ListItem
            onClick={() => handleButtonClick(text.pageURL)}
            button
            key={index}
            className={styles.label}
          >
            <ListItemText primary={text.menuTitle} className={styles.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Container style={{ overflow: "hidden" }}>
        <CssBaseline />
        <AppBar
          position="static"
          elevation="0"
          style={{ background: "transparent" }}
        >
          <Toolbar
            className={` ${classes.iconStyles}`}
            style={{ paddingRight: "0", paddingLeft: "0" }}
          >
            <div
              onClick={() => {
                history.push( "/" );
                setDocTitle( "|Home" )
              }}
            >
              <img src={logo} alt="Logo" className={classes.title} />
            </div>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            ) : (
                <li className={ classes.headerOptions }>
                {menuItems.map((item, index) => (
                  <NavLink
                    to={ item.pageURL }
                    onClick={ () => setDocTitle( item.documenttitle ) }
                    exact
                    activeClassName="active"
                    className={ styles.fontpaddingfornavbar }
                    key={index}
                  >
                    {item.menuTitle}
                  </NavLink>
                ))}
                </li>
            )}
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;

