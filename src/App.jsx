import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/shared/Navbar';
import TournamentDetail from './pages/TournamentDetail';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'; 
import GamingIconsDemo from './pages/GamingIconsDemo';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div id="main" className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/gamingicons" element={<GamingIconsDemo />} />
          <Route path="/tournaments/:id" element={<TournamentDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

