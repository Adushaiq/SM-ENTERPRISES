import React, { useState } from 'react';
import { TextField, Checkbox, Button, Typography, Grid, Box, Snackbar , Alert} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LeafletMap from '../components/OpenLayersMap';
import 'leaflet/dist/leaflet.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success', // 'success' | 'error'
    });

    const handleSnackbarClose = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate form fields
        if (!name || !email || !message) {
            setSnackbar({
                open: true,
                message: 'All fields are required!',
                severity: 'error',
            });
            return;
        }

        try {
            // Send API request
            const response = await fetch("http://localhost:4000/api/v1/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();
            if (response.ok) {
                setSnackbar({
                    open: true,
                    message: 'Email sent successfully!',
                    severity: 'success',
                });
                setName('');
                setEmail('');
                setMessage('');
                setNewsletter(false);
            } else {
                setSnackbar({
                    open: true,
                    message: `Error: ${data.message}`,
                    severity: 'error',
                });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSnackbar({
                open: true,
                message: 'Failed to send email!',
                severity: 'error',
            });
        }
    };



    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                padding: { xs: '20px', md: '50px' },
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
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: { xs: '10px', md: '20px' },
                    }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            padding: '20px',
                            backgroundColor: '#303030',
                            borderRadius: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                marginBottom: '16px',
                                color: '#fff',
                                fontSize: { xs: '1.5rem', md: '2rem' },
                            }}
                        >
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
                                marginBottom: '10px',
                                width: '100%',
                                maxWidth: '400px',
                                '& .MuiInputBase-root': { color: 'white' },
                                '& .MuiInputLabel-root': { color: 'white' },
                                '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: 'white' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#007bff' },
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '10px',
                            }}
                        >
                           
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#007bff',
                                color: '#fff',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                '&:hover': { backgroundColor: '#0056b3' },
                                width: '100%',
                                maxWidth: '200px',
                            }}
                        >
                            SUBMIT
                        </Button>
                    </Box>

                    {/* Snackbar for success or error messages */}
                    <Snackbar
                        open={snackbar.open}
                        autoHideDuration={4000}
                        onClose={handleSnackbarClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <Alert
                            onClose={handleSnackbarClose}
                            severity={snackbar.severity}
                            sx={{ width: '100%' }}
                        >
                            {snackbar.message}
                        </Alert>
                    </Snackbar>
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
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: '#000',
                            height: '100%',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                marginBottom: '16px',
                                fontWeight: 'bold',
                                color: '#333',
                                fontSize: { xs: '1.5rem', md: '2rem' },
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
                            }}
                        >
                            <PhoneIcon sx={{ marginRight: '8px', color: '#777' }} />
                            +91 7888087652
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '20px',
                                fontSize: '1rem',
                                color: '#555',
                            }}
                        >
                            <EmailIcon sx={{ marginRight: '8px', color: '#777' }} />
                            Sales@smenterprisespune.com
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '20px',
                                fontSize: '1rem',
                                color: '#555',
                            }}
                        >
                            <EmailIcon sx={{ marginRight: '8px', color: '#777' }} />
                            Support@smenterprisespune.com
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                height: '200px',
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
                        <Box
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
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;
