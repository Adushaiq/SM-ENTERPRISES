import { Carousel } from 'react-responsive-carousel';
import { Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS

const BannerCarousel = ({ bannerImages }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={3000}
      showStatus={false}
      swipeable
      emulateTouch
      stopOnHover
      dynamicHeight={false} // Keep consistent height for carousel items
      transitionTime={1000} // Smooth transition between images
    >
      {bannerImages.map((banner, index) => (
        <div key={index} style={{ position: 'relative', overflow: 'hidden' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={banner.src}
              alt={banner.alt}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                transition: 'transform 1s ease-out',
                filter: 'brightness(0.7)', // Dim the image for better text visibility
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} // Zoom on hover
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
              zIndex: 1,
            }}
          ></div>

          {/* Text Overlay with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '70%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontFamily: 'Playfair Display, serif',
                letterSpacing: '1px',
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
                transition: 'transform 0.5s ease',
              }}
            >
              {banner.caption}
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                backgroundColor: '#f76c6c',
                '&:hover': { backgroundColor: '#d75858' },
                padding: '8px 16px',
                fontWeight: 'bold',
                borderRadius: 5,
              }}
              onClick={() => alert('Button clicked')}
            >
              Explore Now
            </Button>
          </motion.div>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;

