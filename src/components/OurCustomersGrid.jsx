import React, { useEffect, useState } from "react";
import { customerLogos } from "../jsons/customerLogos"; // Adjust the path as needed
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from "@mui/material";

const OurCustomersGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the visibility transition after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay to allow for page load before transition starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container sx={{ padding: "10px 20px" }}>
      <Box
        sx={{
          textAlign: "center",
          padding: "20px",
          opacity: isVisible ? 1 : 0, // Transition opacity from 0 to 1
          transform: isVisible ? "translateY(0)" : "translateY(30px)", // Start from below
          transition: "opacity 1s ease, transform 1s ease", // Smooth transition for opacity and transform
        }}
      >
        {/* Headline */}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#333",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            marginBottom: "16px",
          }}
        >
          Proud Partnerships
        </Typography>

        {/* Short Description */}
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            marginBottom: "30px",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            lineHeight: 1.5,
          }}
        >
          We are proud to have collaborated with a wide range of esteemed brands.
        </Typography>

        {/* Logos Grid */}
        <Grid container spacing={3} justifyContent="center" sx={{ marginTop: "20px" }}>
          {customerLogos.map((logo, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: "12px", // Rounded corners for the cards
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "120px", // Set consistent height for all cards
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)", // Slight zoom effect on hover
                    boxShadow: 6, // Deeper shadow on hover
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {/* Display Placeholder if No Logo */}
                  {logo ? (
                    <CardMedia
                      component="img"
                      image={logo}
                      alt={`Customer Logo ${index + 1}`}
                      sx={{
                        maxHeight: "80px",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      Logo {index + 1}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default OurCustomersGrid;
