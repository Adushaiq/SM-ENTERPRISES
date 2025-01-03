import React from "react";
import {
  CssBaseline,
  useMediaQuery,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";
import Carousels from "../components/Carousels";
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
  overflowX: "hidden", // Prevent horizontal scroll
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div style={globalStyles}>
        <BannerCarousel bannerImages={bannerImages} />
        <Carousels />
        <ProductGrid products={products} />
        <SteeleraProduct steelera={steelera} />
        <KentProduct kent={kent} />
        <Rank1Product R1={R1} />
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default CatalogPage;
