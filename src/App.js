import React, { useEffect, useMemo, useRef, useState } from "react";

const PRODUCT_NAME = "Franglais";

const TAGLINE = "Franglais made easy";

// Put the hero image in: public/hero-franglais.png (GitHub: /public/hero-franglais.png)
const HERO_IMAGE_URL = `${process.env.PUBLIC_URL}/hero-franglais.png`;

/**
 * Decks
 * - Words: Tier A (identical) + Tier 2 (rule groups)
 * - Phrases: France-only high-frequency phrases you will HEAR in restaurants/shops
 */
const WORD_CARDS = [
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": true,
    "en": "art",
    "fr": "art",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "ballet",
    "fr": "ballet",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "brilliant",
    "fr": "brilliant",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "bus",
    "fr": "bus",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "central",
    "fr": "central",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "centre",
    "fr": "centre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "concert",
    "fr": "concert",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "different",
    "fr": "Different",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "direction",
    "fr": "direction",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "film",
    "fr": "film",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "final",
    "fr": "final",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "garage",
    "fr": "garage",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "hamburger",
    "fr": "hamburger",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "ignorant",
    "fr": "ignorant",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "important",
    "fr": "important",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "impossible",
    "fr": "impossible",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "internet",
    "fr": "internet",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "local",
    "fr": "local",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "magazine",
    "fr": "magazine",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "menu",
    "fr": "menu",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "minute",
    "fr": "minute",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "moment",
    "fr": "moment",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "moral",
    "fr": "moral",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "national",
    "fr": "national",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "normal",
    "fr": "normal",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "option",
    "fr": "option",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "permanent",
    "fr": "permanent",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "photo",
    "fr": "photo",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "pizza",
    "fr": "pizza",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "plan",
    "fr": "plan",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "port",
    "fr": "port",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "possible",
    "fr": "possible",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "prudent",
    "fr": "prudent",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "public",
    "fr": "public",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "question",
    "fr": "question",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "restaurant",
    "fr": "restaurant",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "robot",
    "fr": "robot",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "sandwich",
    "fr": "sandwich",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "service",
    "fr": "service",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "simple",
    "fr": "simple",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "solution",
    "fr": "solution",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "spaghetti",
    "fr": "spaghetti",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "special",
    "fr": "special",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "station",
    "fr": "station",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "steak",
    "fr": "steak",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "taxi",
    "fr": "taxi",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "ticket",
    "fr": "ticket",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "train",
    "fr": "train",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "triumphant",
    "fr": "triumphant",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "tunnel",
    "fr": "tunnel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "type",
    "fr": "type",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Exact matches",
    "newGroup": false,
    "en": "virus",
    "fr": "virus",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final r",
    "newGroup": true,
    "en": "To civilise",
    "fr": "civiliser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add final r",
    "newGroup": false,
    "en": "To organise",
    "fr": "organiser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add final r",
    "newGroup": false,
    "en": "To utilise",
    "fr": "utiliser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "cal → que",
    "newGroup": true,
    "en": "critical",
    "fr": "critique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "cal → que",
    "newGroup": false,
    "en": "Logical",
    "fr": "Logique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "cal → que",
    "newGroup": false,
    "en": "political",
    "fr": "politique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ct → t",
    "newGroup": true,
    "en": "effect",
    "fr": "effet",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ct → t",
    "newGroup": false,
    "en": "object",
    "fr": "objet",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ct → t",
    "newGroup": false,
    "en": "project",
    "fr": "projet",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "cy → tie",
    "newGroup": true,
    "en": "aristocracy",
    "fr": "aristocratie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "cy → tie",
    "newGroup": false,
    "en": "bureaucracy",
    "fr": "bureaucratie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "cy → tie",
    "newGroup": false,
    "en": "democracy",
    "fr": "démocratie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "a → e",
    "newGroup": true,
    "en": "banana",
    "fr": "banane",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "a → e",
    "newGroup": false,
    "en": "drama",
    "fr": "drame",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "a → e",
    "newGroup": false,
    "en": "gorilla",
    "fr": "gorille",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "a → e",
    "newGroup": false,
    "en": "idea",
    "fr": "Idée",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "al → el",
    "newGroup": true,
    "en": "criminal",
    "fr": "criminel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "al → el",
    "newGroup": false,
    "en": "manual",
    "fr": "manuel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "al → el",
    "newGroup": false,
    "en": "Material",
    "fr": "Matériel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "al → el",
    "newGroup": false,
    "en": "Natural",
    "fr": "Naturel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "al → el",
    "newGroup": false,
    "en": "usual",
    "fr": "usuel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "er → re",
    "newGroup": true,
    "en": "center",
    "fr": "centre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "er → re",
    "newGroup": false,
    "en": "December",
    "fr": "décembre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "er → re",
    "newGroup": false,
    "en": "Kilometer",
    "fr": "Kilomètre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "er → re",
    "newGroup": false,
    "en": "October",
    "fr": "octobre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "er → re",
    "newGroup": false,
    "en": "September",
    "fr": "septembre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "or → eur",
    "newGroup": true,
    "en": "actor",
    "fr": "acteur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "or → eur",
    "newGroup": false,
    "en": "dictator",
    "fr": "dictateur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "or → eur",
    "newGroup": false,
    "en": "director",
    "fr": "directeur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "or → eur",
    "newGroup": false,
    "en": "doctor",
    "fr": "docteur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "or → eur",
    "newGroup": false,
    "en": "horror",
    "fr": "horreur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ly → ement",
    "newGroup": true,
    "en": "correctly",
    "fr": "correctement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ly → ement",
    "newGroup": false,
    "en": "directly",
    "fr": "directement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ly → ement",
    "newGroup": false,
    "en": "exactly",
    "fr": "exactement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ly → ement",
    "newGroup": false,
    "en": "finally",
    "fr": "finalement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ly → ement",
    "newGroup": false,
    "en": "normally",
    "fr": "normalement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ly → ement",
    "newGroup": false,
    "en": "totally",
    "fr": "totalement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: e",
    "newGroup": true,
    "en": "aggregate",
    "fr": "aggrégat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: e",
    "newGroup": false,
    "en": "appetite",
    "fr": "appétit",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: e",
    "newGroup": false,
    "en": "chimpanzee",
    "fr": "chimpanzé",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: e",
    "newGroup": false,
    "en": "chocolate",
    "fr": "chocolat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: e",
    "newGroup": false,
    "en": "Debate",
    "fr": "Débat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: e",
    "newGroup": false,
    "en": "delicate",
    "fr": "délicat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: e",
    "newGroup": false,
    "en": "plate",
    "fr": "plat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: e",
    "newGroup": false,
    "en": "Universe",
    "fr": "Univers",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ate → er",
    "newGroup": true,
    "en": "celebrate",
    "fr": "Célébrer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ate → er",
    "newGroup": false,
    "en": "fascinate",
    "fr": "Fasciner",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ate → er",
    "newGroup": false,
    "en": "operate",
    "fr": "opérer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ate → er",
    "newGroup": false,
    "en": "To accelerate",
    "fr": "accélérer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ate → er",
    "newGroup": false,
    "en": "To accentuate",
    "fr": "accentuer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ate → er",
    "newGroup": false,
    "en": "To associate",
    "fr": "associer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ate → er",
    "newGroup": false,
    "en": "To estimate",
    "fr": "estimer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ate → er",
    "newGroup": false,
    "en": "To participate",
    "fr": "participer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ate → er",
    "newGroup": false,
    "en": "To terminate",
    "fr": "terminer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ry → ire",
    "newGroup": true,
    "en": "actuary",
    "fr": "actuaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ry → ire",
    "newGroup": false,
    "en": "arbitrary",
    "fr": "arbitraire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ry → ire",
    "newGroup": false,
    "en": "extraordinary",
    "fr": "extraordinaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ry → ire",
    "newGroup": false,
    "en": "history",
    "fr": "histoire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ry → ire",
    "newGroup": false,
    "en": "imaginary",
    "fr": "imaginaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ry → ire",
    "newGroup": false,
    "en": "memory",
    "fr": "mémoire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ry → ire",
    "newGroup": false,
    "en": "observatory",
    "fr": "observatoire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ry → ire",
    "newGroup": false,
    "en": "ordinary",
    "fr": "ordinaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ry → ire",
    "newGroup": false,
    "en": "salary",
    "fr": "salaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": true,
    "en": "identify",
    "fr": "Identifier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": false,
    "en": "justify",
    "fr": "Justifier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": false,
    "en": "modify",
    "fr": "Modifier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": false,
    "en": "qualify",
    "fr": "Qualifier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": false,
    "en": "solidify",
    "fr": "solidifier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": false,
    "en": "To classify",
    "fr": "classifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": false,
    "en": "To gratify",
    "fr": "gratifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": false,
    "en": "To notify",
    "fr": "notifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": false,
    "en": "To pacify",
    "fr": "pacifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": false,
    "en": "To simplify",
    "fr": "simplifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "y → ier",
    "newGroup": false,
    "en": "To unify",
    "fr": "unifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": true,
    "en": "ambitious",
    "fr": "ambitieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "anxious",
    "fr": "anxieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "contagious",
    "fr": "contagieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "curious",
    "fr": "curieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "Dangerous",
    "fr": "Dangereux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "delicious",
    "fr": "délicieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "Fabulous",
    "fr": "Fabuleux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "famous",
    "fr": "fameux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "furious",
    "fr": "furieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "Generous",
    "fr": "Généreux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "glorious",
    "fr": "glorieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "gracious",
    "fr": "gracieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "mysterious",
    "fr": "mystérieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "Nervous",
    "fr": "Nerveux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → eux",
    "newGroup": false,
    "en": "serious",
    "fr": "sérieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": true,
    "en": "activity",
    "fr": "activité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "agency",
    "fr": "agence",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "creativity",
    "fr": "créativité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "curiosity",
    "fr": "curiosité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "electricity",
    "fr": "électricité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "flexibility",
    "fr": "flexibilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "legality",
    "fr": "légalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "Liberty",
    "fr": "Liberté",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "nationality",
    "fr": "nationalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "necessity",
    "fr": "nécessité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "possibility",
    "fr": "possibilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "priority",
    "fr": "priorité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "productivity",
    "fr": "productivité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "publicity",
    "fr": "publicité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "Quality",
    "fr": "Qualité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "reality",
    "fr": "réalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "remedy",
    "fr": "remède",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "security",
    "fr": "sécurité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "stability",
    "fr": "stabilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "university",
    "fr": "université",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "urgency",
    "fr": "urgence",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → e",
    "newGroup": false,
    "en": "utility",
    "fr": "utilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": true,
    "en": "agony",
    "fr": "agonie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "battery",
    "fr": "batterie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "biography",
    "fr": "biographie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "biology",
    "fr": "biologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "category",
    "fr": "catégorie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "ceremony",
    "fr": "cérémonie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "colony",
    "fr": "colonie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "ecology",
    "fr": "écologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "economy",
    "fr": "économie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "energy",
    "fr": "énergie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "galaxy",
    "fr": "galaxie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "geography",
    "fr": "géographie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "geology",
    "fr": "géologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "industry",
    "fr": "industrie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "meteorology",
    "fr": "météorologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "pharmacy",
    "fr": "pharmacie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "philosophy",
    "fr": "philosophie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "photocopy",
    "fr": "photocopie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "psychology",
    "fr": "psychologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "sociology",
    "fr": "sociologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "strategy",
    "fr": "stratégie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → ie",
    "newGroup": false,
    "en": "theory",
    "fr": "théorie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": true,
    "en": "acrobatic",
    "fr": "acrobatique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "allergic",
    "fr": "allergique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "arithmetic",
    "fr": "arithmétique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "artistic",
    "fr": "artistique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "automatic",
    "fr": "automatique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "Basic",
    "fr": "Basique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "Catholic",
    "fr": "Catholique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "ceramic",
    "fr": "céramique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "classic",
    "fr": "classique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "Dramatic",
    "fr": "Dramatique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "economic",
    "fr": "économique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "electric",
    "fr": "électrique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "exotic",
    "fr": "exotique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "fantastic",
    "fr": "fantastique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "magic",
    "fr": "magique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "magnetic",
    "fr": "magnétique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "music",
    "fr": "musique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "panic",
    "fr": "panique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "plastic",
    "fr": "plastique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "Romantic",
    "fr": "Romantique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "scientific",
    "fr": "scientifique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "statistic",
    "fr": "statistique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ic → ique",
    "newGroup": false,
    "en": "systematic",
    "fr": "systématique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": true,
    "en": "accept",
    "fr": "Accepter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "comport",
    "fr": "comporter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "consult",
    "fr": "consulter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "contract",
    "fr": "contracter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "edit",
    "fr": "Éditer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "exalt",
    "fr": "exalter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "limit",
    "fr": "Limiter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "present",
    "fr": "Présenter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "resist",
    "fr": "Résister",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To adopt",
    "fr": "adopter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To confirm",
    "fr": "confirmer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To deport",
    "fr": "déporter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To desert",
    "fr": "déserter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To export",
    "fr": "exporter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To ferment",
    "fr": "fermenter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To import",
    "fr": "importer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To insist",
    "fr": "insister",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To insult",
    "fr": "insulter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To invent",
    "fr": "inventer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To lament",
    "fr": "lamenter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To march",
    "fr": "marcher",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To pay",
    "fr": "payer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To represent",
    "fr": "représenter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To touch",
    "fr": "Toucher",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: er",
    "newGroup": false,
    "en": "To transform",
    "fr": "Transformer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": true,
    "en": "abuse",
    "fr": "abuser",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "adore",
    "fr": "adorer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "capture",
    "fr": "Capturer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "change",
    "fr": "Changer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "decide",
    "fr": "Décider",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "encourage",
    "fr": "Encourager",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "excuse",
    "fr": "excuser",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "ignore",
    "fr": "Ignorer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "note",
    "fr": "Noter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "observe",
    "fr": "Observer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "reserve",
    "fr": "Réserver",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To accuse",
    "fr": "accuser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To admire",
    "fr": "admirer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To compare",
    "fr": "comparer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To complete",
    "fr": "compléter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To continue",
    "fr": "continuer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To converse",
    "fr": "converser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To declare",
    "fr": "déclarer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To determine",
    "fr": "déterminer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To examine",
    "fr": "examiner",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To imagine",
    "fr": "imaginer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To implore",
    "fr": "implorer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To invite",
    "fr": "inviter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To prepare",
    "fr": "préparer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: r",
    "newGroup": false,
    "en": "To refuse",
    "fr": "refuser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": true,
    "en": "cafe",
    "fr": "café",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "cafeteria",
    "fr": "cafétéria",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "cholera",
    "fr": "choléra",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "cinema",
    "fr": "cinéma",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "Decision",
    "fr": "Décision",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "decisive",
    "fr": "décisive",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "decoration",
    "fr": "décoration",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "Difference",
    "fr": "Différence",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "Edition",
    "fr": "Édition",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "elephant",
    "fr": "éléphant",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "Emotion",
    "fr": "Émotion",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "experience",
    "fr": "expérience",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "Frequent",
    "fr": "Fréquent",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "general",
    "fr": "général",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "Generation",
    "fr": "Génération",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "Illegal",
    "fr": "Illégal",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "inseparable",
    "fr": "inséparable",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "juvenile",
    "fr": "juvénile",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "Legal",
    "fr": "Légal",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "leopard",
    "fr": "léopard",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "metal",
    "fr": "métal",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "metro",
    "fr": "métro",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "nectar",
    "fr": "néctar",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "obedience",
    "fr": "obédience",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "ocean",
    "fr": "océan",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "Opera",
    "fr": "Opéra",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "operation",
    "fr": "opération",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "planetarium",
    "fr": "planétarium",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "presentation",
    "fr": "présentation",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "region",
    "fr": "région",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "reservation",
    "fr": "réservation",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "reunion",
    "fr": "réunion",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "Revolution",
    "fr": "Révolution",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "telephone",
    "fr": "téléphone",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "telescope",
    "fr": "télescope",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "television",
    "fr": "télévision",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: é",
    "newGroup": false,
    "en": "video",
    "fr": "vidéo",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": true,
    "en": "adult",
    "fr": "adulte",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "adverb",
    "fr": "adverbe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "alarm",
    "fr": "alarme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "artist",
    "fr": "artiste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "autograph",
    "fr": "autographe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "cabin",
    "fr": "cabine",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "candid",
    "fr": "candide",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "cereal",
    "fr": "céréale",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "class",
    "fr": "classe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "control",
    "fr": "contrôle",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "despotism",
    "fr": "despotisme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "dinosaur",
    "fr": "dinosaure",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "egoist",
    "fr": "egoïste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "firm",
    "fr": "firme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "group",
    "fr": "groupe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "Guitar",
    "fr": "Guitare",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "helicopter",
    "fr": "hélicoptère",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "idealism",
    "fr": "idéalisme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "insect",
    "fr": "insecte",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "list",
    "fr": "liste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "lucid",
    "fr": "lucide",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "meteor",
    "fr": "météore",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "optimism",
    "fr": "optimisme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "organism",
    "fr": "organisme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "planet",
    "fr": "planète",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "plant",
    "fr": "plante",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "problem",
    "fr": "problème",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "rich",
    "fr": "riche",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "salad",
    "fr": "salade",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "second",
    "fr": "seconde",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "socialist",
    "fr": "socialiste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "solid",
    "fr": "solide",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "soup",
    "fr": "soupe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "splendid",
    "fr": "splendide",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "stupid",
    "fr": "stupide",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "tourist",
    "fr": "touriste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add final e",
    "newGroup": false,
    "en": "uniform",
    "fr": "uniforme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": true,
    "en": "abundance",
    "fr": "abondance",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "address",
    "fr": "adresse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "adventure",
    "fr": "aventure",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "aggression",
    "fr": "agression",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "area",
    "fr": "aire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "August",
    "fr": "août",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "British",
    "fr": "Britannique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "cement",
    "fr": "ciment",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "chimney",
    "fr": "cheminée",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "circle",
    "fr": "cercle",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "coast",
    "fr": "côte",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "color",
    "fr": "couleur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "comment",
    "fr": "commentaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "demonstrate(to)",
    "fr": "démontrer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "desert (to)",
    "fr": "déserter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "destroy",
    "fr": "Détruire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "disaster",
    "fr": "désastre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "effective",
    "fr": "effective",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "equality",
    "fr": "égalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "especially",
    "fr": "spécialement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "establish",
    "fr": "Établir",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "example",
    "fr": "exemple",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "flower",
    "fr": "fleur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "function",
    "fr": "fonction",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "garden",
    "fr": "jardin",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "gas",
    "fr": "gaz",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "govern",
    "fr": "Gouverner",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "hospital",
    "fr": "hôpital",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "hour",
    "fr": "heure",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "immediately",
    "fr": "immédiatement",
    "pos": "adverb"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "island",
    "fr": "île",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "June",
    "fr": "Juin",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "lesson",
    "fr": "leçon",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "line",
    "fr": "ligne",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "name",
    "fr": "nom",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "naturally",
    "fr": "naturellement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "Painter",
    "fr": "Peintre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "Parliamentary",
    "fr": "Parlementaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "penguin",
    "fr": "pingouin",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "perfect",
    "fr": "parfait",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "perfume",
    "fr": "parfum",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "picnic",
    "fr": "pique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "real",
    "fr": "réel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "respond",
    "fr": "Répondre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "responsibility",
    "fr": "responsabilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "stomach",
    "fr": "estomac",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "study",
    "fr": "Étudier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "testimony",
    "fr": "témoignage",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "To appear",
    "fr": "apparaître",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "To describe",
    "fr": "décrire",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "To disappear",
    "fr": "disparaître",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "To escape",
    "fr": "échapper",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "To implore",
    "fr": "implorer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "To retire",
    "fr": "(se) retirer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "To trap",
    "fr": "attraper",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "trumpet",
    "fr": "trompette",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "use",
    "fr": "Utiliser",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Small spelling change",
    "newGroup": false,
    "en": "useful",
    "fr": "utile",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: ner",
    "newGroup": true,
    "en": "abandon",
    "fr": "Abandonner",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: te",
    "newGroup": false,
    "en": "Absolute",
    "fr": "Absolu",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "tely → ment",
    "newGroup": false,
    "en": "absolutely",
    "fr": "absolument",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ies → es",
    "newGroup": false,
    "en": "activities",
    "fr": "activités",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "n → in",
    "newGroup": false,
    "en": "African",
    "fr": "Africain",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: r",
    "newGroup": false,
    "en": "astronomer",
    "fr": "astronome",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: è",
    "newGroup": false,
    "en": "atmosphere",
    "fr": "atmosphère",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "k → que",
    "newGroup": false,
    "en": "bank",
    "fr": "banque",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: tte",
    "newGroup": false,
    "en": "bicycle",
    "fr": "bicyclette",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ck → quer",
    "newGroup": false,
    "en": "block",
    "fr": "Bloquer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: â",
    "newGroup": false,
    "en": "cable",
    "fr": "câble",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "or → rice",
    "newGroup": false,
    "en": "Calculator",
    "fr": "Calculatrice",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "tain → itaine",
    "newGroup": false,
    "en": "captain",
    "fr": "capitaine",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "d → te",
    "newGroup": false,
    "en": "card",
    "fr": "carte",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "r → ire",
    "newGroup": false,
    "en": "circular",
    "fr": "circulaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "tion → ison",
    "newGroup": false,
    "en": "combination",
    "fr": "combinaison",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "mittee → ite",
    "newGroup": false,
    "en": "committee",
    "fr": "comité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "on → un",
    "newGroup": false,
    "en": "common",
    "fr": "commun",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "cate → quer",
    "newGroup": false,
    "en": "communicate",
    "fr": "Communiquer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ny → gnie",
    "newGroup": false,
    "en": "company",
    "fr": "compagnie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: ing",
    "newGroup": false,
    "en": "confusing",
    "fr": "confus",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ond → ant",
    "newGroup": false,
    "en": "diamond",
    "fr": "diamant",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ary → naire",
    "newGroup": false,
    "en": "dictionary",
    "fr": "dictionnaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ly → e",
    "newGroup": false,
    "en": "difficultly",
    "fr": "difficulté",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: mail",
    "newGroup": false,
    "en": "email",
    "fr": "e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ous → e",
    "newGroup": false,
    "en": "enormous",
    "fr": "énorme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ance → ee",
    "newGroup": false,
    "en": "entrance",
    "fr": "entrée",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ntly → mment",
    "newGroup": false,
    "en": "evidently",
    "fr": "évidemment",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "gerate → erer",
    "newGroup": false,
    "en": "exaggerate",
    "fr": "exagérer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "im → mer",
    "newGroup": false,
    "en": "exclaim",
    "fr": "exclamer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "se → ce",
    "newGroup": false,
    "en": "exercise",
    "fr": "exercice",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: ç",
    "newGroup": false,
    "en": "facade",
    "fr": "façade",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "y → le",
    "newGroup": false,
    "en": "family",
    "fr": "famille",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: te",
    "newGroup": false,
    "en": "favorite",
    "fr": "favori",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ious → e",
    "newGroup": false,
    "en": "ferocious",
    "fr": "féroce",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "sh → r",
    "newGroup": false,
    "en": "finish",
    "fr": "Finir",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "l → illes",
    "newGroup": false,
    "en": "funeral",
    "fr": "funérailles",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "fe → e",
    "newGroup": false,
    "en": "giraffe",
    "fr": "girafe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: â",
    "newGroup": false,
    "en": "Grace",
    "fr": "Grâce",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ass → celer",
    "newGroup": false,
    "en": "harass",
    "fr": "Harceler",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "us → e",
    "newGroup": false,
    "en": "hippopotamus",
    "fr": "hippopotame",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "or → neur",
    "newGroup": false,
    "en": "honor",
    "fr": "honneur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: ô",
    "newGroup": false,
    "en": "hotel",
    "fr": "hôtel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "n → in",
    "newGroup": false,
    "en": "human",
    "fr": "humain",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ence → ance",
    "newGroup": false,
    "en": "independence",
    "fr": "indépendance",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "st → t",
    "newGroup": false,
    "en": "interest",
    "fr": "intérêt",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ting → sant",
    "newGroup": false,
    "en": "interesting",
    "fr": "intéressant",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: me",
    "newGroup": false,
    "en": "Kilogram",
    "fr": "Kilogramme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "age → e",
    "newGroup": false,
    "en": "Language",
    "fr": "Langue",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "s → tille",
    "newGroup": false,
    "en": "lens",
    "fr": "lentille",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "an → en",
    "newGroup": false,
    "en": "magician",
    "fr": "magicien",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "cent → que",
    "newGroup": false,
    "en": "magnificent",
    "fr": "magnifique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ner → iere",
    "newGroup": false,
    "en": "manner",
    "fr": "manière",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ette → nette",
    "newGroup": false,
    "en": "marionette",
    "fr": "marionnette",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ket → che",
    "newGroup": false,
    "en": "market",
    "fr": "marché",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "hanism → anisme",
    "newGroup": false,
    "en": "mechanism",
    "fr": "mécanisme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "l → ille",
    "newGroup": false,
    "en": "medal",
    "fr": "medaille",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: ner",
    "newGroup": false,
    "en": "mention",
    "fr": "Mentionner",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ate → uer",
    "newGroup": false,
    "en": "navigate",
    "fr": "Naviguer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ber → ero",
    "newGroup": false,
    "en": "number",
    "fr": "numéro",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ain → enir",
    "newGroup": false,
    "en": "obtain",
    "fr": "Obtenir",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ce → is",
    "newGroup": false,
    "en": "palace",
    "fr": "palais",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "er → ier",
    "newGroup": false,
    "en": "paper",
    "fr": "papier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "k → c",
    "newGroup": false,
    "en": "park",
    "fr": "parc",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ar → ier",
    "newGroup": false,
    "en": "Particular",
    "fr": "Particulier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ner → enaire",
    "newGroup": false,
    "en": "partner",
    "fr": "partenaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "port → eport",
    "newGroup": false,
    "en": "passport",
    "fr": "passeport",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ality → nalite",
    "newGroup": false,
    "en": "personality",
    "fr": "personnalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: ie",
    "newGroup": false,
    "en": "photograph",
    "fr": "photographie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: r",
    "newGroup": false,
    "en": "photographer",
    "fr": "photographe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "eer → nier",
    "newGroup": false,
    "en": "pioneer",
    "fr": "pionnier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ve → f",
    "newGroup": false,
    "en": "positive",
    "fr": "positif",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ss → der",
    "newGroup": false,
    "en": "possess",
    "fr": "Posséder",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ce → x",
    "newGroup": false,
    "en": "price",
    "fr": "prix",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ct → it",
    "newGroup": false,
    "en": "product",
    "fr": "produit",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "al → nel",
    "newGroup": false,
    "en": "professional",
    "fr": "professionnel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ly → ite",
    "newGroup": false,
    "en": "really",
    "fr": "réalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ar → ier",
    "newGroup": false,
    "en": "Regular",
    "fr": "Régulier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Add: at",
    "newGroup": false,
    "en": "result",
    "fr": "résultat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "k → he",
    "newGroup": false,
    "en": "rock",
    "fr": "roche",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "tivity → bilite",
    "newGroup": false,
    "en": "sensitivity",
    "fr": "sensibilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Drop: s",
    "newGroup": false,
    "en": "series",
    "fr": "série",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent: è",
    "newGroup": false,
    "en": "Sincere",
    "fr": "Sincère",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "cs → que",
    "newGroup": false,
    "en": "statistics",
    "fr": "statistique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ket → che",
    "newGroup": false,
    "en": "supermarket",
    "fr": "supermarché",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "ny → gner",
    "newGroup": false,
    "en": "To accompany",
    "fr": "accompagner",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "it → ettre",
    "newGroup": false,
    "en": "To admit",
    "fr": "admettre",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ze → ser",
    "newGroup": false,
    "en": "To analyze",
    "fr": "analyser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "unce → ncer",
    "newGroup": false,
    "en": "To announce",
    "fr": "annoncer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "horise → oriser",
    "newGroup": false,
    "en": "To authorise",
    "fr": "autoriser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: ir",
    "newGroup": false,
    "en": "To convert",
    "fr": "convertir",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "strate → trer",
    "newGroup": false,
    "en": "To demonstrate",
    "fr": "démontrer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Add: re",
    "newGroup": false,
    "en": "To depend",
    "fr": "dépendre",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ain → enir",
    "newGroup": false,
    "en": "To detain",
    "fr": "détenir",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ss → ter",
    "newGroup": false,
    "en": "To discuss",
    "fr": "discuter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "te → er",
    "newGroup": false,
    "en": "To distribute",
    "fr": "distribuer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "er → rer",
    "newGroup": false,
    "en": "To enter",
    "fr": "entrer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ty → fier",
    "newGroup": false,
    "en": "To identify",
    "fr": "identifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "t → er",
    "newGroup": false,
    "en": "To insert",
    "fr": "insérer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "upt → ompre",
    "newGroup": false,
    "en": "To interrupt",
    "fr": "interrompre",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ce → ire",
    "newGroup": false,
    "en": "To introduce",
    "fr": "introduire",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ate → uer",
    "newGroup": false,
    "en": "To investigate",
    "fr": "investiguer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "te → liser",
    "newGroup": false,
    "en": "To locate",
    "fr": "localiser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "tiate → cier",
    "newGroup": false,
    "en": "To negotiate",
    "fr": "négocier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "yze → iser",
    "newGroup": false,
    "en": "To paralyze",
    "fr": "paraliser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "ctice → tiquer",
    "newGroup": false,
    "en": "To practice",
    "fr": "pratiquer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "o → e",
    "newGroup": false,
    "en": "tomato",
    "fr": "tomate",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "al → nel",
    "newGroup": false,
    "en": "Traditional",
    "fr": "Traditionnel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "fic → ic",
    "newGroup": false,
    "en": "traffic",
    "fr": "trafic",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "te → r",
    "newGroup": false,
    "en": "unite",
    "fr": "Unir",
    "pos": "noun/adjective"
  }
];
const PHRASE_CARDS = [
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": true,
    "en": "Hello, sir/ma'am.",
    "fr": "Bonjour, monsieur / madame.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Good evening.",
    "fr": "Bonsoir, monsieur / madame.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Hi! (informal)",
    "fr": "Salut !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Welcome!",
    "fr": "Bienvenue !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Nice to meet you.",
    "fr": "Enchanté(e).",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "How are you? (formal)",
    "fr": "Comment allez-vous ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "How's it going?",
    "fr": "Ça va ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Please come in.",
    "fr": "Entrez, je vous en prie.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "One moment, please.",
    "fr": "Un instant, s'il vous plaît.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Please follow me.",
    "fr": "Suivez-moi, s'il vous plaît.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Excuse me.",
    "fr": "Excusez-moi.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Sorry? / Could you repeat?",
    "fr": "Pardon ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "I didn't catch that.",
    "fr": "Je n'ai pas compris.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "It's fine / No problem.",
    "fr": "Ce n'est pas grave.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Sorry, it's not possible.",
    "fr": "Désolé(e), ce n'est pas possible.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "After you!",
    "fr": "Après vous !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Thank you!",
    "fr": "Merci !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "You're welcome.",
    "fr": "De rien.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Goodbye!",
    "fr": "Au revoir !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Have a good day!",
    "fr": "Bonne journée !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": true,
    "en": "A table for two?",
    "fr": "Une table pour deux ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "How many people?",
    "fr": "Vous êtes combien ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Inside or outside?",
    "fr": "À l'intérieur ou en terrasse ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "This way, please.",
    "fr": "Par ici, s'il vous plaît.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Here is the menu.",
    "fr": "Voici la carte.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Would you like something to drink?",
    "fr": "Vous voulez boire quelque chose ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Still or sparkling?",
    "fr": "Plate ou pétillante ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "A carafe of water?",
    "fr": "Une carafe d'eau ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Are you ready to order?",
    "fr": "Vous êtes prêts à commander ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Go ahead, I'm listening.",
    "fr": "Je vous écoute.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Have you chosen?",
    "fr": "Vous avez choisi ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "What would you like?",
    "fr": "Qu'est-ce que vous prenez ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Anything else?",
    "fr": "Autre chose ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Starter / main / dessert?",
    "fr": "Entrée, plat, dessert ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "What would you like as a side?",
    "fr": "Et comme accompagnement ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Rare / medium / well done?",
    "fr": "Saignant, à point ou bien cuit ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Enjoy your meal!",
    "fr": "Bon appétit !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Here you go.",
    "fr": "Voilà.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Would you like bread?",
    "fr": "Vous voulez du pain ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Would you like some more?",
    "fr": "Vous en voulez encore ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Everything okay?",
    "fr": "Tout va bien ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "How was it?",
    "fr": "Ça a été ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Takeaway?",
    "fr": "À emporter ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Would you like coffee?",
    "fr": "Un café ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "The bill?",
    "fr": "L'addition ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": true,
    "en": "Can I help you?",
    "fr": "Je peux vous aider ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "Are you looking for something?",
    "fr": "Vous cherchez quelque chose ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "It's over there.",
    "fr": "C'est par là.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "Here you are.",
    "fr": "Voilà.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "This one?",
    "fr": "Celui-ci ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "What size?",
    "fr": "Quelle taille ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "What colour?",
    "fr": "Quelle couleur ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "Do you have a loyalty card?",
    "fr": "Vous avez la carte de fidélité ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "A bag?",
    "fr": "Un sac ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "Would you like a receipt?",
    "fr": "Vous voulez un ticket ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "That's all?",
    "fr": "C'est tout ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "Cash or card?",
    "fr": "En espèces ou par carte ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "Contactless?",
    "fr": "Sans contact ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "Enter your PIN, please.",
    "fr": "Composez votre code, s'il vous plaît.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "It's €…",
    "fr": "Ça fait … euros.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "It's on special offer.",
    "fr": "C'est en promotion.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "Sorry, we're out of stock.",
    "fr": "Désolé(e), il n'y en a plus.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "We close at …",
    "fr": "On ferme à …",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "Next, please.",
    "fr": "Suivant, s'il vous plaît.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Shops & Services",
    "newGroup": false,
    "en": "Have a nice day!",
    "fr": "Bonne journée !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": true,
    "en": "Tickets, please.",
    "fr": "Vos billets, s'il vous plaît.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Where are you going?",
    "fr": "Vous allez où ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "One-way or return?",
    "fr": "Aller simple ou aller-retour ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Which line?",
    "fr": "Quelle ligne ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Which platform?",
    "fr": "Quel quai ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Next stop: …",
    "fr": "Prochain arrêt : …",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Attention, doors closing.",
    "fr": "Attention, fermeture des portes.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Mind the gap.",
    "fr": "Attention à la marche.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "This train is delayed.",
    "fr": "Ce train a du retard.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "This train is cancelled.",
    "fr": "Ce train est annulé.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "On time.",
    "fr": "À l'heure.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Change at …",
    "fr": "Correspondance à …",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Exit this way.",
    "fr": "Sortie par ici.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Do you have a reservation?",
    "fr": "Vous avez une réservation ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Your passport, please.",
    "fr": "Votre passeport, s'il vous plaît.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Any bags to check in?",
    "fr": "Des bagages à enregistrer ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Boarding gate …",
    "fr": "Porte d'embarquement …",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Last call.",
    "fr": "Dernier appel.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Window or aisle?",
    "fr": "Hublot ou couloir ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Do you have anything to declare?",
    "fr": "Vous avez quelque chose à déclarer ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Your seat is …",
    "fr": "Votre place est …",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "We have arrived.",
    "fr": "Nous sommes arrivés.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Taxi?",
    "fr": "Un taxi ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "This is your stop.",
    "fr": "C'est votre arrêt.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Transport & Travel",
    "newGroup": false,
    "en": "Have a good trip!",
    "fr": "Bon voyage !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Everyday Interjections",
    "newGroup": true,
    "en": "Okay / agreed.",
    "fr": "D'accord.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Everyday Interjections",
    "newGroup": false,
    "en": "Sure / of course.",
    "fr": "Bien sûr.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Everyday Interjections",
    "newGroup": false,
    "en": "Right away.",
    "fr": "Tout de suite.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Everyday Interjections",
    "newGroup": false,
    "en": "Actually / in fact…",
    "fr": "En fait…",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Everyday Interjections",
    "newGroup": false,
    "en": "So… / well…",
    "fr": "Alors…",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Everyday Interjections",
    "newGroup": false,
    "en": "Well…",
    "fr": "Bon…",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Everyday Interjections",
    "newGroup": false,
    "en": "Uh…",
    "fr": "Euh…",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Everyday Interjections",
    "newGroup": false,
    "en": "No worries.",
    "fr": "Pas de souci.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Everyday Interjections",
    "newGroup": false,
    "en": "Sorry, I can't.",
    "fr": "Désolé(e), je ne peux pas.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Everyday Interjections",
    "newGroup": false,
    "en": "See you soon!",
    "fr": "À bientôt !",
    "pos": "phrase"
  }
];

