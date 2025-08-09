import '../../styles/components/Home/features.css';

function Features() {
  const features = [
    {
      icon: '🕹️',
      title: 'Open for Everyone',
      text: 'No pros needed. Join no matter your skill level.',
    },
    {
      icon: '🏆',
      title: 'Real Prize Pools',
      text: 'Compete in community-backed tournaments with real rewards.',
    },
    {
      icon: '💬',
      title: 'Live Commentary',
      text: 'Watch streams with AI or community casters.',
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Why Gamer League?</h2>
        <div className="features-grid">
          {features.map((feat, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
