import { Container, Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { carouselImages } from "../jsons/carouselImages"; // Replace with your actual image URLs

const Carousels = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const images = [...carouselImages, ...carouselImages]; // Duplicate images for seamless loop

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 6, // Increased margin top for balance
        overflow: "hidden",
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        px: 3, // Adjusted horizontal padding
      }}
    >
      <Box
        component={motion.div}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        sx={{
          display: "flex",
          gap: 2, // Increased gap for a cleaner layout
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component={motion.div}
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              transition: { duration: 0.2 },
            }}
            sx={{
              flex: isMobile ? "0 0 80%" : "0 0 22%", // Adjusted width for more balanced mobile/desktop layout
              height: isMobile ? "220px" : "350px", // Adjusted height
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 3, // Slightly rounded corners
              boxShadow: 6, // Increased shadow for better depth
              cursor: "pointer",
              position: "relative", // For overlay positioning
              transition: "transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease",
              overflow: "hidden",
            }}
          >
            {/* Gradient overlay for better text visibility */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))",
                borderRadius: 3,
                zIndex: 1,
              }}
            />
            {/* Optional caption/text on hover */}
            <Box
              sx={{
                position: "absolute",
                bottom: "20%",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                fontSize: isMobile ? "20px" : "24px", // Adjusted font size
                fontWeight: "bold",
                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
                opacity: 0,
                transition: "opacity 0.4s ease",
                zIndex: 2,
                textAlign: "center",
                padding: "0 20px",
                "&:hover": {
                  opacity: 1, // Show caption on hover
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Image Caption
              </motion.div>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Carousels;
