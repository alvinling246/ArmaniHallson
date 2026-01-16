import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { UnitsPage } from './pages/UnitsPage';
import { PlansPage } from './pages/PlansPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/units" element={<UnitsPage />} />
          <Route path="/plans" element={<PlansPage />} />
        </Routes>
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}