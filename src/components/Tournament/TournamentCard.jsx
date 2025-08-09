import React from "react";

const GAME_CLASS = {
  Valorant: "valorant",
  "League of Legends": "lol",
  LoL: "lol",
  CS2: "cs2",
  "Rocket League": "rocketleague",
};

export default function TournamentCard({ tournament }) {
  if (!tournament) return null;

  const { id, game, title, startsAt, format, prizePool, entryFee, platform, slots, status } = tournament;
  const slug = GAME_CLASS[game] || game.toLowerCase().replace(/\s+/g, "");

  const taken = slots?.taken ?? 0;
  const max = slots?.max ?? 0;
  const percent = max ? Math.min(100, Math.round((taken / max) * 100)) : 0;

  return (
    <article className={`t-card t-card--${slug}`} data-status={status} tabIndex={0}>
      <div className="t-first-content" aria-hidden="false">
        <div className="t-first__bg" />
        <div className="t-first__top">
          <span className="t-first__pill">{title} — {game}</span>
        </div>
        <div className="t-first__center">
          <img
            className="t-first__logo"
            src={`/images/games/logos/${slug}.png`}
            alt=""
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>
      </div>

      <div className="t-second-content">
        <div className="t-card__media" aria-hidden="true" />
        <header className="t-card__head">
          <span className={`t-badge t-badge--${status}`}>
            {status === "registration" ? "Registration open" :
             status === "running" ? "Live now" :
             status === "full" ? "Full" :
             status === "finished" ? "Finished" : status}
          </span>
          <h3 className="t-card__title">{title}</h3>
          <p className="t-card__subtitle">{game} • {format} • {platform}</p>
        </header>

        <div className="t-card__meta">
          <div className="t-row"><span className="t-label">Start</span><span className="t-value">{new Date(startsAt).toLocaleString()}</span></div>
          <div className="t-row"><span className="t-label">Prize</span><span className="t-value">${prizePool}</span></div>
          <div className="t-row"><span className="t-label">Entry</span><span className="t-value">${entryFee}</span></div>
        </div>

        <div className="t-card__progress">
          <div className="t-progress__row">
            <span className="t-progress__text">{taken}/{max} teams</span>
            <span className="t-progress__percent">{percent}%</span>
          </div>
          <progress className="t-progress" value={taken} max={max} />
        </div>

        <footer className="t-card__cta">
          <a className="btn btn-outline" href={`/tournaments/${id}`}>Details</a>
          <button className="btn btn-primary" type="button">Join</button>
        </footer>
      </div>
    </article>
  );
}
