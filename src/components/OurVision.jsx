import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OurVisionImage from '../assets/OurVision.png'; // Replace with the actual image path
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';

const OurVision = () => {
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

    const section = document.getElementById('our-vision-section');
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
      id="our-vision-section"
      maxWidth="xl"
      sx={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        mt: 6,
        mb: 8,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)', // Slide up when in view
        transition: 'opacity 0.6s ease, transform 0.6s ease',
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
          position: { xs: 'static', md: 'absolute' },
          top: { md: '25%' },
          right: { md: '110px' },
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
              ? 'translateX(-10px)' // Slide from left to right on desktop
              : 'translateY(0)' // Fade-in on mobile
            : isDesktop
            ? 'translateX(0px)' // Start off screen to the left on desktop
            : 'translateY(0px)', // Start from below on mobile
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '1.5rem', md: '2.8rem' },
          }}
        >
          Our Vision
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          Offering diverse brands with unbeatable quality, service, and rates. Striving to lead in engineered solutions for construction with a focus on safety and value.
        </Typography>
      </Box>
    </Container>
  );
};

export default OurVision;
