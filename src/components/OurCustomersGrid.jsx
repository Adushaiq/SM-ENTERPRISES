import React from "react";
import { customerLogos } from "../jsons/customerLogos"; // Adjust the path as needed
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from "@mui/material";

const OurCustomersGrid = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        {/* Headline */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "Bold" }}>
          Proud Partnerships
        </Typography>
        {/* Short Description */}
        <Typography variant="body1" color="textSecondary" gutterBottom>
          We are proud to have collaborated with a wide range of esteemed brands.
        </Typography>

        {/* Logos Grid */}
        <Grid container spacing={3} justifyContent="center" sx={{ marginTop: "20px" }}>
          {customerLogos.map((logo, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Card
                sx={{
                  boxShadow: 2,
                  borderRadius: "8px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "120px", // Set consistent height for all cards
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
