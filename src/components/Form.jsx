import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LeafletMap from '../components/OpenLayersMap';
import 'leaflet/dist/leaflet.css';

const Form = ({ contactRef }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
    };

    return (
        <Box
            ref={contactRef}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                padding: { xs: '20px', md: '0px' },
            }}
        >
            <Grid
                container
                sx={{
                    alignItems: 'stretch',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                {/* Form Section */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: 'flex', flexDirection: 'column', padding: { xs: '10px', md: '20px' } }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            padding: '40px',
                            backgroundColor: '#303030',
                            borderRadius: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography variant="h5" sx={{ marginBottom: '16px', color: '#fff', fontWeight: "Bold", fontSize: { xs: '1.5rem', md: '2rem' } }}>
                            Get in Touch
                        </Typography>
                        <TextField
                            label="Name"
                            variant="standard"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{
                                marginBottom: '10px',
                                width: '100%',
                                maxWidth: '400px',
                                input: { color: 'white' },
                                '& .MuiInputLabel-root': { color: 'white' },
                                '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: 'white' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#007bff' },
                            }}
                        />
                        <TextField
                            label="Email"
                            variant="standard"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                marginBottom: '10px',
                                width: '100%',
                                maxWidth: '400px',
                                input: { color: 'white' },
                                '& .MuiInputLabel-root': { color: 'white' },
                                '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: 'white' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#007bff' },
                            }}
                        />
                        <TextField
                            label="Message"
                            variant="standard"
                            multiline
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            sx={{
                                marginBottom: '20px',
                                width: '100%',
                                maxWidth: '400px',
                                '& .MuiInputBase-root': { color: 'white' },
                                '& .MuiInputLabel-root': { color: 'white' },
                                '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: 'white' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#007bff' },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#3342AC',
                                color: '#fff',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                '&:hover': { backgroundColor: '#2A3891' },
                                width: '100%',
                                maxWidth: '200px',
                            }}
                        >
                            SUBMIT
                        </Button>
                    </Box>
                </Grid>

                {/* Contact Information Section */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: 'flex', flexDirection: 'column', padding: { xs: '10px', md: '20px' } }}
                >
                    <Box
                        sx={{
                            padding: '30px',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            boxShadow: '0 0px 2px rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start', // Left-align content
                            color: '#000',
                            height: '100%',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                marginBottom: '20px',
                                fontWeight: 'bold',
                                color: '#333',
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                alignSelf: "Center"
                            }}
                        >
                            Contact Information
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '12px',
                                fontSize: '1rem',
                                color: '#555',
                                textAlign: 'left', // Ensuring the text is left-aligned
                            }}
                        >
                            <LocationOnIcon sx={{ marginRight: '8px', color: '#777' }} />
                            Pune, India
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '12px',
                                fontSize: '1rem',
                                color: '#555',
                                textAlign: 'left',
                            }}
                        >
                            <PhoneIcon sx={{ marginRight: '8px', color: '#777' }} />
                            <Link href="tel:+917888087652" sx={{ color: '#555', textDecoration: 'none' }}>+91 7888087652</Link>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '12px',
                                fontSize: '1rem',
                                color: '#555',
                                textAlign: 'left',
                            }}
                        >
                            <EmailIcon sx={{ marginRight: '8px', color: '#777' }} />
                            <Link href="mailto:sales@smenterprisespune.com" sx={{ color: '#555', textDecoration: 'none' }}>Sales@smenterprisespune.com</Link>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '20px',
                                fontSize: '1rem',
                                color: '#555',
                                textAlign: 'left',
                            }}
                        >
                            <EmailIcon sx={{ marginRight: '8px', color: '#777' }} />
                            <Link href="mailto:support@smenterprisespune.com" sx={{ color: '#555', textDecoration: 'none' }}>Support@smenterprisespune.com</Link>
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                height: '200px',
                                marginTop: '15px',
                                marginBottom: '20px',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                backgroundColor: '#f9f9f9',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <LeafletMap />
                        </Box>
                        {/* <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '10px',
                                gap: '15px',
                            }}
                        >
                            <FacebookIcon sx={{ color: '#4267B2', fontSize: '30px' }} />
                            <TwitterIcon sx={{ color: '#1DA1F2', fontSize: '30px' }} />
                            <InstagramIcon sx={{ color: '#C13584', fontSize: '30px' }} />
                            <YouTubeIcon sx={{ color: '#FF0000', fontSize: '30px' }} />
                        </Box> */}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;
