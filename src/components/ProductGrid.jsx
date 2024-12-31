import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  Select,
  MenuItem,
  Box,
  InputLabel,
  FormControl,
} from "@mui/material";
import { motion } from "framer-motion";

const ProductGrid = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState(6); // Initially load 6 products
  const [selectedBrand, setSelectedBrand] = useState(""); // Filter by brand

  // Extract unique brand names for the filter dropdown
  const uniqueBrands = [...new Set(products.map((product) => product.brand))];

  // Filter products based on the selected brand
  const filteredProducts = selectedBrand
    ? products.filter((product) => product.brand === selectedBrand)
    : products;

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 6); // Increment by 6 each time the button is clicked
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 6,
        mb: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingX: { xs: 2, sm: 4 }, // Responsively adjusting padding
      }}
    >
      {/* Title and Filter Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mb: 4,
          flexDirection: { xs: "column", sm: "row" }, // Stack elements on small screens
        }}
      >
        <Typography
          variant="h4"
          component={motion.div}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            marginBottom: { xs: 2, sm: 0 }, // Margin for mobile responsiveness
          }}
        >
          Explore Our Products
        </Typography>

        {/* Filter Dropdown */}
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="brand-filter-label" shrink={selectedBrand !== ""}>
            Filter by Brand
          </InputLabel>
          <Select
            labelId="brand-filter-label"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <MenuItem value="">
              <em>All Brands</em>
            </MenuItem>
            {uniqueBrands.map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={4}>
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <Grid
            item
            xs={12} sm={6} md={4} lg={3} // Responsively adjust grid item sizes
            key={product.id}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: 6,
                borderRadius: 2,
                overflow: "hidden", // To avoid image overflow
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 8,
                },
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: "cover", // Ensure image covers the area
                  borderBottom: "2px solid #f0f0f0", // Slight border between image and content
                }}
              />
              <CardContent
                sx={{
                  textAlign: "center",
                  flexGrow: 1,
                  padding: 2,
                  backgroundColor: "white",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 1,
                    color: "primary.dark",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    opacity: 0.85,
                    marginBottom: 2,
                  }}
                >
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {visibleProducts < filteredProducts.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Button
            variant="contained"
            sx={{
              mt: 4,
              px: 4,
              py: 2,
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "black",
              color: "white",
              borderRadius: 3,
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
            onClick={loadMoreProducts}
          >
            Load More Products
          </Button>
        </motion.div>
      )}
    </Container>
  );
};

export default ProductGrid;
