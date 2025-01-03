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

const Rank1Product = ({ R1 }) => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [selectedBrand, setSelectedBrand] = useState("");

  const uniqueBrands = [...new Set(R1.map((product) => product.brand))];
  const filteredProducts = selectedBrand
    ? R1.filter((product) => product.brand === selectedBrand)
    : R1;

  const loadMoreProducts = () => setVisibleProducts((prev) => prev + 6);

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 8,
        mb: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 2, sm: 4 },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mb: 5,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          variant="h3"
          component={motion.div}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: { xs: 3, sm: 0 },
          }}
        >
          Discover Rank 1
        </Typography>

       
      </Box>

      {/* Product Grid */}
      <Grid container spacing={4}>
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
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
                boxShadow: 8,
                borderRadius: 3,
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 12,
                },
                cursor: "pointer",
                background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: "cover",
                  borderBottom: "2px solid #e0e0e0",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
              <CardContent
                sx={{
                  textAlign: "center",
                  padding: 3,
                  backgroundColor: "#f9f9f9",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "primary.dark",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    opacity: 0.9,
                  }}
                >
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Load More Button */}
      {visibleProducts < filteredProducts.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Button
            variant="contained"
            sx={{
              mt: 6,
              px: 5,
              py: 2,
              fontSize: "1rem",
              fontWeight: "bold",
              background: "linear-gradient(to right, #1e3c72, #2a5298)",
              color: "white",
              borderRadius: 3,
              "&:hover": {
                background: "linear-gradient(to right, #2a5298, #1e3c72)",
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

export default Rank1Product;
