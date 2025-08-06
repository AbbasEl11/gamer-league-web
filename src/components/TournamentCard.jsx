import { Link } from 'react-router-dom';
import '../styles/components/tournament-card.css';

function TournamentCard({ title, game, date, prize, slots, id }) {
  return (
    <Link to={`/tournaments/${id}`}>
      <div className="tournament-card">
        <h2 className="tournament-title">{title}</h2>
        <p className="tournament-game">{game}</p>
        <div className="tournament-info">
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Prize Pool:</strong> {prize}</p>
          <p><strong>Slots:</strong> {slots}</p>
        </div>
      </div>
    </Link>
  );
}

export default TournamentCard;
