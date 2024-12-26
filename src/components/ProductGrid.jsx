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
  const [visibleProducts, setVisibleProducts] = useState(6); // Initially load 5 products
  const [selectedBrand, setSelectedBrand] = useState(""); // Filter by brand

  // Extract unique brand names for the filter dropdown
  const uniqueBrands = [...new Set(products.map((product) => product.brand))];

  // Filter products based on the selected brand
  const filteredProducts = selectedBrand
    ? products.filter((product) => product.brand === selectedBrand)
    : products;

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 6); // Increment by 5 each time the button is clicked
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
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
          }}
        >
          Explore Our Products
        </Typography>

        {/* Filter Dropdown */}
        <FormControl
            sx={{
                minWidth: 200,
            }}
            >
            <InputLabel
                id="brand-filter-label"
                shrink={selectedBrand !== ""}
            >
                Filter by Brand
            </InputLabel>
            <Select
                labelId="brand-filter-label"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
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

      <Grid container spacing={3}>
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <Grid
            item
            xs={6} // 2 products per row on small screens (xs)
            sm={6} // 2 products per row on small screens (sm)
            md={4} // 3 products per row on medium screens (md)
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
                boxShadow: 4,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent
                sx={{
                  textAlign: "center",
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.8,
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
              px: 2,
              py: 1.5,
              fontSize: "0.7rem",
              fontWeight: "bold",
              backgroundColor: "black", // Set the background color to black
              color: "white", // Set the text color to white
              "&:hover": {
                backgroundColor: "gray", // Optional: Change background color on hover
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
