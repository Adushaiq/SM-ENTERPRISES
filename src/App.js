import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import OurHistory from './components/OurHistory';
import OurVision from './components/OurVision';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <OurHistory/>
      <OurVision/>
    </div>
  );
}

export default App;
