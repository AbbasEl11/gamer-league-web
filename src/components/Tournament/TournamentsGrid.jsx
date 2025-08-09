import React from "react";
import tournaments from "../../data/tournaments";
import TournamentCard from "./TournamentCard";
import "../../styles/components/tournaments.css";

export default function TournamentsGrid() {
  return (
    <section className="page-container">
      <h1 className="t-title">Upcoming Tournaments</h1>
      <ul className="t-grid" role="list">
        {tournaments.filter(Boolean).map((t, i) => (
  <li key={t?.id ?? i}>
    <TournamentCard tournament={t} />
  </li>
))}
      </ul>
    </section>
  );
}
