import { useMemo, useState } from "react";
import { DATA } from "./data.js";

const RULE_LABELS = {
  accent: "Accent added",
  final_e: "Final -e added",
  ic_ique: "-ic → -ique",
  ite: "-ty/-ity → -té/-ité",
  eux: "-ous → -eux/-euse",
  k_to_c: "k → c / qu",
  consonant: "Consonant adjustment",
  formatting: "Formatting / hyphenation",
  verb_alignment: "Verb alignment",
};

function normalize(s) {
  return (s || "").toLowerCase().trim();
}

export default function App() {
  const [tab, setTab] = useState("browse");
  const [tier, setTier] = useState("2");
  const [rule, setRule] = useState("all");
  const [pos, setPos] = useState("all");
  const [hideCare, setHideCare] = useState(true);
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const base =
      tier === "A"
        ? (DATA.tiers.A || []).map((x) => ({ ...x, tier: "A" }))
        : (DATA.tiers["2"] || []).map((x) => ({ ...x, tier: "2" }));

    return base.filter((item) => {
      if (hideCare && item.care) return false;
      if (tier === "2" && rule !== "all" && item.rule !== rule) return false;
      if (pos !== "all" && item.pos !== pos) return false;
      return true;
    });
  }, [tier, rule, pos, hideCare]);

  const filtered = useMemo(() => {
    const nq = normalize(q);
    if (!nq) return items;
    return items.filter(
      (item) => normalize(item.en).includes(nq) || normalize(item.fr).includes(nq)
    );
  }, [items, q]);

  const availableRules = useMemo(() => {
    const s = new Set((DATA.tiers["2"] || []).map((x) => x.rule).filter(Boolean));
    return Array.from(s).sort();
  }, []);

  const [cardIndex, setCardIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const [direction, setDirection] = useState("en-fr");

  const current = filtered[cardIndex % Math.max(filtered.length, 1)];

  function nextCard() {
    setFlip(false);
    setCardIndex((i) => i + 1);
  }

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial", padding: 20, maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 6 }}>Français pour Idiots — Free Web App</h1>
      <p style={{ marginTop: 0, color: "#555" }}>
        Browse Tier A & Tier 2 cognates, search instantly, and drill with flashcards.
      </p>

      <div style={{ display: "flex", gap: 8, margin: "14px 0" }}>
        {["browse", "search", "cards"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: tab === t ? "#f2f2f2" : "white",
              cursor: "pointer",
            }}
          >
            {t === "browse" ? "Browse" : t === "search" ? "Search" : "Flashcards"}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 10, marginBottom: 14 }}>
        <label>
          <div style={{ fontSize: 12, color: "#666" }}>Tier</div>
          <select
            value={tier}
            onChange={(e) => {
              setTier(e.target.value);
              setRule("all");
              setPos("all");
            }}
            style={{ width: "100%", padding: 8, borderRadius: 10, border: "1px solid #ddd" }}
          >
            <option value="A">Tier A (identical)</option>
            <option value="2">Tier 2 (near-identical)</option>
          </select>
        </label>

        <label>
          <div style={{ fontSize: 12, color: "#666" }}>Rule</div>
          <select
            value={rule}
            onChange={(e) => setRule(e.target.value)}
            disabled={tier !== "2"}
            style={{
              width: "100%",
              padding: 8,
              borderRadius: 10,
              border: "1px solid #ddd",
              opacity: tier === "2" ? 1 : 0.6,
            }}
          >
            <option value="all">All</option>
            {availableRules.map((k) => (
              <option key={k} value={k}>
                {RULE_LABELS[k] || k}
              </option>
            ))}
          </select>
        </label>

        <label>
          <div style={{ fontSize: 12, color: "#666" }}>Part of speech</div>
          <select
            value={pos}
            onChange={(e) => setPos(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 10, border: "1px solid #ddd" }}
          >
            <option value="all">All</option>
            <option value="noun/adj">Nouns/Adjectives</option>
            <option value="verb">Verbs</option>
          </select>
        </label>

        <label style={{ display: "flex", alignItems: "end", gap: 8 }}>
          <input type="checkbox" checked={hideCare} onChange={(e) => setHideCare(e.target.checked)} />
          <span style={{ fontSize: 14 }}>Hide “use with care”</span>
        </label>
      </div>

      {tab !== "browse" && (
        <div style={{ marginBottom: 14 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search English or French…"
            style={{ width: "100%", padding: 10, borderRadius: 12, border: "1px solid #ddd" }}
          />
          <div style={{ marginTop: 6, fontSize: 12, color: "#666" }}>Showing {filtered.length} item(s)</div>
        </div>
      )}

      {tab === "browse" && (
        <div>
          <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>Showing {items.length} item(s)</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {items.map((item, idx) => (
              <li key={idx} style={{ padding: "10px 12px", border: "1px solid #eee", borderRadius: 12, marginBottom: 8 }}>
                <b>{item.en}</b> → <b>{item.fr}</b>
                <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
                  {item.tier === "2" ? (RULE_LABELS[item.rule] || item.rule || "—") : "Identical spelling"} · {item.pos}
                  {item.care ? " · use with care" : ""}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab === "search" && (
        <div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {filtered.map((item, idx) => (
              <li key={idx} style={{ padding: "10px 12px", border: "1px solid #eee", borderRadius: 12, marginBottom: 8 }}>
                <b>{item.en}</b> → <b>{item.fr}</b>
                <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
                  {item.tier === "2" ? (RULE_LABELS[item.rule] || item.rule || "—") : "Identical spelling"} · {item.pos}
                  {item.care ? " · use with care" : ""}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab === "cards" && (
        <div>
          <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
            <select value={direction} onChange={(e) => setDirection(e.target.value)} style={{ padding: 8, borderRadius: 10, border: "1px solid #ddd" }}>
              <option value="en-fr">English → French</option>
              <option value="fr-en">French → English</option>
            </select>
            <button onClick={nextCard} style={{ padding: "8px 12px", borderRadius: 10, border: "1px solid #ddd", background: "white", cursor: "pointer" }}>
              Next
            </button>
          </div>

          {!current ? (
            <p>No cards match your filters.</p>
          ) : (
            <div
              onClick={() => setFlip((f) => !f)}
              style={{
                border: "1px solid #eee",
                borderRadius: 16,
                padding: 24,
                minHeight: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                userSelect: "none",
              }}
              title="Click to flip"
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 700 }}>
                  {!flip ? (direction === "en-fr" ? current.en : current.fr) : (direction === "en-fr" ? current.fr : current.en)}
                </div>
                <div style={{ marginTop: 10, fontSize: 12, color: "#666" }}>
                  Click to flip · {current.tier === "2" ? (RULE_LABELS[current.rule] || current.rule || "—") : "Identical spelling"} · {current.pos}
                  {current.care ? " · use with care" : ""}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <hr style={{ margin: "20px 0", border: "none", borderTop: "1px solid #eee" }} />
      <p style={{ fontSize: 12, color: "#666" }}>
        Data source: your 500-item PDF export. Deploy free on Netlify or Cloudflare Pages.
      </p>
    </div>
  );
}
