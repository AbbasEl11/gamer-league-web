import React, { useId } from 'react';
import '../styles/components/Home/gaming-icons-demo.css';

/**
 * Gamer League – Neon Glass Pack (CSS-only)
 * Props:
 *  - speed?: number  (default 1)     → höher = langsamer, kleiner = schneller
 *  - className?: string              → zusätzl. Klassen
 */
export default function GamingIconsDemo({ speed = 1, className = '' }) {
  return (
    <section
      className={`glg glg--decor ${className}`}
      style={{ '--glg-speed': String(speed) }}
      aria-label="Gaming Icons und Chat Vorschau"
    >
      <div className="glg-grid">
        <div className="glg-row">
          <div className="glg-card glg-card--chrome">
            <h3 className="glg-title">Controller</h3>
            <ControllerIcon ariaLabel="Animiertes Controller-Icon" />
          </div>

          <div className="glg-card glg-card--chrome">
            <h3 className="glg-title">Pokal</h3>
            <TrophyIcon ariaLabel="Animierter Pokal" />
          </div>
        </div>

        <div className="glg-card glg-card--chrome">
          <h3 className="glg-title">Chat‑Simulation</h3>
          <ChatSimulation />
        </div>
      </div>
    </section>
  );
}

/** Controller Icon – mit Neon-Aura, Vibration & Button-Puls */
function ControllerIcon({ ariaLabel = 'Controller' }) {
  return (
    <div className="glg-icon glg-icon--controller" role="img" aria-label={ariaLabel}>
      {/* Neon-Aura */}
      <span aria-hidden="true" className="glg-aura glg-aura--controller" />
      <svg viewBox="0 0 200 120">
        <defs>
          <linearGradient id="ctrlBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b2240" />
            <stop offset="100%" stopColor="#0e1426" />
          </linearGradient>
          <radialGradient id="ctrlSpec" cx="60%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,.16)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <g className="gamepad">
          {/* Body */}
          <ellipse cx="40" cy="70" rx="35" ry="28" fill="url(#ctrlBody)" />
          <ellipse cx="160" cy="70" rx="35" ry="28" fill="url(#ctrlBody)" />
          <rect x="40" y="38" width="120" height="60" rx="28" fill="url(#ctrlBody)" />
          {/* Soft highlight */}
          <ellipse cx="100" cy="46" rx="76" ry="26" fill="url(#ctrlSpec)" />

          {/* Center LED */}
          <circle className="led" cx="100" cy="49" r="3" />

          {/* D-Pad */}
          <g className="dpad" fill="#0e1426">
            <rect x="62" y="58" width="33" height="9" rx="2" />
            <rect x="74" y="46" width="9" height="33" rx="2" />
            <circle cx="78.5" cy="62.5" r="3.2" className="dpad-dot" />
          </g>

          {/* AB Buttons */}
          <g>
            <circle className="btn btn--a" cx="128" cy="58" r="7.3" />
            <circle className="btn btn--b" cx="142" cy="72" r="7.3" />
          </g>

          {/* Sticks */}
          <g className="sticks" fill="#0e1426">
            <circle className="stick stick--l" cx="84" cy="82" r="9.5" />
            <circle cx="84" cy="82" r="3.5" className="stick-dot" />
            <circle className="stick stick--r" cx="120" cy="82" r="9.5" />
            <circle cx="120" cy="82" r="3.5" className="stick-dot" />
          </g>

          {/* Contour highlight */}
          <g opacity=".45" fill="none" className="contour">
            <path d="M30,70 C30,40 50,36 68,36 L132,36 C150,36 170,40 170,70" />
          </g>
        </g>
      </svg>
    </div>
  );
}

