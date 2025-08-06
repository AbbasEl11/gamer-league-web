import '../../styles/components/Home/livestream-preview.css';

function LivestreamPreview() {
  return (
    <section className="livestream-section">
      <div className="livestream-container">
        <h2 className="livestream-title">Watch Our Latest Tournament</h2>
        <p className="livestream-description">
          Missed the action? Watch our most recent live broadcast including play-by-play commentary, top plays, and team highlights.
        </p>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Latest Tournament"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>

        <a href="/livestreams" className="btn btn-glow livestream-btn">Watch more !</a>
      </div>
    </section>
  );
}

export default LivestreamPreview;
