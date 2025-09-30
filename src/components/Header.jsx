import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import CSS file

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawer">
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.href}
            component={Link}
            to={item.href}
            onClick={() => setMobileOpen(false)}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/contact"
          onClick={() => setMobileOpen(false)}
          className="hire-me-btn"
        >
          Hire Me
        </Button>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="sticky" className="header">
        <Toolbar className="toolbar">
          {/* Logo / Title */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className="logo"
          >
            My Portfolio
          </Typography>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <Button
                key={item.href}
                component={Link}
                to={item.href}
                className="nav-link"
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/contact"
              className="hire-me-btn"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            className="mobile-menu-btn"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
