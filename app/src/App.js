import Header from './components/Header';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Tracker from './pages/Tracker';
import { Link, useLocation } from 'react-router-dom';
import LinkButton from './components/LinkButton';
import Hero from './components/Hero';
import Fields from './pages/Fields';

function App() {
  const location=useLocation();

  return (
    <div className="App">
      <Header />
      {location.pathname === '/' && <Hero />}
      {location.pathname === '/' && <LinkButton text='Track Expense' linkto='/tracker'/>}
      {location.pathname === '/' && <Link to="/Fields">fields</Link>}
      
      <Routes>
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/fields" element={<Fields />} />
      </Routes>
    </div>
  );
}

export default App;
