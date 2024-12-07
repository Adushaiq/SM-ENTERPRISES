import React, { useState } from "react";
import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Container,
} from "@mui/material";
import { motion } from "framer-motion";

const ProductGrid = ({ products }) => {
    const [visibleProducts, setVisibleProducts] = useState(5); // Initially load 5 products

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 5); // Increment by 5 each time the button is clicked
    };

    const handleButtonClick = () => {
        console.log("Button clicked");
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
            <Typography
                variant="h4"
                gutterBottom
                component={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                sx={{
                    mb: 4,
                    fontWeight: "bold",
                    color: "primary.main",
                }}
            >
                Explore Our Products
            </Typography>

            <Grid container spacing={3}>
                {products.slice(0, visibleProducts).map((product) => (
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

            {visibleProducts < products.length && (
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
                            '&:hover': {
                                backgroundColor: "gray", // Optional: Change background color on hover
                            }
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
