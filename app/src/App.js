import Header from './components/Header';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Tracker from './pages/Tracker';
import { Link, useLocation } from 'react-router-dom';
import LinkButton from './components/LinkButton';
import Hero from './components/Hero';
import Fields from './pages/Fields';
import SignUp from './pages/SignUp';
import LogIn from './pages/Login';

function App() {
  const location=useLocation();

  return (
    <div className="App">
      <Header />
      {location.pathname === '/' && <Hero />}
      {location.pathname === '/' && <LinkButton text='Track Expense' linkto='/login'/>}
      
      <Routes>
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/fields" element={<Fields />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} /> 
      </Routes>
    </div>
  );
}

export default App;
