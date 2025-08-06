import { Link } from 'react-router-dom';
import '../../styles/components/Home/call-to-action.css';

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to join the league?</h2>
        <p className="cta-subtitle">
          Create your account, pick your game, and earn your place in the next tournament.
        </p>
        <div className="cta-buttons">
          <Link to="/register" className="btn btn-glow">Register Now</Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
