import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Card, CardMedia } from "@mui/material";
import WaterProofing from "../assets/Waterproofing.png";
import TileAdhesive from "../assets/Tileadhesive.png";
import AntiRust from "../assets/Antirust.png";
import Kitchen from "../assets/Kitchen.png";

const featuredProducts = [
  {
    title: "Waterproofing Chemicals",
    description: "Protects spaces from water damage.",
    image: WaterProofing,
  },
  {
    title: "Tile Adhesives",
    description: "Strong and reliable tile bonds.",
    image: TileAdhesive,
  },
  {
    title: "Anti Rust Paint",
    description: "Shields metal from rust.",
    image: AntiRust,
  },
  {
    title: "Kitchen Interior",
    description: "Stylish and functional kitchens.",
    image: Kitchen,
  },
];

const FeaturedProducts = () => {
  const [inView, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          setHasBeenInView(true); // Mark as viewed once
        } else {
          setInView(false);
        }
      },
      { threshold: 0.4 }
    );

    const wrapper = document.getElementById("featured-products-wrapper");
    if (wrapper) {
      observer.observe(wrapper);
    }

    return () => {
      if (wrapper) {
        observer.unobserve(wrapper);
      }
    };
  }, []);

  return (
    <Box id="featured-products-wrapper" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 2, pt: { xs: 2, md: 6 } }}
      >
        Featured Products
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 4, px: 4 }}>
        Explore our top-quality, best-selling products for every construction
        need.
      </Typography>
      {/* Desktop View */}
      <Box
        id="featured-products-section"
        sx={{
          display: { xs: "none", md: "block" },
          opacity: hasBeenInView ? 1 : 0,
          transform: hasBeenInView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <Grid container spacing={2} justifyContent="center" maxWidth="lg" mx="auto">
          {/* First Column */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                position: "relative",
                height: "100%",
                overflow: "visible",
                borderRadius: 3,
                boxShadow: 0,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="div"
                image={featuredProducts[0].image}
                sx={{
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px", // Added borderRadius for rounded borders
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "10%",
                  width: "70%",
                  backgroundColor: "black",
                  color: "white",
                  p: 2,
                  borderRadius: 1,
                }}
              >
                <Typography variant="h6">{featuredProducts[0].title}</Typography>
                <Typography variant="body2">{featuredProducts[0].description}</Typography>
              </Box>
            </Card>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                position: "relative",
                height: "100%",
                overflow: "visible",
                borderRadius: 3,
                boxShadow: 0,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="div"
                image={featuredProducts[1].image}
                sx={{
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px", // Added borderRadius for rounded borders
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "10%",
                  width: "70%",
                  backgroundColor: "black",
                  color: "white",
                  p: 2,
                  borderRadius: 1,
                }}
              >
                <Typography variant="h6">{featuredProducts[1].title}</Typography>
                <Typography variant="body2">{featuredProducts[1].description}</Typography>
              </Box>
            </Card>
          </Grid>

          {/* Third Column */}
          <Grid item xs={12} md={4}>
            <Grid container direction="column" spacing={6}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    position: "relative",
                    overflow: "visible",
                    borderRadius: 3,
                    height: 300,
                    boxShadow: 0,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardMedia
                    component="div"
                    image={featuredProducts[2].image}
                    sx={{
                      height: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px", // Added borderRadius for rounded borders
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-30px",
                      left: "10%",
                      width: "70%",
                      backgroundColor: "black",
                      color: "white",
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="h6">{featuredProducts[2].title}</Typography>
                    <Typography variant="body2">{featuredProducts[2].description}</Typography>
                  </Box>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card
                  sx={{
                    position: "relative",
                    overflow: "visible",
                    borderRadius: 3,
                    height: 300,
                    boxShadow: 0,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardMedia
                    component="div"
                    image={featuredProducts[3].image}
                    sx={{
                      height: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px", // Added borderRadius for rounded borders
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-30px",
                      left: "10%",
                      width: "70%",
                      backgroundColor: "black",
                      color: "white",
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="h6">{featuredProducts[3].title}</Typography>
                    <Typography variant="body2">{featuredProducts[3].description}</Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Mobile View */}
      <Grid
        container
        justifyContent="center"
        maxWidth="lg"
        mx="auto"
        sx={{
          padding:"15px",
          display: { xs: "block", md: "none" },
          opacity: hasBeenInView ? 1 : 1,
          transform: hasBeenInView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {featuredProducts.map((product, index) => (
          <Card
            key={index}
            sx={{
              
              position: "relative",
              marginBottom: 8,
              borderRadius: 3,
              boxShadow: 0,
              overflow: "visible",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 3,
              },
            }}
          >
            <CardMedia
              component="div"
              image={product.image}
              sx={{
                height: "400px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px", // Added borderRadius for rounded borders
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "-30px",
                left: "9%",
                width: "70%",
                backgroundColor: "black",
                color: "white",
                p: 2,
                borderRadius: 1,
              }}
            >
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