/** Trophy Icon – 3D-Gold, Shine-Sweep, Sparkles + dezente Konfetti-Schleife */
function TrophyIcon({ ariaLabel = 'Pokal' }) {
  const uid = useId();
  const gradId = `${uid}-goldGrad`;
  const clipId = `${uid}-cupClip`;

  return (
    <div className="glg-icon glg-icon--trophy" role="img" aria-label={ariaLabel}>
      <span aria-hidden="true" className="glg-aura glg-aura--trophy" />
      <svg viewBox="0 0 200 160">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--glg-gold-1)" />
            <stop offset="55%" stopColor="var(--glg-gold-2)" />
            <stop offset="100%" stopColor="var(--glg-gold-3)" />
          </linearGradient>
          <clipPath id={clipId}>
            <path d="M100 22
                     C140 22 146 54 120 68
                     L120 92 L80 92 L80 68
                     C54 54 60 22 100 22 Z" />
          </clipPath>
        </defs>

        <g className="trophy">
          {/* Handles */}
          <path d="M78 40 C 56 36, 52 74, 75 72" fill="none" stroke={`url(#${gradId})`} strokeWidth="6" strokeLinecap="round" />
          <path d="M122 40 C 144 36, 148 74, 125 72" fill="none" stroke={`url(#${gradId})`} strokeWidth="6" strokeLinecap="round" />

          {/* Cup */}
          <path
            d="M100 22 C140 22 146 54 120 68 L120 92 L80 92 L80 68 C54 54 60 22 100 22 Z"
            fill={`url(#${gradId})`}
          />

          {/* Stem + Base */}
          <rect x="88" y="92" width="24" height="14" rx="4" fill={`url(#${gradId})`} />
          <rect x="72" y="110" width="56" height="10" rx="5" fill={`url(#${gradId})`} />
          <rect x="60" y="122" width="80" height="12" rx="6" fill={`url(#${gradId})`} />

          {/* Shine sweep */}
          <g clipPath={`url(#${clipId})`}>
            <rect className="shine" x="-180" y="20" width="70" height="80" />
          </g>

          {/* Sparkles */}
          <g className="sparks">
            <polygon className="spark" points="38,26 42,32 50,34 44,38 42,46 38,40 30,38 36,34" />
            <polygon className="spark spark--b" points="164,30 168,36 176,38 170,42 168,50 164,44 156,42 162,38" />
          </g>

          {/* Confetti (subtil, loopend) */}
          <g className="confetti">
            <rect className="c1" x="90" y="10" width="3" height="6" rx="1" />
            <rect className="c2" x="110" y="6" width="3" height="6" rx="1" />
            <rect className="c3" x="70" y="14" width="3" height="6" rx="1" />
            <rect className="c4" x="130" y="12" width="3" height="6" rx="1" />
            <rect className="c5" x="100" y="4" width="3" height="6" rx="1" />
          </g>
        </g>
      </svg>
    </div>
  );
}

/** Chat – glasig, mit Tails, Glow-Bestätigung und Tipp-Animation */
function ChatSimulation() {
  return (
    <div className="glg-chat" aria-live="polite" aria-label="Chat läuft als Vorschau in einer Schleife" style={{ '--glg-loop': '16s' }}>
      {/* 1 */}
      <div className="glg-chat__row">
        <div className="glg-chat__avatar" aria-hidden="true" />
        <div className="glg-bubble" style={{ '--glg-delay': '0s' }}>
          Ready for tonight’s 2v2?
        </div>
      </div>

      {/* 2 */}
      <div className="glg-chat__row glg-chat__row--right">
        <div className="glg-bubble glg-bubble--me" style={{ '--glg-delay': '2.2s' }}>
          Always. What’s the entry?
          <span className="glg-ticks" aria-hidden="true">✓✓</span>
        </div>
      </div>

      {/* 3 */}
      <div className="glg-chat__row">
        <div className="glg-chat__avatar" aria-hidden="true" />
        <div className="glg-bubble" style={{ '--glg-delay': '4.2s' }}>
          CHF 5 — goes straight into the prize pool 💰
        </div>
      </div>

      {/* 4 */}
      <div className="glg-chat__row glg-chat__row--right">
        <div className="glg-bubble glg-bubble--me" style={{ '--glg-delay': '6.4s' }}>
          gg ez 😎 let’s go
          <span className="glg-ticks" aria-hidden="true">✓✓</span>
        </div>
      </div>

      {/* 5 */}
      <div className="glg-chat__row">
        <div className="glg-chat__avatar" aria-hidden="true" />
        <div className="glg-bubble" style={{ '--glg-delay': '8.2s' }}>
          Room: <strong>#GAMER‑42</strong> — starts in 5.
        </div>
      </div>

      {/* 6 – typing */}
      <div className="glg-chat__row glg-chat__row--right">
        <div className="glg-bubble glg-bubble--me" style={{ '--glg-delay': '10.6s' }}>
          <span className="glg-typing" aria-label="typing">
            <span className="glg-typing__dot" />
            <span className="glg-typing__dot" />
            <span className="glg-typing__dot" />
          </span>
        </div>
      </div>
    </div>
  );
}

export { ControllerIcon, TrophyIcon, ChatSimulation };
