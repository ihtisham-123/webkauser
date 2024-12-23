import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PlaceOrder from './pages/PlaceOrder';
import Withdraw from './pages/Withdraw';
import Referral from './pages/Referral';
import KYC from './pages/KYC';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/kyc" element={<KYC />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;