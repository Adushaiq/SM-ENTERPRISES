import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { customerLogos } from "../jsons/customerLogos";

const OurCustomers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const images = [...customerLogos, ...customerLogos]; // Duplicate images for seamless loop

  // Adjust the speed based on screen size
  const scrollSpeed = isMobile ? "-700%" : "-300%"; // Faster scroll on mobile

  return (
    <Box
      sx={{
        width: "100%",
        mt: 4,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        component={motion.div}
        initial={{ x: 0 }}
        animate={{ x: scrollSpeed }} // Adjusted speed for mobile and desktop
        transition={{
          repeat: Infinity,
          duration: 30, // Keep duration same, but speed is controlled by `x`
          ease: "linear",
        }}
        sx={{
          display: "flex",
          gap: 1,
          width: "60%", // To ensure seamless scrolling
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
              flex: isMobile ? "0 0 60%" : "0 0 20%",
              height: isMobile ? "100px" : "100px",
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              cursor: "pointer",
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OurCustomers;
