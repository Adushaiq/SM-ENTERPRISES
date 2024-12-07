import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OurVisionImage from '../assets/OurVision.png';
import Container from '@mui/material/Container'; // Replace with the actual image path

const OurVision = () => {
  return (
    <Container maxWidth="xl"
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
          src={OurVisionImage}
          alt="Our Vision"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'left', // Focus on the left side of the image for mobile
          }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          position: { xs: 'static', md: 'absolute' }, // Static for mobile, absolute for desktop
          top: { md: '30%' }, // Overlap on desktop
          right: { md: '110px' }, // Move text block to the right
          width: { xs: '90%', md: '500px' }, // Adjust width for mobile
          backgroundColor: '#FFFFFF',
          padding: 3,
          paddingTop: { xs: 0, md: 5 },
          paddingBottom: { xs: 0, md: 5 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: { xs: 0, md: 3 },
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
          Our Vision
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.125rem' }, // Adjust font size for description
          }}
        >
          Offering diverse brands with unbeatable quality, service, and rates. Striving to lead in engineered solutions for construction with a focus on safety and value.
        </Typography>
      </Box>
    </Container>
  );
};

export default OurVision;
