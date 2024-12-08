import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import OurHistory from './components/OurHistory';
import OurVision from './components/OurVision';
import CatalogPage from './pages/CatalogPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Homepage from './pages/Homepage';

function App() {
  return (
      <div className="App">
      
        <Routes> 
        <Route path="/" element={<Homepage />} />
          <Route path="/catalogue" element={<CatalogPage />} />
        </Routes>
       
      </div>
 
  );
}

export default App;
