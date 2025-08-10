import { Link } from 'react-router-dom';
import '../../styles/components/Home/hero-section.css';
import logo from '../../assets/logos/GL-logo.png'; 

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={logo} alt="Gamer League Logo" className="hero-logo" />

        <h1 className="hero-title">Join the Gamer League</h1>
        <p className="hero-subtitle">
          Community-powered tournaments. Weekly. Fair. Exciting.
        </p>

        <div className="hero-buttons">
          <Link to="/tournaments" className="btn btn-glow">Browse Tournaments</Link>
          <Link to="/register" className="btn btn-glow">Register Now</Link>
        </div>
      </div>

      <div className="hero-background" />
    </section>
  );
}

export default HeroSection;
