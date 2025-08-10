import { NavLink } from 'react-router-dom';
import '../../styles/components/shared/navbar.css';
import logo from '../../assets/logos/GL-logo.png';

export default function Navbar() {
  return (
    <div className="all">
      <NavLink to="/" className="lefter" data-tooltip="Dashboard" aria-label="Dashboard" >Dashboard      </NavLink>
      
      <NavLink to="/tournaments" className="left" data-tooltip="Tournaments" aria-label="Tournaments" >Tournaments      </NavLink>
      
      <NavLink to="/" className="center" data-tooltip="Home" aria-label="Home">
        <div className="explainer"><img src={logo} alt="Gamer League" /></div>

      </NavLink>

      <NavLink to="/register" className="right" data-tooltip="Register" aria-label="Register" >Register      </NavLink>
      
      <NavLink to="/login"      className="righter" data-tooltip="Login" aria-label="Login" >Login      </NavLink>
    </div>
  );
}
