import React, { useState } from "react"
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
} from "@material-ui/core"
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons"
import { useTheme } from "@material-ui/core/styles"
import { useHistory } from "react-router-dom"
import logo from "../../assests/images/Logo.png"
import useStyles from "./style"
import styles from "../../components/Navbar/Navbar.module.css"
import { NavLink } from "react-router-dom"

const menuItems = [
  {
    menuTitle: "Home",
    pageURL: "/",
  },
  {
    menuTitle: "Blog",
    pageURL: "/blog",
  },
  {
    menuTitle: "Build & Dev.",
    pageURL: "/build-dev",
  },
  {
    menuTitle: "Education",
    pageURL: "/education",
  },
  {
    menuTitle: "About Us",
    pageURL: "/about-us",
  },
  {
    menuTitle: "Contact Us",
    pageURL: "/contact-us",
  },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const classes = useStyles()
  const history = useHistory()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleButtonClick = pageURL => {
    history.push(pageURL)
    if (isMobile) handleDrawerToggle()
  }

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
  )

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
                history.push("/")
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
              <div className={classes.headerOptions}>
                {menuItems.map((item, index) => (
                  <NavLink
                    to={item.pageURL}
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#4F88C7",
                    }}
                    className={styles.fontpaddingfornavbar}
                    key={index}
                  >
                    {item.menuTitle}
                  </NavLink>
                ))}
              </div>
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
  )
}

export default Navbar
