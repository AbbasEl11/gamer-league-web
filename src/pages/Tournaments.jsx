import TournamentCard from '../components/TournamentCard';

function Tournaments() {
  const dummyTournaments = [
    {
      id: 1,
      title: "1v1 Showdown",
      game: "Valorant",
      date: "2025-08-10",
      prize: "$100",
      slots: "8/16",
    },
    {
      id: 2,
      title: "Rocket League Doubles",
      game: "Rocket League",
      date: "2025-08-11",
      prize: "$200",
      slots: "12/16",
    },
    {
      id: 3,
      title: "Fortnite Solo Cup",
      game: "Fortnite",
      date: "2025-08-12",
      prize: "$150",
      slots: "25/100",
    },
  ];

  return (
<div className="tournaments-container">
  {dummyTournaments.map((tournament) => (
    <TournamentCard
      key={tournament.id}
      id={tournament.id}
      title={tournament.title}
      game={tournament.game}
      date={tournament.date}
      prize={tournament.prize}
      slots={tournament.slots}
    />
  ))}
</div>

  );
}

export default Tournaments;
