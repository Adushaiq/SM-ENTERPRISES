import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OurHistoryImage from '../assets/OurHistory.png'; // Replace with the actual image path

const OurHistory = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        mt: 6,
        mb: 8,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on mobile, horizontally on larger screens
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: { xs: '100%', md: '80%' },
          height: { xs: '300px', md: 'auto' }, // Ensure minimum height for mobile
          overflow: 'hidden',
          mb: { xs: 3, md: 0 }, // Add bottom margin for mobile layout
        }}
      >
        <img
          src={OurHistoryImage}
          alt="Our History"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          position: { xs: 'static', md: 'absolute' }, // Static for mobile, absolute for desktop
          top: { md: '30%' }, // Overlap on desktop
          left: { md: '110px' },
          width: { xs: '90%', md: '500px' }, // Adjust width for mobile
          backgroundColor: '#FFFFFF',
          padding: 3,
          paddingTop: {xs: 0, md:5},
          paddingBottom: {xs: 0, md:5},
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: {xs: 0, md: 3},
          textAlign: { xs: 'center', md: 'left' }, // Center align text for mobile
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '1.5rem', md: '2rem' }, // Responsive font size
          }}
        >
          Our Journey Begins
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.125rem' }, // Adjust font size for description
          }}
        >
          We have been committed to excellence and innovation for over 20 years, constantly evolving to meet the needs of our customers and the market.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurHistory;
