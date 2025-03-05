import Header from './components/Header';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Tracker from './pages/Tracker';
import { Link, useLocation } from 'react-router-dom';
import TrackBtn from './components/TrackBtn';
import Hero from './components/Hero';

function App() {
  const location=useLocation();

  return (
    <div className="App">
      <Header />
      {location.pathname === '/' && <Hero />}
      {location.pathname === '/' && <TrackBtn />}
      
      <Routes>
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </div>
  );
}

export default App;
