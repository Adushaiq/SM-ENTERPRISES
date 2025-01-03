import React, { useState } from "react";
import {
  CssBaseline,
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";
import ProductGrid from "../components/ProductGrid";
import SteeleraProduct from "../components/SteeleraProduct";
import KentProduct from "../components/KentProduct";
import Rank1Product from "../components/Rank1Product";
import { products } from "../jsons/products";
import { steelera } from "../jsons/steelera";
import { R1 } from "../jsons/R1";
import { bannerImages } from "../jsons/bannerImages";
import { kent } from "../jsons/kent";

const globalStyles = {
  overflowX: "hidden",
  width: "100%",
  margin: "0",
  padding: "0",
};

const theme = createTheme({
  palette: {
    primary: { main: "#0d47a1" },
    secondary: { main: "#ff6f00" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

const CatalogPage = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    Flora: false,
    Steelera: false,
    Kent: false,
    R1: false,
  });

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  // Determine if any filter is selected
  const isAnyFilterSelected = Object.values(filters).some((value) => value);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div style={globalStyles}>
        <BannerCarousel bannerImages={bannerImages} />

        {/* Conditionally Render Components */}
        {!isAnyFilterSelected && (
          <>
            <ProductGrid products={products} />
            <SteeleraProduct steelera={steelera} />
            <KentProduct kent={kent} />
            <Rank1Product R1={R1} />
          </>
        )}
        {filters.Flora && <ProductGrid products={products} />}
        {filters.Steelera && <SteeleraProduct steelera={steelera} />}
        {filters.Kent && <KentProduct kent={kent} />}
        {filters.R1 && <Rank1Product R1={R1} />}
      </div>
      <Footer />

      {/* Filter Icon and Options */}
      <Box
        sx={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 1000,
        }}
      >
        {/* Filter Icon */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            padding: "8px",
            cursor: "pointer",
          }}
          onClick={() => setFilterVisible(!filterVisible)}
        >
          <FilterAltIcon color="primary" fontSize="large" />
        </Box>

        {/* Filter Options */}
        {filterVisible && (
          <Box
            sx={{
              position: "absolute",
              bottom: "60px",
              right: "0",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              padding: "8px",
              textAlign: "left",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Filters
            </Typography>
            {["Flora", "Steelera", "Kent", "R1"].map((label) => (
              <FormControlLabel
                key={label}
                control={
                  <Checkbox
                    name={label}
                    checked={filters[label]} // Reflects filter state
                    onChange={handleFilterChange}
                  />
                }
                label={label}
              />
            ))}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default CatalogPage;