const COMBO_CARDS = [
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a coffee.",
    "fr": "Je prends un café.",
    "pos": "sentence",
    "newGroup": true
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a tea.",
    "fr": "Je prends un thé.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a beer.",
    "fr": "Je prends une bière.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a glass of water.",
    "fr": "Je prends un verre d’eau.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a carafe of water.",
    "fr": "Je prends une carafe d’eau.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a pizza.",
    "fr": "Je prends une pizza.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a salad.",
    "fr": "Je prends une salade.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a sandwich.",
    "fr": "Je prends un sandwich.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a soup.",
    "fr": "Je prends une soupe.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take the menu.",
    "fr": "Je prends la carte.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take the bill.",
    "fr": "Je prends l’addition.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a ticket.",
    "fr": "Je prends un ticket.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take two coffees.",
    "fr": "Je prends deux cafés.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take two beers.",
    "fr": "Je prends deux bières.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a small pizza.",
    "fr": "Je prends une petite pizza.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a large beer.",
    "fr": "Je prends une grande bière.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a hot coffee.",
    "fr": "Je prends un café chaud.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a cold beer.",
    "fr": "Je prends une bière fraîche.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a dessert.",
    "fr": "Je prends un dessert.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take the dish of the day.",
    "fr": "Je prends le plat du jour.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take this one.",
    "fr": "Je prends celui-ci.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take that one.",
    "fr": "Je prends celui-là.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a bag.",
    "fr": "Je prends un sac.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a receipt.",
    "fr": "Je prends un ticket de caisse.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a bottle of water.",
    "fr": "Je prends une bouteille d’eau.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take sparkling water.",
    "fr": "Je prends de l’eau pétillante.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take still water.",
    "fr": "Je prends de l’eau plate.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a draft beer.",
    "fr": "Je prends une pression.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a coffee to go.",
    "fr": "Je prends un café à emporter.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take it.",
    "fr": "Je le prends.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a coffee.",
    "fr": "Je veux un café.",
    "pos": "sentence",
    "newGroup": true
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a tea.",
    "fr": "Je veux un thé.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a beer.",
    "fr": "Je veux une bière.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want water.",
    "fr": "Je veux de l’eau.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want sparkling water.",
    "fr": "Je veux de l’eau pétillante.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want still water.",
    "fr": "Je veux de l’eau plate.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a pizza.",
    "fr": "Je veux une pizza.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a salad.",
    "fr": "Je veux une salade.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a sandwich.",
    "fr": "Je veux un sandwich.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a dessert.",
    "fr": "Je veux un dessert.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want the menu.",
    "fr": "Je veux la carte.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want the bill.",
    "fr": "Je veux l’addition.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want this one.",
    "fr": "Je veux celui-ci.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want that one.",
    "fr": "Je veux celui-là.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a table.",
    "fr": "Je veux une table.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a table for two.",
    "fr": "Je veux une table pour deux.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want to sit outside.",
    "fr": "Je veux être en terrasse.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want to sit inside.",
    "fr": "Je veux être à l’intérieur.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a bag.",
    "fr": "Je veux un sac.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a receipt.",
    "fr": "Je veux un ticket de caisse.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want it.",
    "fr": "Je le veux.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want the dish of the day.",
    "fr": "Je veux le plat du jour.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want bread.",
    "fr": "Je veux du pain.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want another one.",
    "fr": "J’en veux un autre.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want to pay.",
    "fr": "Je veux payer.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want to order.",
    "fr": "Je veux commander.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a coffee.",
    "fr": "Je voudrais un café.",
    "pos": "sentence",
    "newGroup": true
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a tea.",
    "fr": "Je voudrais un thé.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a beer.",
    "fr": "Je voudrais une bière.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a glass of water.",
    "fr": "Je voudrais un verre d’eau.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a carafe of water.",
    "fr": "Je voudrais une carafe d’eau.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like sparkling water.",
    "fr": "Je voudrais de l’eau pétillante.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like still water.",
    "fr": "Je voudrais de l’eau plate.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a pizza.",
    "fr": "Je voudrais une pizza.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a salad.",
    "fr": "Je voudrais une salade.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a sandwich.",
    "fr": "Je voudrais un sandwich.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like the menu.",
    "fr": "Je voudrais la carte.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like the bill, please.",
    "fr": "Je voudrais l’addition, s’il vous plaît.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like this one.",
    "fr": "Je voudrais celui-ci.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like that one.",
    "fr": "Je voudrais celui-là.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a table for two.",
    "fr": "Je voudrais une table pour deux.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like to sit outside.",
    "fr": "Je voudrais être en terrasse.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like to pay.",
    "fr": "Je voudrais payer.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like to order.",
    "fr": "Je voudrais commander.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a bag.",
    "fr": "Je voudrais un sac.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a receipt.",
    "fr": "Je voudrais un ticket de caisse.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the service station?",
    "fr": "Pour aller à la station-service ?",
    "pos": "sentence",
    "newGroup": true
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the hotel?",
    "fr": "Pour aller à l’hôtel ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the restaurant?",
    "fr": "Pour aller au restaurant ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the café?",
    "fr": "Pour aller au café ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the market?",
    "fr": "Pour aller au marché ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the centre?",
    "fr": "Pour aller au centre-ville ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the museum?",
    "fr": "Pour aller au musée ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the beach?",
    "fr": "Pour aller à la plage ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the supermarket?",
    "fr": "Pour aller au supermarché ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the pharmacy?",
    "fr": "Pour aller à la pharmacie ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the hospital?",
    "fr": "Pour aller à l’hôpital ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the police station?",
    "fr": "Pour aller au commissariat ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the bus stop?",
    "fr": "Pour aller à l’arrêt de bus ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the taxi rank?",
    "fr": "Pour aller à la station de taxis ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the exit?",
    "fr": "Pour aller à la sortie ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the entrance?",
    "fr": "Pour aller à l’entrée ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the toilet?",
    "fr": "Pour aller aux toilettes ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the ticket office?",
    "fr": "Pour aller au guichet ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the platform?",
    "fr": "Pour aller au quai ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the line?",
    "fr": "Pour aller à la ligne ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the information desk?",
    "fr": "Pour aller à l’accueil ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the reception?",
    "fr": "Pour aller à la réception ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the car park?",
    "fr": "Pour aller au parking ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the bank?",
    "fr": "Pour aller à la banque ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the post office?",
    "fr": "Pour aller à la poste ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the city hall?",
    "fr": "Pour aller à la mairie ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the street?",
    "fr": "Pour aller à la rue ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the square?",
    "fr": "Pour aller à la place ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the airport?",
    "fr": "Pour aller à l’aéroport ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the metro?",
    "fr": "Pour aller au métro ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "Is there a café here?",
    "fr": "Il y a un café ici ?",
    "pos": "sentence",
    "newGroup": true
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "Is there a restaurant nearby?",
    "fr": "Il y a un restaurant près d’ici ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "Is there a supermarket around here?",
    "fr": "Il y a un supermarché par ici ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "Is there a pharmacy nearby?",
    "fr": "Il y a une pharmacie près d’ici ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "Is there a service station nearby?",
    "fr": "Il y a une station-service près d’ici ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "Is there a toilet here?",
    "fr": "Il y a des toilettes ici ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "Is there an entrance?",
    "fr": "Il y a une entrée ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "Is there an exit?",
    "fr": "Il y a une sortie ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a problem.",
    "fr": "Il y a un problème.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is time.",
    "fr": "Il y a le temps.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is no time.",
    "fr": "Il n’y a pas le temps.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a delay.",
    "fr": "Il y a du retard.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a change.",
    "fr": "Il y a un changement.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There are tickets.",
    "fr": "Il y a des billets.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a table.",
    "fr": "Il y a une table.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a menu.",
    "fr": "Il y a une carte.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a dish of the day today.",
    "fr": "Il y a un plat du jour aujourd’hui.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a promotion.",
    "fr": "Il y a une promotion.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a queue.",
    "fr": "Il y a une file d’attente.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a seat.",
    "fr": "Il y a une place.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is an announcement.",
    "fr": "Il y a une annonce.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a meeting point.",
    "fr": "Il y a un point de rendez-vous.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a bus.",
    "fr": "Il y a un bus.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a taxi.",
    "fr": "Il y a un taxi.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "There is a train.",
    "fr": "Il y a un train.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s open.",
    "fr": "C’est ouvert.",
    "pos": "sentence",
    "newGroup": true
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s closed.",
    "fr": "C’est fermé.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s possible.",
    "fr": "C’est possible.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s impossible.",
    "fr": "C’est impossible.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s free.",
    "fr": "C’est gratuit.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s expensive.",
    "fr": "C’est cher.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s cheap.",
    "fr": "C’est bon marché.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s ready.",
    "fr": "C’est prêt.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s finished.",
    "fr": "C’est terminé.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s perfect.",
    "fr": "C’est parfait.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s correct.",
    "fr": "C’est correct.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s OK.",
    "fr": "C’est OK.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s important.",
    "fr": "C’est important.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s simple.",
    "fr": "C’est simple.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s complicated.",
    "fr": "C’est compliqué.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s urgent.",
    "fr": "C’est urgent.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s late.",
    "fr": "C’est tard.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s early.",
    "fr": "C’est tôt.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s here.",
    "fr": "C’est ici.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s there.",
    "fr": "C’est là.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s on the left.",
    "fr": "C’est à gauche.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s on the right.",
    "fr": "C’est à droite.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s straight ahead.",
    "fr": "C’est tout droit.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s this way.",
    "fr": "C’est par ici.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s that way.",
    "fr": "C’est par là.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must pay.",
    "fr": "Je dois payer.",
    "pos": "sentence",
    "newGroup": true
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must order.",
    "fr": "Je dois commander.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must leave.",
    "fr": "Je dois partir.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must go.",
    "fr": "Je dois y aller.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must hurry.",
    "fr": "Je dois me dépêcher.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must wait.",
    "fr": "Je dois attendre.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must check.",
    "fr": "Je dois vérifier.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must confirm.",
    "fr": "Je dois confirmer.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must change.",
    "fr": "Je dois changer.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must cancel.",
    "fr": "Je dois annuler.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must reserve.",
    "fr": "Je dois réserver.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must call.",
    "fr": "Je dois appeler.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must find it.",
    "fr": "Je dois le trouver.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must sign.",
    "fr": "Je dois signer.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must show my ticket.",
    "fr": "Je dois montrer mon billet.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must validate my ticket.",
    "fr": "Je dois valider mon billet.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must get off here.",
    "fr": "Je dois descendre ici.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must get on here.",
    "fr": "Je dois monter ici.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must take the metro.",
    "fr": "Je dois prendre le métro.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must take a taxi.",
    "fr": "Je dois prendre un taxi.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need help.",
    "fr": "J’ai besoin d’aide.",
    "pos": "sentence",
    "newGroup": true
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need information.",
    "fr": "J’ai besoin d’informations.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need a ticket.",
    "fr": "J’ai besoin d’un billet.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need a receipt.",
    "fr": "J’ai besoin d’un ticket de caisse.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need water.",
    "fr": "J’ai besoin d’eau.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need a taxi.",
    "fr": "J’ai besoin d’un taxi.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need a doctor.",
    "fr": "J’ai besoin d’un médecin.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need a room.",
    "fr": "J’ai besoin d’une chambre.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need a reservation.",
    "fr": "J’ai besoin d’une réservation.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need a bag.",
    "fr": "J’ai besoin d’un sac.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need a map.",
    "fr": "J’ai besoin d’un plan.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need the address.",
    "fr": "J’ai besoin de l’adresse.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need the code.",
    "fr": "J’ai besoin du code.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need the password.",
    "fr": "J’ai besoin du mot de passe.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I take + noun",
    "en": "I will take a croissant.",
    "fr": "Je prends un croissant.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I want + noun",
    "en": "I want a croissant.",
    "fr": "Je veux un croissant.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I would like + noun",
    "en": "I would like a croissant.",
    "fr": "Je voudrais un croissant.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "How to get to + place",
    "en": "How do I get to the service station from here?",
    "fr": "Pour aller à la station-service d’ici ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "There is/are + noun",
    "en": "Is there a service station open now?",
    "fr": "Il y a une station-service ouverte maintenant ?",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s too far.",
    "fr": "C’est trop loin.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "It's + adjective",
    "en": "It’s very close.",
    "fr": "C’est tout près.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must change line.",
    "fr": "Je dois changer de ligne.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I must + verb",
    "en": "I must validate the ticket.",
    "fr": "Je dois valider le ticket.",
    "pos": "sentence"
  },
  {
    "type": "combo",
    "group": "I need + noun",
    "en": "I need the menu.",
    "fr": "J’ai besoin de la carte.",
    "pos": "sentence"
  }
];

