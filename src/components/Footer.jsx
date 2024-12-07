import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F7F7F7',
        color: 'black',
        py: 4, // Padding on top and bottom
        mt: 5, // Margin on top to separate from main content
        boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for a clean effect
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>

          {/* Center Section with Links */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Link href="#" sx={{ color: 'black', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Home
            </Link>
            <Link href="#" sx={{ color: 'black', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Services
            </Link>
            <Link href="#" sx={{ color: 'black', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Contact
            </Link>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" sx={{ color: 'black' }}>
                <i className="fab fa-facebook-f"></i> {/* You can use any icon library */}
              </Link>
              <Link href="#" sx={{ color: 'black' }}>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" sx={{ color: 'black' }}>
                <i className="fab fa-instagram"></i>
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
