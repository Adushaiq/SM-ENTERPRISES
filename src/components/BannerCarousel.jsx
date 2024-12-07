import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS

const BannerCarousel = ({ bannerImages }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={2000}
      showStatus={false}
      swipeable
      emulateTouch
      stopOnHover
    >
      {bannerImages.map((banner, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <motion.img
            src={banner.src}
            alt={banner.alt}
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth fade-in and scale effect
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with text hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Fade and move the text into place
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }} // Timing for the text to appear after the image
          >
            <Typography
              variant="h5"
              sx={{
                position: 'absolute',
                top: '80%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Subtle shadow for readability
                opacity: 0, // Initially hidden
                transition: 'opacity 0.5s ease-in-out', // Smooth fade-in transition
                '&:hover': {
                  opacity: 1, // Show caption on hover
                },
              }}
            >
              {banner.caption}
            </Typography>
          </motion.div>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
