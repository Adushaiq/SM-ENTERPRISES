import { Container, Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { carouselImages } from "../jsons/carouselImages";

 // Replace these with your actual image URLs

const Carousels = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const images = [...carouselImages, ...carouselImages]; // Duplicate images for seamless loop

  return (
    <Container
      maxWidth="lg" // Reduced width of the container
      sx={{
        mt: 4, // Reduced margin top
        overflow: "hidden", // Ensures the scrolling is confined to the container
        position: "relative",
        marginLeft: "auto", // Margin for cleaner appearance
        marginRight: "auto", // Margin for cleaner appearance
        px: 1, // Reduced horizontal padding
      }}
    >
      <Box
        component={motion.div}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 40, // Slower movement
          ease: "linear",
        }}
        sx={{
          display: "flex",
          gap: 1, // Reduced gap between images
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component={motion.div}
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              transition: { duration: 0.3 },
            }}
            sx={{
              flex: isMobile ? "0 0 70%" : "0 0 20%", // Decreased width for mobile and desktop
              height: isMobile ? "200px" : "250px", // Reduced height for mobile and desktop
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              boxShadow: 4,
              cursor: "pointer",
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Carousels;