// Persist everything we care about under ONE key (simple + robust).
// Shape: { mode: string, index: number, repeat: string[] }
const STORAGE_KEYS = {
  state: "df_state_v1",
};

function loadPersistedState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.state);
    const parsed = raw ? JSON.parse(raw) : null;
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

function savePersistedState(next) {
  try {
    window.localStorage.setItem(STORAGE_KEYS.state, JSON.stringify(next));
  } catch {}
}

// --- TTS: force a real French voice when available (iOS-friendly) ---
let __cachedVoices = null;
let __cachedFrenchVoice = null;

function getVoicesSafe() {
  if (!("speechSynthesis" in window)) return [];
  try {
    const v = window.speechSynthesis.getVoices();
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

// Heuristic: try to pick a French *female* voice first (names vary by OS)
function pickFrenchVoicePreferFemale(voices) {
  const fr = voices.filter((v) => (v.lang || "").toLowerCase().startsWith("fr"));
  if (!fr.length) return null;

  // Common female indicators across Apple/Microsoft/Google voice names
  const femaleHints = [
    "amelie",
    "amélie",
    "marie",
    "julie",
    "audrey",
    "celine",
    "céline",
    "lea",
    "léa",
    "sophie",
    "camille",
    "helene",
    "hélène",
    "female",
    "woman",
    "femme",
  ];

  const score = (v) => {
    const name = `${v.name || ""} ${v.voiceURI || ""}`.toLowerCase();
    let s = 0;
    for (const h of femaleHints) if (name.includes(h)) s += 5;
    // Prefer local/system voices slightly on iOS
    if (v.localService) s += 1;
    // Prefer exact fr-FR over fr-CA etc (France-first)
    if ((v.lang || "").toLowerCase() === "fr-fr") s += 2;
    return s;
  };

  fr.sort((a, b) => score(b) - score(a));
  return fr[0] || null;
}

// Call once to populate the voice cache; voices may load asynchronously on iOS.
function initVoiceCache() {
  if (!("speechSynthesis" in window)) return;

  const voicesNow = getVoicesSafe();
  if (voicesNow.length) {
    __cachedVoices = voicesNow;
    __cachedFrenchVoice = pickFrenchVoicePreferFemale(voicesNow);
  }

  window.speechSynthesis.onvoiceschanged = () => {
    const v = getVoicesSafe();
    if (v.length) {
      __cachedVoices = v;
      __cachedFrenchVoice = pickFrenchVoicePreferFemale(v);
    }
  };
}

function safeSpeak(text, lang = "fr-FR") {
  if (!("speechSynthesis" in window)) return false;

  try {
    // Ensure voices are initialized
    if (!__cachedVoices) {
      __cachedVoices = getVoicesSafe();
      __cachedFrenchVoice = pickFrenchVoicePreferFemale(__cachedVoices);
    }

    window.speechSynthesis.cancel();

    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.95;

    // If we have a real French voice, force it (prevents iOS English fallback)
    if (__cachedFrenchVoice) {
      u.voice = __cachedFrenchVoice;
      if (__cachedFrenchVoice.lang) u.lang = __cachedFrenchVoice.lang;
    }

    window.speechSynthesis.speak(u);
    return true;
  } catch {
    return false;
  }
}


function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function App() {
  const [mode, setMode] = useState(() => {
    const s = loadPersistedState();
    const m = s?.mode;
    return m === "words120" || m === "phrases100" || m === "combos" || m === "words400" || m === "repeat"
      ? m
      : "words120";
  });

  const [repeatSet, setRepeatSet] = useState(() => {
    const s = loadPersistedState();
    const arr = Array.isArray(s?.repeat) ? s.repeat : [];
    return new Set(arr);
  });
  const [replayedThisCard, setReplayedThisCard] = useState(false);

  useEffect(() => {
    if (mode === "repeat" && repeatSet.size === 0) {
      setMode("words120");
    }
  }, [mode, repeatSet]);

  const cardKey = (c) => {
    const t = c?.type || (mode === "phrases100" ? "phrase" : mode === "combos" ? "combo" : "word");
    return `${t}::${String(c?.en || "").trim()}::${String(c?.fr || "").trim()}`;
  };

  const persistRepeatSet = (nextSet) => {
    // Repeat list is persisted via the single state object (see effect below)
    // Keeping this helper so the rest of the code stays minimal.
    return nextSet;
  };

  const addToRepeat = (c) => {
    const k = cardKey(c);
    setRepeatSet((prev) => {
      const next = new Set(prev);
      next.add(k);
      persistRepeatSet(next);
      return next;
    });
  };

  const removeFromRepeat = (c) => {
    const k = cardKey(c);
    setRepeatSet((prev) => {
      if (!prev.has(k)) return prev;
      const next = new Set(prev);
      next.delete(k);
      persistRepeatSet(next);
      return next;
    });
  };



  const deck = useMemo(() => {
    if (mode === "phrases100") return PHRASE_CARDS.slice(0, 100);
    if (mode === "combos") return COMBO_CARDS;
    if (mode === "repeat") {
      const all = [
        ...WORD_CARDS.map((c, i) => ({ ...c, __deck: i < 120 ? "words120" : "words400" })),
        ...PHRASE_CARDS.slice(0, 100).map((c) => ({ ...c, __deck: "phrases100" })),
        ...COMBO_CARDS.map((c) => ({ ...c, __deck: "combos" })),
      ];
      const keep = new Set(repeatSet);
      return all.filter((c) => keep.has(cardKey(c)));
    }
    if (mode === "words400") return WORD_CARDS.slice(120);
    // default: first-pass words
    return WORD_CARDS.slice(0, 120);
  }, [mode, repeatSet]);

  const DEFAULT_INDICES = {
    words120: 0,
    phrases100: 0,
    combos: 0,
    words400: 0,
    repeat: 0,
  };

  const [indices, setIndices] = useState(() => {
    const s = loadPersistedState();
    const obj = s?.indices && typeof s.indices === "object" ? s.indices : null;
    const merged = { ...DEFAULT_INDICES, ...(obj || {}) };

    // Normalize to non-negative integers
    for (const k of Object.keys(merged)) {
      const v = Number(merged[k]);
      merged[k] = Number.isFinite(v) ? Math.max(0, Math.trunc(v)) : 0;
    }
    return merged;
  });

  const index = Number.isFinite(Number(indices[mode]))
    ? Math.max(0, Math.trunc(Number(indices[mode])))
    : 0;

  const setIndex = (updater) => {
    setIndices((prev) => {
      const cur = Number.isFinite(Number(prev[mode]))
        ? Math.max(0, Math.trunc(Number(prev[mode])))
        : 0;
      const next = typeof updater === "function" ? updater(cur) : updater;
      const nextInt = Number.isFinite(Number(next))
        ? Math.max(0, Math.trunc(Number(next)))
        : 0;
      return { ...prev, [mode]: nextInt };
    });
  };
  const [revealed, setRevealed] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const autoTimersRef = useRef([]);
  const total = deck.length;

  // Prime voice list on mount (important on iOS)
  useEffect(() => {
    initVoiceCache();
  }, []);

  // Keep index in range whenever the deck changes (or when switching modes)
  useEffect(() => {
    setIndex((i) => clamp(i, 0, Math.max(0, total - 1)));
    setRevealed(false);
    setReplayedThisCard(false);
  }, [mode, total]);

  // Persist EVERYTHING under one key.
  useEffect(() => {
    savePersistedState({
      mode,
      indices,
      repeat: Array.from(repeatSet),
    });
  }, [mode, indices, repeatSet]);


  const card = deck[index] || null;

  function clearAutoTimers() {
    autoTimersRef.current.forEach((t) => clearTimeout(t));
    autoTimersRef.current = [];
  }

  function queueAuto(fn, ms) {
    const t = setTimeout(fn, ms);
    autoTimersRef.current.push(t);
  }

  function nextCard() {
    if (mode === "repeat" && card && !replayedThisCard) {
      removeFromRepeat(card);
    }
    clearAutoTimers();
    setRevealed(false);
    setIndex((i) => clamp(i + 1, 0, total - 1));
  }

  function prevCard() {
    if (mode === "repeat" && card && !replayedThisCard) {
      removeFromRepeat(card);
    }
    clearAutoTimers();
    setRevealed(false);
    setIndex((i) => clamp(i - 1, 0, total - 1));
  }

  function resetProgress() {
    clearAutoTimers();
    setIndex(0);
    setRevealed(false);
  }

  function revealAndSpeak() {
    setRevealed(true);
    if (!card) return;
    safeSpeak(card.fr, "fr-FR");

    if (autoPlay) {
      // advance after speech starts; conservative delay
      queueAuto(() => {
        if (index < total - 1) nextCard();
      }, 4200);
    }
  }

  // Auto-flow: if autoplay is on, reveal + speak, then advance.
  useEffect(() => {
    clearAutoTimers();
    if (!autoPlay) return;

    setRevealed(false);
    queueAuto(() => {
      revealAndSpeak();
    }, 3600);

    return () => clearAutoTimers();
  }, [autoPlay, index, mode]);

  // Build the prompt line
  const prompt = useMemo(() => {
    if (!card) return "";
    if (card.type === "phrase") {
      return "Listen for the French phrase (try to repeat it).";
    }
    if (card.type === "combo") {
      return "Say the French sentence (or pattern).";
    }
    const pos = card.pos === "verb" ? "verb" : "word";
    return pos === "verb" ? "Say the French verb." : "Say the French word.";
  }, [card]);

  if (!card) {
    return (
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: 14,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          color: "#111",
        }}
      >
        <h1 style={{ margin: "10px 0 6px" }}>{PRODUCT_NAME}</h1>
            <div style={{ marginTop: 0, opacity: 0.8, fontSize: 14 }}>
              Words you replay will be added to your repeat list.
            </div>
        <p>No cards found.</p>
      </div>
    );
  }

  
  const modeSelector = (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
<select
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  style={{
                    padding: 10,
                    borderRadius: 12,
                    border: "1px solid #111",
                    background: "white",
                    color: "#111",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    maxWidth: "100%",
                  }}
                  aria-label="Mode"
                >
                  <option value="words120">120 Franglais Words</option>
                  <option value="phrases100">100 Essential Phrases</option>
                  <option value="combos">200 Combos</option>
                  <option value="words400">400+ Easy Words</option>
                  {repeatSet.size > 0 ? <option value="repeat">Words to Repeat</option> : null}
                </select>
              </div>
  );

  return (
    <div style={{ background: "#F7C948", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: 14,
          paddingTop: 10,
          paddingBottom: 10,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          color: "#111",
        }}
      >
        {/* Hero (top third) */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "34vh",
            minHeight: 220,
            maxHeight: 320,
            borderRadius: 22,
            overflow: "hidden",
                        boxShadow: "0 10px 28px rgba(0,0,0,0.18)",
            marginBottom: 12,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${HERO_IMAGE_URL})`,
              objectFit: "contain",
              objectPosition: "center top",
              opacity: 0.9,
              zIndex: 0,
              pointerEvents: "none", 
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 65%, rgba(247,201,72,0.12) 100%)",
              zIndex: 1,
            }}
          /><div
            style={{
              position: "relative",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: 16,
              gap: 12,
            }}
          >
            <div style={{ maxWidth: "70%" }}>
              <div style={{ fontSize: 34, fontWeight: 900, letterSpacing: -0.5, lineHeight: 1.05 }}>
                {PRODUCT_NAME}
              </div>
              <div style={{ marginTop: 6, fontSize: 14, fontWeight: 800, color: "rgba(0,0,0,0.75)" }}>
                {TAGLINE}
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.92)",
                borderRadius: 18,
                padding: "8px 10px",
                border: "1px solid rgba(0,0,0,0.10)",
                boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
                backdropFilter: "blur(6px)",
                minWidth: 230,
              }}
            >
              {/* existing selector UI */}
              {modeSelector}
            </div>
          </div>
        </div>

        {/* Pale yellow outer + lighter inner content area */}
        <div style={{ background: "rgba(255,255,255,0.35)", borderRadius: 24, padding: 12 }}>
          <div
            style={{
              background: "#FFF7CC",
              borderRadius: 20,
              padding: 14,
              boxShadow: "0 8px 18px rgba(0,0,0,0.10)",
            }}
          >
{/* Progress */}
        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", gap: 10 }}>
          <div style={{ fontSize: 13, color: "#555" }}>
            {index + 1} / {total}
          </div>
          <div style={{ fontSize: 13, color: "#555" }}>
            {card.newGroup ? <strong>NEW GROUP:</strong> : "Group:"}{" "}
            <span style={{ fontWeight: 700 }}>{card.group}</span>
          </div>
        </div>

        {/* Card */}
        <div
          style={{
            marginTop: 12,
            background: "white",
            borderRadius: 18,
            padding: 14,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            border: "1px solid #eee",
          }}
        >
          <div style={{ fontSize: 13, color: "#555", fontWeight: 700 }}>English</div>

          <div style={{ marginTop: 6, fontSize: 28, fontWeight: 800, lineHeight: 1.1 }}>{card.en}</div>

          <div style={{ marginTop: 10, fontSize: 13, color: "#555" }}>{prompt}</div>

          {/* Mic / Reveal */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 12,
              gap: 12,
            }}
          >
            <button
              onClick={() => {
                if (!revealed) {
                  revealAndSpeak();
                } else {
                  // Replay => add to Repeat List
                  addToRepeat(card);
                  setReplayedThisCard(true);
                  safeSpeak(card.fr, "fr-FR");
                }
              }}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: 12,
                borderRadius: 16,
                border: "1px solid #ddd",
                background: revealed ? "white" : "black",
                color: revealed ? "#111" : "white",
                fontWeight: 800,
                cursor: "pointer",
              }}
              title={revealed ? "Replay French audio" : "Reveal + play French"}
            >
              {revealed ? "Replay" : "Reveal"}
            </button>
          </div>

          {/* Reveal area */}
          <div
            style={{
              marginTop: 12,
              padding: 12,
              borderRadius: 16,
              background: revealed ? "#f3f7ff" : "#fafafa",
              border: "1px solid #eee",
            }}
          >
            <div style={{ fontSize: 13, color: "#555", fontWeight: 700 }}>French</div>
            <div style={{ marginTop: 6, fontSize: 28, fontWeight: 900, lineHeight: 1.1 }}>
              {revealed ? card.fr : "—"}
            </div>
            <div style={{ marginTop: 6, fontSize: 12, color: "#666" }}>
              {revealed ? "Tap Replay to hear it again." : "Tap Reveal to show + hear the French."}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ marginTop: 12 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={prevCard}
              style={{
                padding: 12,
                borderRadius: 14,
                border: "1px solid #111",
                background: "white",
                color: "#111",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                minWidth: 90,
                whiteSpace: "nowrap",
                opacity: index <= 0 ? 0.5 : 1,
              }}
              disabled={index <= 0}
              title="Back"
            >
              Back
            </button>

            <button
              onClick={nextCard}
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 14,
                border: "1px solid #111",
                background: "#111",
                color: "white",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                opacity: index >= total - 1 ? 0.5 : 1,
              }}
              disabled={index >= total - 1}
            >
              Next
            </button>

            <button
              onClick={() => {
                clearAutoTimers();
                setRevealed(false);
                setAutoPlay((v) => !v);
              }}
              style={{
                padding: 12,
                borderRadius: 14,
                border: "1px solid #111",
                background: "white",
                color: "#111",
                cursor: "pointer",
                fontWeight: 700,
                minWidth: 130,
                whiteSpace: "nowrap",
              }}
              title="Toggle Auto Play"
            >
              {autoPlay ? "Manual Play" : "Auto Play"}
            </button>

            <button
              onClick={resetProgress}
              style={{
                padding: 12,
                borderRadius: 14,
                border: "1px solid #ddd",
                background: "white",
                color: "#111",
                cursor: "pointer",
                minWidth: 90,
                whiteSpace: "nowrap",
              }}
              title="Reset progress"
            >
              Reset
            </button>
          </div>
        </div>

        <div style={{ marginTop: 10, fontSize: 12, color: "#777" }}>
          Tip: Use Next to move through cards. Tap the bar to hear the French again.
        </div>
          </div>
        </div>

      </div>
    </div>
  );
}
