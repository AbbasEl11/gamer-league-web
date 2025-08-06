import '../../styles/components/Home/upcoming-tournaments.css';
import TournamentCard from '../TournamentCard';

function UpcomingTournaments() {
  const tournaments = [
    {
      id: 1,
      title: 'Rocket League Doubles',
      date: 'August 12, 2025',
      prize: '$100',
      game: 'Rocket League',
    },
    {
      id: 2,
      title: 'Valorant 1v1 Showdown',
      date: 'August 13, 2025',
      prize: '$150',
      game: 'Valorant',
    },
    {
      id: 3,
      title: 'Fortnite Solo Cup',
      date: 'August 14, 2025',
      prize: '$200',
      game: 'Fortnite',
    },
  ];

  return (
    <section className="upcoming-section">
      <div className="upcoming-container">
        <h2 className="upcoming-title">Upcoming Tournaments</h2>
        <div className="tournament-grid">
          {tournaments.map(t => (
            <TournamentCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingTournaments;
