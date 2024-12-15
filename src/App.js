import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import OurHistory from './components/OurHistory';
import OurVision from './components/OurVision';
import CatalogPage from './pages/CatalogPage';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom'; // Import React Router components
import Homepage from './pages/Homepage';
import Form from './components/Form';

function App() {
  return (
      <div className="App">
      
        <Routes> 
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Homepage />} />
          <Route path="/catalogue" element={<CatalogPage />} />
          <Route path="/contactus" element={<Form/>} />
        </Routes>
       
      </div>
 
  );
}

export default App;
