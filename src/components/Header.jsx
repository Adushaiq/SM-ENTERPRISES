import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CompanyLogo from '../assets/CompanyLogo.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const pages = ['Home', 'Catalog', 'Our Customers', 'About Us', 'Contact Us'];

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        paddingBottom: '20px',
        paddingTop: '10px'
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={CompanyLogo} alt="Logo" style={{ height: '50px' }} />
          </Box>

          {/* Menu Items */}
          {!isMobile ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                gap: 2,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: 'black',
                    fontWeight: 'normal',
                    textTransform: 'capitalize',
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          ) : (
            <Box>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleOpenMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                PaperProps={{
                  style: {
                    width: '200px',
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseMenu}>
                    {page}
                  </MenuItem>
                ))}
                {/* Social Icons Below */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    marginTop: 2, // Add spacing between menu items and icons
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
              </Menu>
            </Box>
          )}

          {/* Social Icons for Desktop */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
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
