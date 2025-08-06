import '../../styles/components/Home/about-section.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">What is Gamer League?</h2>
        <p className="about-text">
          Gamer League is a community-powered tournament platform made for real gamers.
          Whether you're grinding Fortnite, climbing the ladder in Valorant, or battling in League of Legends –
          you deserve real tournaments, real competition, and real recognition.
        </p>

        <div className="about-list">
          <div className="about-item">
            <span className="emoji">🕹️</span>
            <p>Open for everyone</p>
          </div>
          <div className="about-item">
            <span className="emoji">🏆</span>
            <p>Prize pools every week</p>
          </div>
          <div className="about-item">
            <span className="emoji">💬</span>
            <p>Commentated streams & highlights</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
