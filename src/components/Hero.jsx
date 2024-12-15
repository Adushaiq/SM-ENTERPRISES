import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import HeroImage from '../assets/HeroImage.png';

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
    <Container maxWidth="xl"
      sx={{
        flexGrow: 1,
        backgroundColor: '#ffffff',
        height: 'auto',
        padding: 4,
        paddingTop: { xs: 4, md: 0 },
        paddingRight: { xs: 4, md: 0 },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
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
          }}
        >
          <motion.div variants={textVariant} initial="hidden" animate="visible">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2rem', md: '4rem' },
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
              }}
            >
              Premium hardware and construction solutions built for durability and innovation.
            </Typography>
          </motion.div>

          <motion.div variants={buttonVariant} initial="hidden" animate="visible">
            <Button
              variant="contained"
              sx={{
                mb: 4,
                backgroundColor: '#3342AC',
                color: 'white',
                width: '200px',
                height: '60px',
                '&:hover': {
                  backgroundColor: '#2A3891',
                },
                borderRadius: '10px',
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
                mt: 2,
                // flexWrap: 'wrap',
              }}
            >
              {/* Products */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: {xs:1, md:2},
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'normal',
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  500+
                </Typography>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'light', fontSize: { xs: '0.75rem', md: '1rem' } }}>
                    PRODUCTS
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'light', fontSize: { xs: '0.75rem', md: '1rem' } }}>
                    DELIVERED
                  </Typography>
                </Box>
              </Box>
              {/* Clients */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: {xs:1, md:2},
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'normal',
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  700+
                </Typography>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'light',fontSize: { xs: '0.75rem', md: '1rem' }}}>
                    TRUSTED
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'light',fontSize: { xs: '0.75rem', md: '1rem' } }}>
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
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
