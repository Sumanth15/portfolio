import React, { useState, useEffect } from "react";
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
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar 
        position="sticky" 
        className={`header ${scrolled ? 'scrolled' : ''}`}
        elevation={scrolled ? 2 : 0}
      >
        <Container maxWidth="xl">
          <Toolbar className="toolbar" disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              className="logo"
            >
              {/* <span className="logo-text">My</span> */}
              <span className="logo-accent">Arresto Momentum! 🧙🏻 </span>
            </Typography>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                className="hire-me-btn"
              >
                Hire Me
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              className="mobile-menu-btn"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="mobile-drawer"
        PaperProps={{
          className: "drawer-paper"
        }}
      >
        <div className="drawer-header">
          <Typography variant="h6" className="drawer-title">
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle} className="drawer-close">
            <CloseIcon />
          </IconButton>
        </div>
        
        <List className="drawer-list">
          {navItems.map((item) => (
            <ListItem
              button
              key={item.href}
              component={Link}
              to={item.href}
              onClick={handleDrawerToggle}
              className={`drawer-item ${isActive(item.href) ? 'active' : ''}`}
            >
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  className: "drawer-item-text"
                }}
              />
            </ListItem>
          ))}
        </List>

        <div className="drawer-footer">
          <Button
            variant="contained"
            component={Link}
            to="/contact"
            onClick={handleDrawerToggle}
            className="drawer-hire-btn"
            fullWidth
          >
            Hire Me
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Header;