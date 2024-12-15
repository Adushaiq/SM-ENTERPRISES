import React, { useRef } from 'react';
import '../App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OurHistory from '../components/OurHistory';
import OurVision from '../components/OurVision';
import Form from '../components/Form'
import Footer from '../components/Footer';
import OurCustomers from '../components/OurCustomers';
import FeaturedProducts from '../components/FeaturedProducts';

const Homepage = () => {
    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="App">
            <Header scrollToContact={scrollToContact} />
            <Hero />
            <OurCustomers/>
            <FeaturedProducts/>
            <OurHistory />
            <OurVision />
            <Form contactRef={contactRef} />
            <Footer/>

        </div>

    );
}

export default Homepage;
