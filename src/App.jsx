import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/shared/Navbar';
import TournamentDetail from './pages/TournamentDetail';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <div id="main">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/tournaments/:id" element={<TournamentDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        </Routes>
      </div></div>
    </BrowserRouter>
  );
}

export default App;

