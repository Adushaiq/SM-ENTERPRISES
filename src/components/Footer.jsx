import { Box, Container, Typography, Link, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CompanyLogo from "../assets/CompanyLogo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F7", // Retaining original background color
        py: 4, // Increased padding for better spacing
        mt: 5,
        boxShadow: "0px -2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{
            flexDirection: { xs: "column", md: "row" }, // Stack vertically for mobile
            justifyContent: "space-between", // Space out the sections
            alignItems: {xs: "center", md: "start"}, // Center content in mobile view
          }}
        >
          {/* Logo and Social Icons Section */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 4, md: 0 } }}
          >
            <Box sx={{ mb: 3 }}>
              <img
                src={CompanyLogo}
                alt="SM Enterprises Logo"
                style={{ width: "220px", marginBottom: "10px", borderRadius: "10px" }} // Rounded corners for logo
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
                padding: { xs: 0, md: 1 },
              }}
            >
              <Link
                href="#"
                sx={{
                  color: "#000000", // Dark color for the icons
                  fontSize: "26px",
                  "&:hover": { color: "#3b5998" }, // Hover effect for Facebook icon
                }}
              >
                <FacebookIcon />
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#000000", // Dark color for the icons
                  fontSize: "26px",
                  "&:hover": { color: "#E4405F" }, // Hover effect for Instagram icon
                }}
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#000000", // Dark color for the icons
                  fontSize: "26px",
                  "&:hover": { color: "#1DA1F2" }, // Hover effect for Twitter icon
                }}
              >
                <TwitterIcon />
              </Link>
            </Box>
          </Grid>

          {/* Products and Services Section */}
          <Grid item xs={12} md={4}>
            <Grid
              container
              spacing={2}
              sx={{ textAlign: { xs: "center", md: "left" }, marginBottom: "2rem" }}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, color: "#3342AC", textTransform: "uppercase" }}
                >
                  Products
                </Typography>
                {["Sand", "Stone", "Cement", "Soft", "Stone"].map((item, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "#000", // Dark color for text
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, color: "#3342AC", textTransform: "uppercase" }}
                >
                  Services
                </Typography>
                {["Measurement", "Service", "Product Advice", "Interior Design"].map((item, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "#000", // Dark color for text
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Information Section */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 }, // Added bottom margin for consistency
              paddingTop: 0
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                mb: 2, // Adjusted margin for heading
                color: "#3342AC",
                textTransform: "uppercase",
              }}
            >
              Contact Information
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: "#000" }}>
              <Link
                href="tel:02024452563"
                sx={{
                  color: "#000000",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Tel: 020-24452563
              </Link>{" "}
              /{" "}
              <Link
                href="tel:02024488374"
                sx={{
                  color: "#000000",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                020-24488374
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: "#000" }}>
              Address: Shop No 4, Dharmshi Landmark,
              <br />
              Opp Vinay High School,
              <br />
              Bhawani Peth, Pune 411042
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Divider for better visual separation */}
      <Box
        sx={{
          borderTop: "1px solid #D1D1D1",
          marginTop: "3rem",
          marginBottom: "1rem",
        }}
      />

      {/* Copyright Section */}
      <Box sx={{ textAlign: "center", color: "#000" }}>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          © {new Date().getFullYear()} SM Enterprises. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
