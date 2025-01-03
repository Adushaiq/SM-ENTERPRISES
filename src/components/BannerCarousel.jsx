import { Carousel } from "react-responsive-carousel";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS

const BannerCarousel = ({ bannerImages }) => {

  const isMobile = window.innerWidth <= 768;

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
      dynamicHeight={false}
      transitionTime={1000}
    >
      {bannerImages.map((banner, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            overflow: "hidden",
            height: isMobile ? "60vh" : "calc(100vh - 56px)", // Mobile view: 60vh, Desktop view: 100vh minus 56px
            maxHeight: "100vh", // Ensure it doesn't exceed the viewport
            backgroundColor: "#000", // Fallback color for loading
          }}
        >
          {/* Image with Motion Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <img
              src={banner.src}
              alt={banner.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.6)", // Darkens the image for better text visibility
                objectPosition: "center",
              }}
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))",
              zIndex: 1,
            }}
          ></div>

          {/* Text Overlay - Centered both vertically and horizontally */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            style={{
              position: "relative",
              top:"50%",
              transform: "translate(-50%, -50%)", // Centering both horizontally and vertically
              zIndex: 2,
              textAlign: "center",
              color: "white",
              padding: "0 20px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontFamily: "Playfair Display, serif",
                letterSpacing: "1px",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                marginBottom: "1rem",
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              {banner.caption}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f76c6c",
                "&:hover": { backgroundColor: "#d75858" },
                padding: "10px 20px",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontWeight: "bold",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
              }}
              onClick={() => alert("Button clicked")}
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
