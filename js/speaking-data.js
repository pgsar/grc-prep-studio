// ============================================================
//  speaking-data.js — Aggiorna questo file per aggiungere
//  conferenze e speaking engagement.
//
//  Il sistema divide automaticamente upcoming / past
//  in base alla data odierna.
//
//  Campi:
//    id        — identificatore univoco (stringa, no spazi)
//    date      — "YYYY-MM-DD" (usato per ordinamento e split)
//    dateLabel — stringa leggibile mostrata all'utente
//    badge     — etichetta del badge (es. "Keynote", "Speaker", "CyberWar")
//    titleEN   — titolo in inglese (opzionale, es. talk title)
//    titleIT   — titolo in italiano (opzionale)
//    eventEN   — nome evento in inglese
//    eventIT   — nome evento in italiano
//    locationEN — luogo in inglese
//    locationIT — luogo in italiano (opzionale, se diverso)
//    link      — URL esterno (opzionale, es. pagina conferenza)
// ============================================================

const SPEAKING = [

  // ── 2026 ──────────────────────────────────────────────────
  {
    id: "isaca-grc-sandiego-2026",
    date: "2026-08-17",
    dateLabel: "August 17, 2026",
    badge: "Keynote",
    titleEN: "AI and Compliance: Between Hype and Handcuffs",
    titleIT: "AI and Compliance: Between Hype and Handcuffs",
    eventEN: "ISACA GRC Conference 2026",
    eventIT: "ISACA GRC Conference 2026",
    locationEN: "San Diego, California, USA",
    locationIT: "San Diego, California, USA",
    link: ""
  },
  {
    id: "cyberwar-chicago-2026",
    date: "2026-08-26",
    dateLabel: "August 26, 2026",
    badge: "CyberWar",
    titleEN: "CyberWar — C-Suite Incident Management Simulation",
    titleIT: "CyberWar — Simulazione di Incident Management per il C-Suite",
    eventEN: "In collaboration with ISACA Chicago Chapter",
    eventIT: "In collaborazione con ISACA Chicago Chapter",
    locationEN: "Chicago, Illinois, USA",
    locationIT: "Chicago, Illinois, USA",
    link: ""
  },
  {
    id: "isaca-chicago-annual-2026",
    date: "2026-08-27",
    dateLabel: "August 27, 2026",
    badge: "Speaker",
    titleEN: "",
    titleIT: "",
    eventEN: "ISACA Chicago Chapter Annual Conference",
    eventIT: "ISACA Chicago Chapter Annual Conference",
    locationEN: "Chicago, Illinois, USA",
    locationIT: "Chicago, Illinois, USA",
    link: ""
  },
  {
    id: "abit-2026",
    date: "2026-06-01",
    dateLabel: "2026",
    badge: "Speaker",
    titleEN: "",
    titleIT: "",
    eventEN: "ABIT 2026 — Annual ISACA European Conference",
    eventIT: "ABIT 2026 — Conferenza Annuale ISACA Europea",
    locationEN: "Bratislava, Slovakia",
    locationIT: "Bratislava, Slovacchia",
    link: ""
  },

  // ── 2025 ──────────────────────────────────────────────────
  {
    id: "abit-2025",
    date: "2025-06-01",
    dateLabel: "2025",
    badge: "Speaker",
    titleEN: "",
    titleIT: "",
    eventEN: "ABIT 2025 — Annual ISACA European Conference",
    eventIT: "ABIT 2025 — Conferenza Annuale ISACA Europea",
    locationEN: "Bratislava, Slovakia",
    locationIT: "Bratislava, Slovacchia",
    link: ""
  },
  {
    id: "isaca-belgrade-2025",
    date: "2025-01-01",
    dateLabel: "2025",
    badge: "Speaker",
    titleEN: "",
    titleIT: "",
    eventEN: "ISACA Belgrade Chapter Annual Conference",
    eventIT: "ISACA Belgrade Chapter — Conferenza Annuale",
    locationEN: "Belgrade, Serbia",
    locationIT: "Belgrado, Serbia",
    link: ""
  },
  {
    id: "isaca-lisbon-2025",
    date: "2025-01-01",
    dateLabel: "2025",
    badge: "Speaker",
    titleEN: "",
    titleIT: "",
    eventEN: "ISACA Lisbon Chapter Annual Conference",
    eventIT: "ISACA Lisbon Chapter — Conferenza Annuale",
    locationEN: "Lisbon, Portugal",
    locationIT: "Lisbona, Portogallo",
    link: ""
  },

];
