import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
  Container,
  CssBaseline,
} from "@mui/material";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { Carousel } from "react-responsive-carousel";
import Carousels from "../components/Carousels";
import ProductGrid from "../components/ProductGrid";
import BannerCarousel from "../components/BannerCarousel";
import Footer from "../components/Footer";
import { products } from "../jsons/products";
import { bannerImages } from "../jsons/bannerImages";
import Header from "../components/Header";

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
      <Header />
    <CssBaseline />
    <div style={globalStyles}>
      <BannerCarousel bannerImages={bannerImages} />
      <Carousels />
      <ProductGrid products={products} />
    </div>
    <Footer/>
  </ThemeProvider>
  );
};

export default CatalogPage;

