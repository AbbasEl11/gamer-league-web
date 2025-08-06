import { useParams } from 'react-router-dom';

function TournamentDetail() {
  const { id } = useParams();

  const dummyTournament = {
    id,
    title: "Rocket League Doubles",
    game: "Rocket League",
    date: "2025-08-11",
    prize: "$200",
    slots: "12/16",
    description: "Compete in 2v2 Rocket League matches and win cash prizes!",
    rules: "Best of 3. No toxicity. Standard arenas only.",
  };

  return (
    <div className="page-container">
      <h1>{dummyTournament.title}</h1>
      <p>{dummyTournament.game} – {dummyTournament.date}</p>
      <p>{dummyTournament.description}</p>
      <p><strong>Prize:</strong> {dummyTournament.prize}</p>
      <p><strong>Slots:</strong> {dummyTournament.slots}</p>

      <button className="btn btn-glow" style={{ marginTop: '1.5rem' }}>
        Join Tournament
      </button>
    </div>
  );
}

export default TournamentDetail;
