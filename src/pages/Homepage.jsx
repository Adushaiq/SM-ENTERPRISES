import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OurHistory from '../components/OurHistory';
import OurVision from '../components/OurVision';
import Form from '../components/Form'
import Footer from '../components/Footer';
const Homepage = () => {
    return (
        <div className="App">
            <Header />

            <Hero />

            <OurHistory />
            <OurVision />
            <Form />
            <Footer/>

        </div>

    );
}

export default Homepage;
