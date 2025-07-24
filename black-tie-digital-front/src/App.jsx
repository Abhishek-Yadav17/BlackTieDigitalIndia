import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import BlackTieEvents from './components/BlackTieEvents';
import BlackTieInvites from './components/BlackTieInvites';
import GetInTouch from './components/GetInTouch';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/black-tie-events" element={<BlackTieEvents />} />
        <Route path="/black-tie-invites" element={<BlackTieInvites />} />
        <Route path="/getintouch" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;
