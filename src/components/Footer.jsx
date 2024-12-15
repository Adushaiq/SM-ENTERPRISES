import { Box, Container, Typography, Link, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CompanyLogo from "../assets/CompanyLogo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F7",
        py: 4,
        mt: 5,
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{
            flexDirection: { xs: "column", md: "row" }, // Stack vertically for mobile
          }}
        >
          {/* Logo and Social Icons Section */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Box sx={{ mb: 3 }}>
              <img
                src={CompanyLogo}
                alt="SM Enterprises Logo"
                style={{ width: "200px", marginBottom: "10px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
                padding: {xs: 0, md:1}
              }}
            >
              <Link href="#" sx={{ color: "#000000", fontSize: "24px" }}>
                <FacebookIcon />
              </Link>
              <Link href="#" sx={{ color: "#000000", fontSize: "24px" }}>
                <InstagramIcon />
              </Link>
              <Link href="#" sx={{ color: "#000000", fontSize: "24px" }}>
                <TwitterIcon />
              </Link>
            </Box>
          </Grid>

          {/* Products and Services Section */}
          <Grid item xs={12} md={4}>
            <Grid
              container
              spacing={2}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, color: "#3342AC" }}
                >
                  Products
                </Typography>
                {["Sand", "Stone", "Cement", "Soft", "Stone"].map(
                  (item, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: "#000",
                      }}
                    >
                      {item}
                    </Typography>
                  )
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, color: "#3342AC" }}
                >
                  Services
                </Typography>
                {["Measurement", "Service", "Product Advice", "Interior Design"].map(
                  (item, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: "#000",
                      }}
                    >
                      {item}
                    </Typography>
                  )
                )}
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Information Section */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 2, color: "#3342AC" }}
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
    </Box>
  );
};

export default Footer;
