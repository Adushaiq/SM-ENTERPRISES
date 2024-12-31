import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OurHistoryImage from '../assets/OurHistory.png'; // Replace with the actual image path
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';

const OurHistory = () => {
  const [inView, setInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Set screen size based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Set isDesktop to true for larger screens (desktop)
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // IntersectionObserver to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Trigger animations when section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const section = document.getElementById('our-history-section');
    if (section) {
      observer.observe(section); // Observe the section
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Clean up observer
      }
    };
  }, []);

  return (
    <Container
      id="our-history-section"
      maxWidth="xl"
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
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)', // Slide up when in view
        transition: 'opacity 0.6s ease, transform 0.6s ease', // Smooth transition for fade-in and slide
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: { xs: '100%', md: '80%' },
          height: { xs: '300px', md: 'auto' },
          overflow: 'hidden',
          mb: { xs: 3, md: 0 },
          opacity: inView ? 1 : 0,
          transform: inView ? 'scale(1)' : 'scale(0.9)', // Zoom-in effect
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          '&:hover': {
            transform: 'scale(1.05)', // Zoom-in effect on hover
            transition: 'transform 0.3s ease', // Smooth transition
          },
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
          position: { xs: 'static', md: 'absolute' },
          top: { md: '25%' },
          left: { md: '110px' },
          width: { xs: '90%', md: '500px' },
          backgroundColor: '#FFFFFF',
          padding: 3,
          paddingTop: { xs: 0, md: 5 },
          paddingBottom: { xs: 0, md: 5 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: { xs: 0, md: 3 },
          textAlign: { xs: 'center', md: 'left' },
          opacity: inView ? 1 : 0,
          transform: inView
            ? isDesktop
              ? 'translateX(10px)' // Slide from left to right on desktop
              : 'translateY(0)' // Fade-in on mobile
            : isDesktop
            ? 'translateX(-30px)' // Start off screen to the left on desktop
            : 'translateY(30px)', // Start from below on mobile
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          '&:hover': {
            transform: isDesktop ? 'translateX(-15px)' : 'translateY(-5px)', // Slight shift on hover
            transition: 'transform 0.3s ease',
            boxShadow: 6, // Add shadow on hover
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '1.5rem', md: '2.5rem' },
            '&:hover': {
              color: '#1976d2', // Change color on hover
              transition: 'color 0.3s ease',
            },
          }}
        >
          Our History
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            '&:hover': {
              color: '#1976d2', // Change color on hover
              transition: 'color 0.3s ease',
            },
          }}
        >
          S M Enterprises, co-founders of KENT, has provided quality construction materials and hardware since 1998, serving businesses and institutions.
        </Typography>
      </Box>
    </Container>
  );
};

export default OurHistory;
