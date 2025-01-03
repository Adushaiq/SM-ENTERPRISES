import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CompanyLogo from "../assets/CompanyLogo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Slide } from "@mui/material";
import { Typography } from "@mui/material";

const pages = ["Home", "Catalog", "Our Customers", "About Us", "Contact Us"];

function Header({ scrollToContact }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={CompanyLogo} alt="Logo" style={{ height: "50px" }} />
          </Box>

          {/* Menu Items */}
          {!isMobile ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                gap: 2,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: "black",
                    fontWeight: "normal",
                    textTransform: "capitalize",
                  }}
                  component={Link}
                  to={page === "Contact Us" ? "/contactus" : page !== "Catalog" ? `/${page.toLowerCase().replace(" ", "")}` : "/catalogue"}
                >
                  {page}
                </Button>
              ))}
            </Box>
          ) : (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleToggleMenu}
              >
                <MenuIcon />
              </IconButton>

              <Slide direction="right" in={isMenuOpen} mountOnEnter unmountOnExit>
                <Box
                  sx={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "70vw",
                    height: "100vh",
                    backgroundColor: "white",
                    zIndex: 1300,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "16px",
                    opacity: isMenuOpen ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  {/* Close Icon */}
                  <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    onClick={handleToggleMenu}
                    sx={{ alignSelf: "flex-end" }}
                  >
                    <CloseIcon />
                  </IconButton>

                  {/* Menu Items */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      marginTop: 2,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={page === "Contact Us" ? undefined : handleToggleMenu}
                        component={Link}
                        to={page === "Contact Us" ? "/contactus" : page !== "Catalog" ? `/${page.toLowerCase().replace(" ", "")}` : "/catalogue"}
                        sx={{
                          color: "black",
                          textTransform: "capitalize",
                          fontWeight: "normal",
                          opacity: isMenuOpen ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            transition: "transform 0.3s ease-in-out",
                            transform: isMenuOpen ? "scale(1)" : "scale(0.9)",
                          }}
                        >
                          {page}
                        </Typography>
                      </Button>
                    ))}
                  </Box>

                  {/* Social Icons for Mobile */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center", // Center align the icons
                      gap: 2, // Add spacing between the icons
                      width: "100%",
                      paddingBottom: "16px", // Add some padding at the bottom
                    }}
                  >
                    <IconButton
                      component="a"
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      sx={{
                        opacity: isMenuOpen ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      sx={{
                        opacity: isMenuOpen ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      <TwitterIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      sx={{
                        opacity: isMenuOpen ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      <InstagramIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Slide>
            </>
          )}

          {/* Social Icons for Desktop */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
