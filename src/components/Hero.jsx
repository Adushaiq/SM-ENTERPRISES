import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import HeroImage from '../assets/HeroImage.png'; // Assuming HeroImage is in the assets folder

const Hero = () => {
  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  const statsVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.7 } },
  };

  const imageVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        flexGrow: 1,
        backgroundColor: '#ffffff',
        height: 'auto',
        padding: 4,
        paddingTop: { xs: 4, md: 0 },
        paddingRight: { xs: 4, md: 0 },
        position: 'relative',  // To add overlay effect later
      }}
    >
      {/* Background Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)', // Dark overlay for contrast
          zIndex: 1,
        }}
      ></Box>

      <Grid
        container
        spacing={2}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative', // Make sure content is above the overlay
          zIndex: 2,
        }}
      >
        {/* Left Side (Text Content) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            padding: 4,
            paddingRight: { xs: 0, md: 4 },
            zIndex: 2,
          }}
        >
          <motion.div variants={textVariant} initial="hidden" animate="visible">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2rem', md: '4rem' },
                color: '#fff', // White text to contrast with the dark background
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)', // Text shadow for better readability
              }}
            >
              Building the Future with Quality & Innovation Since 1998
            </Typography>
          </motion.div>

          <motion.div variants={textVariant} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: '#fff', // White text
                textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)', // Added text shadow for readability
              }}
            >
              Premium hardware and construction solutions built for durability and innovation.
            </Typography>
          </motion.div>

          {/* CTA Button with scaling effect */}
          <motion.div
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }} // Scale up the button on hover
            whileTap={{ scale: 0.95 }} // Slight shrink effect on click
          >
            <Button
              variant="contained"
              sx={{
                mb: 0,
                backgroundColor: '#3342AC',
                color: 'white',
                width: '200px',
                height: '60px',
                '&:hover': {
                  backgroundColor: '#2A3891',
                },
                borderRadius: '10px',
                zIndex: 2,
              }}
            >
              CALL FOR INQUIRY
            </Button>
          </motion.div>

          <motion.div variants={statsVariant} initial="hidden" animate="visible">
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 5,
                mt: 6,
              }}
            >
              {/* Products */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: { xs: 1, md: 2 },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'normal',
                    fontSize: { xs: '2rem', md: '3rem' },
                    color: '#fff',
                  }}
                >
                  500+
                </Typography>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'light', fontSize: { xs: '0.75rem', md: '1rem' }, color: '#fff' }}>
                    PRODUCTS
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'light', fontSize: { xs: '0.75rem', md: '1rem' }, color: '#fff' }}>
                    DELIVERED
                  </Typography>
                </Box>
              </Box>
              {/* Clients */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: { xs: 1, md: 2 },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'normal',
                    fontSize: { xs: '2rem', md: '3rem' },
                    color: '#fff',
                  }}
                >
                  700+
                </Typography>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'light', fontSize: { xs: '0.75rem', md: '1rem' }, color: '#fff' }}>
                    TRUSTED
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'light', fontSize: { xs: '0.75rem', md: '1rem' }, color: '#fff' }}>
                    CLIENTS
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Side (Image Content) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            zIndex: 2,
          }}
        >
          <motion.img
            src={HeroImage}
            alt="Hero Section"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '15px', // Smooth the edges of the image
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
