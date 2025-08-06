import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/shared/navbar.css';
import logo from '../../assets/logos/GL-logo.png';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/tournaments', label: 'Tournaments' },
  { to: '/register', label: 'Register' },
  { to: '/login', label: 'Login' }
];

function Navbar() {
  return (
    <div className="all">
      <div className="lefter" data-tooltip="Dashboard">
      </div>
      <div className="left"  data-tooltip="Tournaments">
      </div>
      <div className="center"  data-tooltip="Home">
        <div className="explainer"><img src={logo} alt="" /></div>
      </div>
      <div className="right"  data-tooltip="Register">
      </div>
      <div className="righter"  data-tooltip="Login">
      </div>
    </div>
  );
}

export default Navbar;
