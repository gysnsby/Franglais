import React, { useState, useMemo } from "react";

/* ======================================================
   CONFIG
====================================================== */

const PRODUCT_NAME = "Franglais made easy";

const THEME = {
  panelBg: "rgba(255,255,255,0.88)",
  text: "#111",
  muted: "#555",
  cardBg: "#fffaf0",
  border: "rgba(0,0,0,0.12)",
  yellow: "#ffd84d",
  yellowHover: "#ffcc2e",
};

/* ======================================================
   APP
====================================================== */

export default function App() {
  const [revealed, setRevealed] = useState(false);
  const [index, setIndex] = useState(0);

  const CARDS = useMemo(
    () => [
      {
        en: "I would like a coffee please",
        fr: "Je voudrais un café s'il vous plaît",
      },
      {
        en: "Where is the hotel?",
        fr: "Où est l'hôtel ?",
      },
      {
        en: "How much does it cost?",
        fr: "Combien ça coûte ?",
      },
    ],
    []
  );

  const card = CARDS[index];

  function nextCard() {
    setRevealed(false);
    setIndex((i) => (i + 1) % CARDS.length);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL}/franglais-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: 16,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          background: THEME.panelBg,
          borderRadius: 24,
          padding: 20,
          boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          color: THEME.text,
        }}
      >
        <header style={{ textAlign: "center", marginBottom: 16 }}>
          <h1 style={{ margin: 0, fontSize: 28 }}>{PRODUCT_NAME}</h1>
          <p style={{ margin: "6px 0 0", color: THEME.muted }}>
            Say it like the French do
          </p>
        </header>

        <div
          style={{
            background: THEME.cardBg,
            border: `1px solid ${THEME.border}`,
            borderRadius: 18,
            padding: 22,
            marginBottom: 16,
            minHeight: 140,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 20 }}>{card.en}</div>

          {revealed && (
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                marginTop: 14,
              }}
            >
              {card.fr}
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={() => setRevealed((v) => !v)}
            style={{
              flex: 1,
              padding: "14px 16px",
              borderRadius: 14,
              border: `1px solid ${THEME.border}`,
              background: revealed ? THEME.cardBg : THEME.yellow,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: revealed
                ? "none"
                : "0 10px 22px rgba(0,0,0,0.15)",
              transition: "all 0.15s ease",
            }}
          >
            {revealed ? "Hide French" : "Reveal French"}
          </button>

          <button
            onClick={nextCard}
            style={{
              padding: "14px 18px",
              borderRadius: 14,
              border: `1px solid ${THEME.border}`,
              background: "#111",
              color: "white",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
