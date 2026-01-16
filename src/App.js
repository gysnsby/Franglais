import React, { useMemo, useState } from "react";

const DATA = {
  "tiers": {
    "A": [],
    "2": []
  }
};
const PRODUCT_NAME = "Dictionnaire Franglais";

const RULE_LABELS = {
  accent: "Accent ajouté",
  final_e: "E final ajouté",
  ic_ique: "-ic → -ique",
  ite: "-ty/-ity → -té/-ité",
  eux: "-ous → -eux/-euse",
  k_to_c: "k → c / qu",
  consonant: "Ajustement de consonnes",
  formatting: "Format / traits d’union",
  verb_alignment: "Verbes (alignement)"
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

  const pill = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    border: "1px solid #e7e7e7",
    padding: "6px 10px",
    borderRadius: 999,
    background: "#fff"
  };

  return (
    <div style={ padding: 20, maxWidth: 980, margin: "0 auto" }>
      <header style={ marginBottom: 12 }>
        <h1 style={ margin: "0 0 6px 0" }>{PRODUCT_NAME}</h1>
        <p style={ margin: 0, color: "#555" }>
          Un mini dictionnaire de mots identiques (Tier A) et quasi-identiques (Tier 2) — anglais → français.
        </p>
      </header>

      <div style={ display: "flex", gap: 8, margin: "14px 0" }>
        {["browse", "search", "cards"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: tab === t ? "#f2f2f2" : "white",
              cursor: "pointer"
            }
          >
            {t === "browse" ? "Parcourir" : t === "search" ? "Recherche" : "Cartes"}
          </button>
        ))}
      </div>

      <div style={ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 10, marginBottom: 14 }>
        <label style={ ...pill }>
          <span style={ fontSize: 12, color: "#666" }>Tier</span>
          <select
            value={tier}
            onChange={(e) => {
              setTier(e.target.value);
              setRule("all");
              setPos("all");
            }}
            style={ border: "none", outline: "none" }
          >
            <option value="A">Tier A (identique)</option>
            <option value="2">Tier 2 (quasi-identique)</option>
          </select>
        </label>

        <label style={ ...pill, opacity: tier === "2" ? 1 : 0.6 }>
          <span style={ fontSize: 12, color: "#666" }>Règle</span>
          <select
            value={rule}
            onChange={(e) => setRule(e.target.value)}
            disabled={tier !== "2"}
            style={ border: "none", outline: "none", background: "transparent" }
          >
            <option value="all">Toutes</option>
            {availableRules.map((k) => (
              <option key={k} value={k}>{RULE_LABELS[k] || k}</option>
            ))}
          </select>
        </label>

        <label style={ ...pill }>
          <span style={ fontSize: 12, color: "#666" }>Type</span>
          <select value={pos} onChange={(e) => setPos(e.target.value)} style={ border: "none", outline: "none" }>
            <option value="all">Tout</option>
            <option value="noun/adj">Noms / adjectifs</option>
            <option value="verb">Verbes</option>
          </select>
        </label>

        <label style={ ...pill }>
          <input type="checkbox" checked={hideCare} onChange={(e) => setHideCare(e.target.checked)} />
          <span style={ fontSize: 14 }>Masquer “prudence”</span>
        </label>
      </div>

      {tab !== "browse" && (
        <div style={ marginBottom: 14 }>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher (anglais ou français)…"
            style={ width: "100%", padding: 10, borderRadius: 12, border: "1px solid #ddd" }
          />
          <div style={ marginTop: 6, fontSize: 12, color: "#666" }>
            {filtered.length} résultat(s)
          </div>
        </div>
      )}

      {tab === "browse" && (
        <div>
          <div style={ fontSize: 12, color: "#666", marginBottom: 8 }>
            {items.length} mot(s)
          </div>
          <ul style={ listStyle: "none", padding: 0, margin: 0 }>
            {items.map((item, idx) => (
              <li key={idx} style={ padding: "10px 12px", border: "1px solid #eee", borderRadius: 12, marginBottom: 8 }>
                <b>{item.en}</b> → <b>{item.fr}</b>
                <div style={ fontSize: 12, color: "#666", marginTop: 4 }>
                  {item.tier === "2" ? (RULE_LABELS[item.rule] || item.rule || "—") : "Orthographe identique"} · {item.pos}
                  {item.care ? " · prudence" : ""}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab === "search" && (
        <div>
          <ul style={ listStyle: "none", padding: 0, margin: 0 }>
            {filtered.map((item, idx) => (
              <li key={idx} style={ padding: "10px 12px", border: "1px solid #eee", borderRadius: 12, marginBottom: 8 }>
                <b>{item.en}</b> → <b>{item.fr}</b>
                <div style={ fontSize: 12, color: "#666", marginTop: 4 }>
                  {item.tier === "2" ? (RULE_LABELS[item.rule] || item.rule || "—") : "Orthographe identique"} · {item.pos}
                  {item.care ? " · prudence" : ""}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab === "cards" && (
        <div>
          <div style={ display: "flex", gap: 10, marginBottom: 10 }>
            <select value={direction} onChange={(e) => setDirection(e.target.value)} style={ padding: 8, borderRadius: 10, border: "1px solid #ddd" }>
              <option value="en-fr">Anglais → Français</option>
              <option value="fr-en">Français → Anglais</option>
            </select>
            <button onClick={nextCard} style={ padding: "8px 12px", borderRadius: 10, border: "1px solid #ddd", background: "white", cursor: "pointer" }>
              Suivant
            </button>
          </div>

          {!current ? (
            <p>Aucune carte ne correspond à vos filtres.</p>
          ) : (
            <div
              onClick={() => setFlip((f) => !f)}
              style={
                border: "1px solid #eee",
                borderRadius: 16,
                padding: 24,
                minHeight: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                userSelect: "none",
              }
              title="Cliquer pour retourner"
            >
              <div style={ textAlign: "center" }>
                <div style={ fontSize: 28, fontWeight: 700 }>
                  {!flip ? (direction === "en-fr" ? current.en : current.fr) : (direction === "en-fr" ? current.fr : current.en)}
                </div>
                <div style={ marginTop: 10, fontSize: 12, color: "#666" }>
                  Cliquer pour retourner · {current.tier === "2" ? (RULE_LABELS[current.rule] || current.rule || "—") : "Orthographe identique"} · {current.pos}
                  {current.care ? " · prudence" : ""}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <footer style={ marginTop: 18, fontSize: 12, color: "#777" }>
        Données : Tier A + Tier 2. Version web gratuite.
      </footer>
    </div>
  );
}
