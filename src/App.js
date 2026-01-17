import React, { useEffect, useMemo, useRef, useState } from "react";

// Embedded dictionary data (Tier A + Tier 2)
// NOTE: This is a placeholder. Replace TIERS_DATA with your real data object
// (the one that contains tiers.A and tiers["2"] arrays of {en, fr} items).
const DATA = {
  tiers: {
    A: [
      // مثال:
      // { en: "menu", fr: "menu" }
    ],
    2: [
      // مثال:
      // { en: "cafe", fr: "café" }
    ],
  },
};

const PRODUCT_NAME = "Dictionnaire Franglais";
const STORAGE_KEY = "df_progress_v1"; // stores { tier: "2", index: 0 }

function pickFrenchVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  const fr = voices.find((v) => (v.lang || "").toLowerCase().startsWith("fr"));
  return fr || null;
}

function speakFrench(text) {
  if (!("speechSynthesis" in window)) return;
  if (!text) return;

  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "fr-FR";

  const voice = pickFrenchVoice();
  if (voice) utter.voice = voice;

  window.speechSynthesis.speak(utter);
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (!p || (p.tier !== "A" && p.tier !== "2")) return null;
    if (typeof p.index !== "number" || p.index < 0) return null;
    return p;
  } catch {
    return null;
  }
}

function saveProgress(tier, index) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ tier, index }));
  } catch {}
}

export default function App() {
  const tier2 = DATA?.tiers?.["2"] || [];
  const tierA = DATA?.tiers?.A || [];

  const [tier, setTier] = useState("2"); // default Tier 2
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  // "Mic ritual" state
  const [speakingTurn, setSpeakingTurn] = useState(false);
  const [turnMsLeft, setTurnMsLeft] = useState(0);
  const timerRef = useRef(null);

  // Ensure voices are loaded on some browsers
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.getVoices();
    const onVoices = () => window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = onVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Load progress once
  useEffect(() => {
    const p = loadProgress();
    if (!p) return;
    setTier(p.tier);
    setIndex(p.index);
  }, []);

  const list = useMemo(() => (tier === "A" ? tierA : tier2), [tier, tierA, tier2]);
  const total = list.length || 1;
  const card = list[Math.min(index, total - 1)];

  // Persist progress
  useEffect(() => {
    saveProgress(tier, index);
  }, [tier, index]);

  function stopTurnAndReveal() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setSpeakingTurn(false);
    setTurnMsLeft(0);
    setRevealed(true);
    speakFrench(card?.fr || "");
  }

  function startTurn() {
    if (!card) return;

    // If already in a "speaking turn", end it early and reveal
    if (speakingTurn) {
      stopTurnAndReveal();
      return;
    }

    // New turn: hide answer, give user a few seconds to speak
    setRevealed(false);
    setSpeakingTurn(true);

    const TURN_MS = 3500;
    setTurnMsLeft(TURN_MS);

    const start = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const left = Math.max(0, TURN_MS - elapsed);
      setTurnMsLeft(left);
      if (left <= 0) stopTurnAndReveal();
    }, 50);
  }

  function nextCard() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setSpeakingTurn(false);
    setTurnMsLeft(0);

    const next = (index + 1) % total;
    setIndex(next);
    setRevealed(false);
  }

  function resetProgress() {
    // eslint-disable-next-line no-alert
    if (!window.confirm("Reset your progress to the beginning?")) return;
    setIndex(0);
    setRevealed(false);
    setSpeakingTurn(false);
    setTurnMsLeft(0);
    saveProgress(tier, 0);
  }

  function replayFrench() {
    speakFrench(card?.fr || "");
  }

  const progressPct = total ? Math.round(((index + 1) / total) * 100) : 0;
  const turnPct = speakingTurn ? Math.round((turnMsLeft / 3500) * 100) : 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ fontSize: 14, color: "#666" }}>Flashcards</div>
          <h1 style={{ margin: 0, fontSize: 22 }}>{PRODUCT_NAME}</h1>
        </div>

        <select
          value={tier}
          onChange={(e) => {
            const t = e.target.value;
            setTier(t);
            const newTotal = (t === "A" ? tierA.length : tier2.length) || 1;
            setIndex((i) => Math.min(i, newTotal - 1));
            setRevealed(false);
          }}
          style={{ padding: 10, borderRadius: 12, border: "1px solid #ddd", background: "white" }}
          aria-label="Tier"
        >
          <option value="2">Tier 2 (near-identical)</option>
          <option value="A">Tier A (identical)</option>
        </select>
      </header>

      <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16, background: "white" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
          <div style={{ fontSize: 12, color: "#666" }}>Progress</div>
          <div style={{ fontSize: 12, color: "#666" }}>
            {index + 1} / {total} ({progressPct}%)
          </div>
        </div>
        <div style={{ height: 8, background: "#f2f2f2", borderRadius: 999, overflow: "hidden", marginTop: 8 }}>
          <div style={{ height: "100%", width: `${progressPct}%`, background: "#111" }} />
        </div>
      </div>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "18px 10px" }}>
          <div style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>Say the French word.</div>

          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.05 }}>
            {card?.en || "—"}
          </div>

          <div style={{ marginTop: 14, display: "flex", justifyContent: "center" }}>
            <button
              onClick={startTurn}
              style={{
                width: 86,
                height: 86,
                borderRadius: 999,
                border: speakingTurn ? "2px solid #111" : "1px solid #ddd",
                background: speakingTurn ? "#111" : "white",
                color: speakingTurn ? "white" : "#111",
                fontSize: 28,
                cursor: "pointer",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
              aria-label="Microphone"
              title={speakingTurn ? "Tap to reveal" : "Tap to speak"}
            >
              🎤
            </button>
          </div>

          {speakingTurn && (
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 12, color: "#666", marginBottom: 6 }}>
                Your turn… (tap 🎤 again to reveal)
              </div>
              <div style={{ height: 8, background: "#f2f2f2", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${turnPct}%`, background: "#111" }} />
              </div>
            </div>
          )}

          {revealed && (
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 14, color: "#666" }}>French</div>
              <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.05 }}>
                {card?.fr || "—"}
              </div>
              <div style={{ marginTop: 10, display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
                <button
                  onClick={replayFrench}
                  style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid #ddd", background: "white", cursor: "pointer" }}
                >
                  🔊 Hear it again
                </button>
                <button
                  onClick={startTurn}
                  style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid #ddd", background: "white", cursor: "pointer" }}
                >
                  🎤 Try again
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={nextCard}
          style={{
            flex: 1,
            padding: 14,
            borderRadius: 14,
            border: "1px solid #111",
            background: "#111",
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Next
        </button>
        <button
          onClick={resetProgress}
          style={{
            padding: 14,
            borderRadius: 14,
            border: "1px solid #ddd",
            background: "white",
            color: "#111",
            cursor: "pointer",
          }}
          title="Reset progress"
        >
          Reset
        </button>
      </div>

      <footer style={{ fontSize: 12, color: "#777", paddingBottom: 8, textAlign: "center" }}>
        Your progress is saved on this device.
      </footer>
    </div>
  );
}
