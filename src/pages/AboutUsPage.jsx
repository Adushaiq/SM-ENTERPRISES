import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { keyframes } from "@mui/system"; // For animations
import Header from "../components/Header";
import Footer from "../components/Footer";
import awardPic from "../assets/awardpic.jpg"; // Award Image
import vendorPic from "../assets/pic1.jpg"; // Vendor Image
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

// Keyframes for smooth animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const AboutUsPage = () => {

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleGetInTouchClick = () => {
    navigate("/contactus"); // Navigate to /contactus when the button is clicked
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content Section */}
      <Container sx={{ paddingTop: "10px", paddingBottom: "60px" }}>

        {/* Award Section */}
        <Box sx={{ marginBottom: "60px", animation: `${fadeIn} 1s ease-out` }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333", marginBottom: "20px", textAlign: "center" }}>
            Most Efficient Vendor Award
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={10} md={8}>
              <Card sx={{ boxShadow: 6, borderRadius: "12px", overflow: "hidden", transition: "transform 0.3s ease", height: "auto", "&:hover": { transform: "scale(1.05)" } }}>
                <CardMedia
                  component="img"
                  image={awardPic} // Use the imported award image here
                  alt="Most Efficient Vendor Award"
                  sx={{ height: "350px", width: "100%", objectFit: "cover", borderRadius: "12px" }}
                />
                <CardContent sx={{ textAlign: "center", paddingTop: "16px", paddingBottom: "16px", backgroundColor: "#f7f7f7" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
                    Most Efficient Vendor Award by Kohinoor Group, Pune
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Year: 2022-23
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Vendor Image Section */}
        <Box sx={{ marginBottom: "60px", animation: `${fadeIn} 1.2s ease-out` }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333", marginBottom: "20px", textAlign: "center" }}>
            Our Trusted Vendor Partner
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={10} md={8}>
              <Card sx={{ boxShadow: 6, borderRadius: "12px", overflow: "hidden", transition: "transform 0.3s ease", height: "auto", "&:hover": { transform: "scale(1.05)" } }}>
                <CardMedia
                  component="img"
                  image={vendorPic} // Use the imported vendor image here
                  alt="Vendor"
                  sx={{ height: "350px", width: "100%", objectFit: "cover", borderRadius: "12px" }}
                />
                <CardContent sx={{ textAlign: "center", paddingTop: "16px", paddingBottom: "16px", backgroundColor: "#f7f7f7" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
                    Our Trusted Vendor Partner
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We work closely with industry-leading vendors to ensure the highest standards of quality.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Conclusion Section */}
        <Box sx={{ textAlign: "center", marginTop: "40px", animation: `${fadeIn} 1.4s ease-out` }}>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "900px", margin: "0 auto" }}>
            With a focus on durability, reliability, and customer satisfaction, we are committed to providing innovative solutions that stand the test of time. Our products are designed to help you build a better future.
          </Typography>
        </Box>

        {/* Call to Action Button */}
        <Box sx={{ textAlign: "center", marginTop: "40px", animation: `${fadeIn} 1.6s ease-out` }}>
          <Button onClick={handleGetInTouchClick}  variant="contained" color="primary" sx={{ padding: "12px 30px", fontSize: "16px", fontWeight: "bold", borderRadius: "30px", "&:hover": { transform: "scale(1.05)" } }}>
            Get in Touch
          </Button>
        </Box>

      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
