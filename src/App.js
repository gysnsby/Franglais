import React, { useEffect, useMemo, useRef, useState } from "react";

const PRODUCT_NAME = "Dictionnaire Franglais";

/**
 * Decks
 * - Words: Tier A (identical) + Tier 2 (rule groups)
 * - Phrases: France-only high-frequency phrases you will HEAR in restaurants/shops
 */
const WORD_CARDS = [
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": true,
    "en": "art",
    "fr": "art",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "internet",
    "fr": "internet",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "restaurant",
    "fr": "restaurant",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "ballet",
    "fr": "ballet",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "magazine",
    "fr": "magazine",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "robot",
    "fr": "robot",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "bus",
    "fr": "bus",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "menu",
    "fr": "menu",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "sandwich",
    "fr": "sandwich",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "concert",
    "fr": "concert",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "moment",
    "fr": "moment",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "spaghetti",
    "fr": "spaghetti",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "film",
    "fr": "film",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "normal",
    "fr": "normal",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "steak",
    "fr": "steak",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "final",
    "fr": "final",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "pizza",
    "fr": "pizza",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "taxi",
    "fr": "taxi",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "garage",
    "fr": "garage",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "port",
    "fr": "port",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "tunnel",
    "fr": "tunnel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "hamburger",
    "fr": "hamburger",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "possible",
    "fr": "possible",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "type",
    "fr": "type",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "important",
    "fr": "important",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "public",
    "fr": "public",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Identical spelling",
    "newGroup": false,
    "en": "virus",
    "fr": "virus",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": true,
    "en": "atmosphere",
    "fr": "atmosphère",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "cable",
    "fr": "câble",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "cafe",
    "fr": "café",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "cafeteria",
    "fr": "cafétéria",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "cholera",
    "fr": "choléra",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "cinema",
    "fr": "cinéma",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Decision",
    "fr": "Décision",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "decisive",
    "fr": "décisive",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "decoration",
    "fr": "décoration",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "delicate",
    "fr": "délicat-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Difference",
    "fr": "Différence",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "disgrace",
    "fr": "disgrâce",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Edition",
    "fr": "Édition",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "elephant",
    "fr": "éléphant",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Emotion",
    "fr": "Émotion",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "experience",
    "fr": "expérience",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "facade",
    "fr": "façade",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Frequent",
    "fr": "Fréquent",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Generation",
    "fr": "Génération",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Grace",
    "fr": "Grâce",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "hotel",
    "fr": "hôtel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Illegal",
    "fr": "Illégal",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "incredible",
    "fr": "incrédible",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "incredible",
    "fr": "incrédíble",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "inseparable",
    "fr": "inséparable",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "juvenile",
    "fr": "juvénile",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Legal",
    "fr": "Légal",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "leopard",
    "fr": "léopard",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "metal",
    "fr": "métal",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "metro",
    "fr": "métro",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "nectar",
    "fr": "néctar",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "obedience",
    "fr": "obédience",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "ocean",
    "fr": "océan",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Opera",
    "fr": "Opéra",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "operation",
    "fr": "opération",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "planetarium",
    "fr": "planétarium",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "present",
    "fr": "présent",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "presentation",
    "fr": "présentation",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "region",
    "fr": "région",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "reunion",
    "fr": "réunion",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Revolution",
    "fr": "Révolution",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "Sincere",
    "fr": "Sincère",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "special",
    "fr": "spécial",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "telephone",
    "fr": "téléphone",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "telescope",
    "fr": "télescope",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Accent added",
    "newGroup": false,
    "en": "television",
    "fr": "télévision",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": true,
    "en": "adult",
    "fr": "adulte",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "adverb",
    "fr": "adverbe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "alarm",
    "fr": "alarme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "artist",
    "fr": "artiste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "autograph",
    "fr": "autographe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "brilliant",
    "fr": "brilliant-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "cabin",
    "fr": "cabine",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "candid",
    "fr": "candide",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "cereal",
    "fr": "céréale",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "class",
    "fr": "classe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "control",
    "fr": "contrôle",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "despotism",
    "fr": "despotisme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "different",
    "fr": "différent-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "different",
    "fr": "Different-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "dinosaur",
    "fr": "dinosaure",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "egoist",
    "fr": "égoïste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "egoist",
    "fr": "egoïste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "firm",
    "fr": "firme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "general",
    "fr": "général-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "group",
    "fr": "groupe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "Guitar",
    "fr": "Guitare",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "helicopter",
    "fr": "hélicoptère",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "idealism",
    "fr": "idéalisme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "ignorant",
    "fr": "ignorant-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "important",
    "fr": "important-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "insect",
    "fr": "insecte",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "list",
    "fr": "liste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "local",
    "fr": "local-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "lucid",
    "fr": "lucide",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "meteor",
    "fr": "météore",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "moral",
    "fr": "moral-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "optimism",
    "fr": "optimisme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "organism",
    "fr": "organisme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "permanent",
    "fr": "permanent-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "planet",
    "fr": "planète",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "plant",
    "fr": "plante",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "problem",
    "fr": "problème",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "prudent",
    "fr": "prudent-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "rich",
    "fr": "riche",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "salad",
    "fr": "salade",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "socialist",
    "fr": "socialiste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "solid",
    "fr": "solide",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "soup",
    "fr": "soupe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "special",
    "fr": "spécial-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "special",
    "fr": "special-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "splendid",
    "fr": "splendide",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "stupid",
    "fr": "stupide",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "tourist",
    "fr": "touriste",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "triumphant",
    "fr": "triumphant-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Final -e added",
    "newGroup": false,
    "en": "uniform",
    "fr": "uniforme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": true,
    "en": "abandon",
    "fr": "Abandonner",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Absolute",
    "fr": "Absolu",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "absolutely",
    "fr": "absolument",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "abundance",
    "fr": "abondance",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "abuse",
    "fr": "abuser",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "accept",
    "fr": "Accepter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "acrobatic",
    "fr": "acrobatique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "activities",
    "fr": "activités",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "activity",
    "fr": "activité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "actor",
    "fr": "acteur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "actuary",
    "fr": "actuaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "address",
    "fr": "adresse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "adore",
    "fr": "adorer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "adventure",
    "fr": "aventure",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "agency",
    "fr": "agence",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "aggregate",
    "fr": "agrégat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "aggregate",
    "fr": "aggrégat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "aggression",
    "fr": "agression",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "agony",
    "fr": "agonie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "allergic",
    "fr": "allergique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "anxious",
    "fr": "anxieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "appetite",
    "fr": "appétit",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "arbitrary",
    "fr": "arbitraire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "area",
    "fr": "aire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "aristocracy",
    "fr": "aristocratie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "arithmetic",
    "fr": "arithmétique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "artistic",
    "fr": "artistique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "artistic",
    "fr": "artístique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "astronomer",
    "fr": "astronome",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "August",
    "fr": "août",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "automatic",
    "fr": "automatique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "banana",
    "fr": "banane",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Basic",
    "fr": "Basique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "battery",
    "fr": "batterie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "bicycle",
    "fr": "bicyclette",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "biography",
    "fr": "biographie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "biology",
    "fr": "biologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "block",
    "fr": "Bloquer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "British",
    "fr": "Britannique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "bureaucracy",
    "fr": "bureaucratie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Calculator",
    "fr": "Calculatrice",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "captain",
    "fr": "capitaine",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "capture",
    "fr": "Capturer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "category",
    "fr": "catégorie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Catholic",
    "fr": "Catholique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "celebrate",
    "fr": "Célébrer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "cement",
    "fr": "ciment",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "center",
    "fr": "centre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "ceramic",
    "fr": "céramique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "ceremony",
    "fr": "cérémonie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "change",
    "fr": "Changer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "chimney",
    "fr": "cheminée",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "chimpanzee",
    "fr": "chimpanzé",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "chocolate",
    "fr": "chocolat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "circle",
    "fr": "cercle",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "circular",
    "fr": "circulaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "civilize",
    "fr": "civiliser",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "classic",
    "fr": "classique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "coast",
    "fr": "côte",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "colony",
    "fr": "colonie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "color",
    "fr": "couleur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "combination",
    "fr": "combinaison",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "comment",
    "fr": "commentaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "comment",
    "fr": "comentaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "committee",
    "fr": "comité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "common",
    "fr": "commun",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "communicate",
    "fr": "Communiquer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "company",
    "fr": "compagnie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "comport",
    "fr": "comporter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "confusing",
    "fr": "confus",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "consult",
    "fr": "consulter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "contract",
    "fr": "contracter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "correctly",
    "fr": "correctement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "creativity",
    "fr": "créativité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "criminal",
    "fr": "criminel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "critical",
    "fr": "critique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "curiosity",
    "fr": "curiosité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "curious",
    "fr": "curieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Dangerous",
    "fr": "Dangereux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Debate",
    "fr": "Débat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "December",
    "fr": "décembre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "decide",
    "fr": "Décider",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "democracy",
    "fr": "démocratie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "demonstrate(to)",
    "fr": "démontrer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "destroy",
    "fr": "Détruire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "diamond",
    "fr": "diamant",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "dictator",
    "fr": "dictateur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "dictionary",
    "fr": "dictionnaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "difficultly",
    "fr": "difficulté",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "directly",
    "fr": "directement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "director",
    "fr": "directeur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "disaster",
    "fr": "désastre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "doctor",
    "fr": "docteur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "drama",
    "fr": "drame",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Dramatic",
    "fr": "Dramatique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "ecology",
    "fr": "écologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "economic",
    "fr": "économique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "economy",
    "fr": "économie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "edit",
    "fr": "Éditer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "effect",
    "fr": "effet",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "effective",
    "fr": "efective",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "electric",
    "fr": "électrique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "electricity",
    "fr": "électricité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "encourage",
    "fr": "Encourager",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "energy",
    "fr": "énergie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "enormous",
    "fr": "énorme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "equality",
    "fr": "égalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "especially",
    "fr": "spécialement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "establish",
    "fr": "Établir",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "evidently",
    "fr": "évidemment",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "exactly",
    "fr": "exactement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "exaggerate",
    "fr": "exagérer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "exalt",
    "fr": "exalter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "example",
    "fr": "exemple",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "exclaim",
    "fr": "exclamer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "excuse",
    "fr": "excuser",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "exercise",
    "fr": "exercice",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "exotic",
    "fr": "exotique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "extraordinary",
    "fr": "extraordinaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Fabulous",
    "fr": "Fabuleux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "family",
    "fr": "famille",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "famous",
    "fr": "fameux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "fantastic",
    "fr": "fantastique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "fantastic",
    "fr": "fantstique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "fascinate",
    "fr": "Fasciner",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "ferocious",
    "fr": "féroce",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "finally",
    "fr": "finalement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "finish",
    "fr": "Finir",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "flexibility",
    "fr": "flexibilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "flower",
    "fr": "fleur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "function",
    "fr": "fonction",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "funeral",
    "fr": "funérailles",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "galaxy",
    "fr": "galaxie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "garden",
    "fr": "jardin",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "gas",
    "fr": "gaz",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Generous",
    "fr": "Généreux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "geography",
    "fr": "géographie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "geology",
    "fr": "géologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "giraffe",
    "fr": "girafe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "glorious",
    "fr": "glorieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "gorilla",
    "fr": "gorille",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "govern",
    "fr": "Gouverner",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "harass",
    "fr": "Harceler",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "hippopotamus",
    "fr": "hippopotame",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "history",
    "fr": "histoire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "honor",
    "fr": "honneur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "honor",
    "fr": "honnneur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "horror",
    "fr": "horreur",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "hospital",
    "fr": "hôpital",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "hour",
    "fr": "heure",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "human",
    "fr": "humain",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "idea",
    "fr": "Idée",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "idea",
    "fr": "idèe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "identify",
    "fr": "Identifier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "identity",
    "fr": "identité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "ignore",
    "fr": "Ignorer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "imaginary",
    "fr": "imaginaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "immediately",
    "fr": "immédiatement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "immediately",
    "fr": "inmédiatement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "independence",
    "fr": "indépendance",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "industry",
    "fr": "industrie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "interest",
    "fr": "intérêt",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "island",
    "fr": "île",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "June",
    "fr": "Juin",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "justify",
    "fr": "Justifier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Kilogram",
    "fr": "Kilogramme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Kilometer",
    "fr": "Kilomètre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Language",
    "fr": "Langue",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "legality",
    "fr": "légalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "lens",
    "fr": "lentille",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "lesson",
    "fr": "leçon",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Liberty",
    "fr": "Liberté",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "limit",
    "fr": "Limiter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "line",
    "fr": "ligne",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "line",
    "fr": "lígne",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Logical",
    "fr": "Logique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "magic",
    "fr": "magique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "magician",
    "fr": "magicien",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "magnetic",
    "fr": "magnétique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "magnificent",
    "fr": "magnifique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "manner",
    "fr": "manière",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "March",
    "fr": "mars",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "marionette",
    "fr": "marionnette",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "market",
    "fr": "marché",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Material",
    "fr": "Matériel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "mechanism",
    "fr": "mécanisme",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "medal",
    "fr": "médaille",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "medal",
    "fr": "medaille",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "memory",
    "fr": "mémoire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "mention",
    "fr": "Mentionner",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "meteorology",
    "fr": "météorologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "modify",
    "fr": "Modifier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "music",
    "fr": "musique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "mysterious",
    "fr": "mystérieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "nationality",
    "fr": "nationalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Natural",
    "fr": "Naturel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "naturally",
    "fr": "naturellement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "navigate",
    "fr": "Naviguer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "necessity",
    "fr": "nécessité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Nervous",
    "fr": "Nerveux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "normally",
    "fr": "normalement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "note",
    "fr": "Noter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "object",
    "fr": "objet",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "object",
    "fr": "objèt",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "observatory",
    "fr": "observatoire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "observe",
    "fr": "Observer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "obtain",
    "fr": "Obtenir",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "October",
    "fr": "octobre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "operate",
    "fr": "opérer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "ordinary",
    "fr": "ordinaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Painter",
    "fr": "Peintre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "palace",
    "fr": "palais",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "panic",
    "fr": "panique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "paper",
    "fr": "papier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "park",
    "fr": "parc",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Parliamentary",
    "fr": "Parlementaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Particular",
    "fr": "Particulier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "partner",
    "fr": "partenaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "penguin",
    "fr": "pingouin",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "perfect",
    "fr": "parfait",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "perfume",
    "fr": "parfum",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "personality",
    "fr": "personnalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "pharmacy",
    "fr": "pharmacie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "philosophy",
    "fr": "philosophie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "photocopy",
    "fr": "photocopie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "photograph",
    "fr": "photographie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "photographer",
    "fr": "photographe",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "pioneer",
    "fr": "pionnier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "plastic",
    "fr": "plastique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "plate",
    "fr": "plat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "political",
    "fr": "politique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "positive",
    "fr": "positif",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "possess",
    "fr": "Posséder",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "possibility",
    "fr": "possibilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "practice",
    "fr": "pratique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "present",
    "fr": "Présenter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "priority",
    "fr": "priorité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "productivity",
    "fr": "productivité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "professional",
    "fr": "professionnel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "project",
    "fr": "projet",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "psychology",
    "fr": "psychologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "publicity",
    "fr": "publicité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "qualify",
    "fr": "Qualifier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Quality",
    "fr": "Qualité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "real",
    "fr": "réel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "reality",
    "fr": "réalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "really",
    "fr": "réalité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Regular",
    "fr": "Régulier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "remedy",
    "fr": "remède",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "remedy",
    "fr": "reméde",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "reserve",
    "fr": "Réserver",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "resist",
    "fr": "Résister",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "respond",
    "fr": "Répondre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "responsibility",
    "fr": "responsabilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "result",
    "fr": "résultat",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "rock",
    "fr": "roche",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Romantic",
    "fr": "Romantique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "salary",
    "fr": "salaire",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "scientific",
    "fr": "scientifique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "security",
    "fr": "sécurité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "sensitivity",
    "fr": "sensibilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "September",
    "fr": "septembre",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "series",
    "fr": "série",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "serious",
    "fr": "sérieux",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "sociology",
    "fr": "sociologie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "solidify",
    "fr": "solidifier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "stability",
    "fr": "stabilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "statistic",
    "fr": "statistique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "statistics",
    "fr": "statistique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "stomach",
    "fr": "estomac",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "strategy",
    "fr": "stratégie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "study",
    "fr": "Étudier",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "supermarket",
    "fr": "supermarché",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "systematic",
    "fr": "systématique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "testimony",
    "fr": "témoignage",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "theory",
    "fr": "théorie",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "tomato",
    "fr": "tomate",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "totally",
    "fr": "totalement",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "touch",
    "fr": "Toucher",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Traditional",
    "fr": "Traditionnel",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "traffic",
    "fr": "trafic",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "transform",
    "fr": "Transformer",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "trumpet",
    "fr": "trompette",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "unite",
    "fr": "Unir",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "Universe",
    "fr": "Univers",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "university",
    "fr": "université",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "urgency",
    "fr": "urgence",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "use",
    "fr": "Utiliser",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "useful",
    "fr": "utile",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Consonant change",
    "newGroup": false,
    "en": "utility",
    "fr": "utilité",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": true,
    "en": "abuse",
    "fr": "(to) abuser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "accelerate",
    "fr": "(to) accélérer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "accentuate",
    "fr": "(to) accentuer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "accompany",
    "fr": "(to) accompagner",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "accuse",
    "fr": "(to) accuser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "admire",
    "fr": "(to) admirer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "admit",
    "fr": "(to) admettre",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "adopt",
    "fr": "(to) adopter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "adore",
    "fr": "(to) adorer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "African",
    "fr": "Africain-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "ambitious",
    "fr": "ambitieux-euse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "analyze",
    "fr": "(to) analyser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "announce",
    "fr": "(to) annoncer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "appear",
    "fr": "(to) apparaître",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "associate",
    "fr": "(to) associer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "authorize",
    "fr": "(to) autoriser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "brilliant",
    "fr": "brilliant-te",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "capture",
    "fr": "(to) capturer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "celebrate",
    "fr": "(to) célébrer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "classify",
    "fr": "(to) classifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "compare",
    "fr": "(to) comparer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "complete",
    "fr": "(to) compléter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "consult",
    "fr": "(to) consulter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "contagious",
    "fr": "contagieux-euse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "continue",
    "fr": "(to) continuer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "contract",
    "fr": "(to) contracter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "converse",
    "fr": "(to) converser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "convert",
    "fr": "(to) convertir",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "curious",
    "fr": "curieux-euse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "decide",
    "fr": "(to) décider",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "declare",
    "fr": "(to) déclarer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "delicious",
    "fr": "délicieux-euse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "demonstrate",
    "fr": "(to) démontrer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "depend",
    "fr": "(to) dépendre",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "deport",
    "fr": "(to) déporter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "des",
    "fr": "ert déserter",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "describe",
    "fr": "(to) décrire",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "describe",
    "fr": "(to) déc rire",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "desert",
    "fr": "(to) déserter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "destroy",
    "fr": "(to) détruire",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "detain",
    "fr": "(to) détenir",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "determine",
    "fr": "(to) déterminer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "disappear",
    "fr": "(to) disparaître",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "discuss",
    "fr": "(to) discuter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "distribute",
    "fr": "(to) distribuer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "email",
    "fr": "e-mail",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "enter",
    "fr": "(to) entrer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "escape",
    "fr": "(to) échapper",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "estimate",
    "fr": "(to) estimer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "exalt",
    "fr": "(to) exalter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "examine",
    "fr": "(to) examiner",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "exclaim",
    "fr": "(to) exclamer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "export",
    "fr": "(to) exporter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "famous",
    "fr": "fameux-euse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "fascinate",
    "fr": "(to) fasciner",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "favorite",
    "fr": "favori-te",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "ferment",
    "fr": "(to) fermenter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "furious",
    "fr": "furieux-euse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "generous",
    "fr": "généreux-euse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "glorious",
    "fr": "glorieux-euse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "gracious",
    "fr": "gracieux-euse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "gracious",
    "fr": "gracieux-eu se",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "gratify",
    "fr": "(to) gratifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "human",
    "fr": "humain-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "identity",
    "fr": "(to) identifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "ignore",
    "fr": "(to) ignorer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "imagine",
    "fr": "(to) imaginer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "imp",
    "fr": "lore (to) implorer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "implore",
    "fr": "(to) implorer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "import",
    "fr": "(to) importer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "import",
    "fr": "(to) imp orter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "insert",
    "fr": "(to) insérer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "insist",
    "fr": "(to) insister",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "insult",
    "fr": "(to) insulter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "interesting",
    "fr": "intéressant-e",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "interrupt",
    "fr": "(to) interrompre",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "introduce",
    "fr": "(to) introduire",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "invent",
    "fr": "(to) inventer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "investigate",
    "fr": "(to) investiguer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "invite",
    "fr": "(to) inviter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "justify",
    "fr": "(to) justifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "lament",
    "fr": "(to) lamenter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "locate",
    "fr": "(to) localiser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "manual",
    "fr": "manuel-elle",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "march",
    "fr": "(to) marcher",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "modify",
    "fr": "(to) modifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "natural",
    "fr": "naturel-le",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "negotiate",
    "fr": "(to) négocier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "nervous",
    "fr": "nerveux-euse",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "notify",
    "fr": "(to) notifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "operate",
    "fr": "(to) opèrer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "organize",
    "fr": "(to) organiser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "pacify",
    "fr": "(to) pacifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "paralyze",
    "fr": "(to) paraliser",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "participate",
    "fr": "(to) participer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "picnic",
    "fr": "pique-nique",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "practice",
    "fr": "(to) pratiquer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "prepare",
    "fr": "(to) préparer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "present",
    "fr": "(to) présenter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "professional",
    "fr": "professionnel-lle",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "professional",
    "fr": "professionnel-le",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "represent",
    "fr": "(to) représenter",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "retire",
    "fr": "(to) (se) retirer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "simplify",
    "fr": "(to) simplifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "study",
    "fr": "(to) étudier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "terminate",
    "fr": "(to) terminer",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "trap",
    "fr": "(to) attraper",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "unify",
    "fr": "(to) unifier",
    "pos": "verb"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "usual",
    "fr": "usuel-le",
    "pos": "noun/adjective"
  },
  {
    "type": "word",
    "group": "Hyphenation / spacing",
    "newGroup": false,
    "en": "utilize",
    "fr": "(to) utiliser",
    "pos": "verb"
  }
];
const PHRASE_CARDS = [
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": true,
    "en": "Hello, sir/ma'am",
    "fr": "Bonjour, monsieur / madame.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Good evening, sir/ma'am",
    "fr": "Bonsoir, monsieur / madame.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Hello! (cheerful)",
    "fr": "Bien le bonjour !",
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
    "en": "How’s it going?",
    "fr": "Ça va ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Nice to meet you",
    "fr": "Enchanté(e).",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Thanks a lot",
    "fr": "Merci bien !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Thanks very much",
    "fr": "Merci beaucoup !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "You’re welcome (formal)",
    "fr": "Je vous en prie.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "You’re welcome",
    "fr": "De rien.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Please",
    "fr": "S'il vous plaît.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Excuse me",
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
    "en": "Do you mind?",
    "fr": "Vous permettez ?",
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
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Have a good evening!",
    "fr": "Bonne soirée !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "See you soon!",
    "fr": "À bientôt !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "See you in a while!",
    "fr": "À tout à l'heure !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "See you next time!",
    "fr": "À la prochaine !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": true,
    "en": "Go ahead / I’m listening",
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
    "en": "What do you want?",
    "fr": "Qu'est-ce que vous voulez ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "To drink?",
    "fr": "Comme boisson ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Any drinks?",
    "fr": "Des boissons ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Wine?",
    "fr": "Du vin ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "A dessert?",
    "fr": "Un dessert ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "What is today’s special?",
    "fr": "Quel est le plat du jour ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Have you finished?",
    "fr": "Vous avez terminé ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "How was everything?",
    "fr": "Ça a été ?",
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
    "en": "Enjoy your meal! (informal)",
    "fr": "Bon app’ !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Cheers!",
    "fr": "Santé !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Here you go",
    "fr": "Voilà.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Here is your coffee, sir",
    "fr": "Voilà votre café, monsieur.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "The bill, please",
    "fr": "L'addition, s'il vous plaît.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "The bill/check",
    "fr": "La note.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "To go?",
    "fr": "À emporter ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "No smoking",
    "fr": "Défense de fumer.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": true,
    "en": "The menu",
    "fr": "La carte.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": false,
    "en": "A pitcher of tap water",
    "fr": "Une carafe d'eau.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": false,
    "en": "Still water",
    "fr": "L'eau plate.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": false,
    "en": "Sparkling water",
    "fr": "L'eau pétillante.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": false,
    "en": "An espresso with hot water",
    "fr": "Un café allongé.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": false,
    "en": "An espresso with a dash of milk",
    "fr": "Un café noisette.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": false,
    "en": "A draft beer?",
    "fr": "Une pression ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": false,
    "en": "Well done",
    "fr": "Bien cuit.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": false,
    "en": "Medium",
    "fr": "À point.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": false,
    "en": "Rare",
    "fr": "Saignant.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": true,
    "en": "May I help you?",
    "fr": "Puis-je vous aider ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "What can I do for you?",
    "fr": "Que puis-je faire pour vous ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "Do you have a reservation?",
    "fr": "Vous avez une réservation ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "In what name, please?",
    "fr": "À quel nom, s'il vous plaît ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "Can you spell your name?",
    "fr": "Vous pouvez épeler votre nom ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "One moment, please",
    "fr": "Un instant, s'il vous plaît.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "That’s correct",
    "fr": "C'est correct.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "Your room is on the top floor",
    "fr": "Vous avez la chambre au dernier étage.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "How many days are you staying?",
    "fr": "Combien de jours vous restez ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "What date and what time?",
    "fr": "Quelle date et quelle heure ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "Which class do you want to travel in?",
    "fr": "Dans quelle classe voulez-vous voyager ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "That’s your driver",
    "fr": "C’est votre chauffeur.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "Here is my business card",
    "fr": "Voici ma carte de visite.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "We remain at your disposal",
    "fr": "Nous restons à votre disposition.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "I don’t understand",
    "fr": "Je ne comprends pas.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "Do you speak English?",
    "fr": "Vous parlez anglais ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Business & Formal",
    "newGroup": true,
    "en": "May I speak?",
    "fr": "Puis-je intervenir ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Business & Formal",
    "newGroup": false,
    "en": "What is your point of view?",
    "fr": "Quel est votre point de vue ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Business & Formal",
    "newGroup": false,
    "en": "Could you clarify your idea?",
    "fr": "Pouvez-vous préciser votre idée ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Business & Formal",
    "newGroup": false,
    "en": "What are your goals?",
    "fr": "Quels sont vos objectifs ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Business & Formal",
    "newGroup": false,
    "en": "Let’s move on to the agenda",
    "fr": "Passons à l'ordre du jour.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Business & Formal",
    "newGroup": false,
    "en": "We need to find common ground",
    "fr": "Il faut trouver un terrain d'entente.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Business & Formal",
    "newGroup": false,
    "en": "This exceeds our budget",
    "fr": "Cela dépasse notre budget.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": true,
    "en": "So… / Then…",
    "fr": "Alors…",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "Well… / Okay…",
    "fr": "Bon…",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "Of course",
    "fr": "Bien sûr.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "Okay / Agreed",
    "fr": "D'accord.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "Actually…",
    "fr": "En fait…",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "Well… / I mean…",
    "fr": "Enfin…",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "Come on!",
    "fr": "Allez !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "Uh…",
    "fr": "Euh…",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "Well yes / Well no",
    "fr": "Ben oui / Ben non.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "Really! / Come on!",
    "fr": "Quand même !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "You see",
    "fr": "Tu vois.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Fillers & Interjections",
    "newGroup": false,
    "en": "No problem / It’s fine",
    "fr": "C'est pas grave.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Travel & Emergencies",
    "newGroup": true,
    "en": "Watch out!",
    "fr": "Attention !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Travel & Emergencies",
    "newGroup": false,
    "en": "Stop!",
    "fr": "Arrête !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Travel & Emergencies",
    "newGroup": false,
    "en": "Help!",
    "fr": "Au secours !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Travel & Emergencies",
    "newGroup": false,
    "en": "My mistake",
    "fr": "Au temps pour moi.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Travel & Emergencies",
    "newGroup": false,
    "en": "Where are the toilets?",
    "fr": "Où sont les toilettes ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Travel & Emergencies",
    "newGroup": false,
    "en": "Bus stop",
    "fr": "Arrêt de bus.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Travel & Emergencies",
    "newGroup": false,
    "en": "Train station",
    "fr": "Gare.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Travel & Emergencies",
    "newGroup": false,
    "en": "Entrance / Exit",
    "fr": "Entrée / Sortie.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Travel & Emergencies",
    "newGroup": false,
    "en": "Have a nice trip!",
    "fr": "Bon voyage !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Travel & Emergencies",
    "newGroup": false,
    "en": "Have a safe journey!",
    "fr": "Bonne route !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Menu & Ordering",
    "newGroup": true,
    "en": "A beer",
    "fr": "Une bière.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": true,
    "en": "Do you have a reservation?",
    "fr": "Avez-vous une réservation ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "At what name, please?",
    "fr": "Au nom de qui, s'il vous plaît ?",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "One moment, please!",
    "fr": "Un instant, s'il vous plaît !",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Hotels, Shops & Service",
    "newGroup": false,
    "en": "Sorry, I didn’t catch that",
    "fr": "Je n'ai pas compris.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": true,
    "en": "Thank you",
    "fr": "Merci.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Hello",
    "fr": "Bonjour.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Greetings & Politeness",
    "newGroup": false,
    "en": "Good evening",
    "fr": "Bonsoir.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": true,
    "en": "Have a seat",
    "fr": "Installez-vous.",
    "pos": "phrase"
  },
  {
    "type": "phrase",
    "group": "Restaurant & Café",
    "newGroup": false,
    "en": "Is everything okay?",
    "fr": "Tout va bien ?",
    "pos": "phrase"
  }
];

const STORAGE_KEYS = {
  mode: "df_mode_v1",
  wordsIndex: "df_words_index_v1",
  phrasesIndex: "df_phrases_index_v1",
};

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
    const saved = window.localStorage.getItem(STORAGE_KEYS.mode);
    return saved === "phrases" ? "phrases" : "words";
  });

  const deck = useMemo(() => (mode === "phrases" ? PHRASE_CARDS : WORD_CARDS), [mode]);

  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [speakingTurn, setSpeakingTurn] = useState(false);

  const autoTimersRef = useRef([]);
  const total = deck.length;

  // Prime voice list on mount (important on iOS)
  useEffect(() => {
    initVoiceCache();
  }, []);

  // Load per-mode progress on mode change
  useEffect(() => {
    const key = mode === "phrases" ? STORAGE_KEYS.phrasesIndex : STORAGE_KEYS.wordsIndex;
    const saved = parseInt(window.localStorage.getItem(key) || "0", 10);
    const idx = Number.isFinite(saved) ? clamp(saved, 0, Math.max(0, total - 1)) : 0;
    setIndex(idx);
    setRevealed(false);
    setSpeakingTurn(false);
  }, [mode, total]);

  // Persist mode choice
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.mode, mode);
  }, [mode]);

  // Persist index per mode
  useEffect(() => {
    const key = mode === "phrases" ? STORAGE_KEYS.phrasesIndex : STORAGE_KEYS.wordsIndex;
    window.localStorage.setItem(key, String(index));
  }, [index, mode]);

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
    clearAutoTimers();
    setRevealed(false);
    setSpeakingTurn(false);
    setIndex((i) => clamp(i + 1, 0, total - 1));
  }

  function resetProgress() {
    clearAutoTimers();
    const key = mode === "phrases" ? STORAGE_KEYS.phrasesIndex : STORAGE_KEYS.wordsIndex;
    window.localStorage.removeItem(key);
    setIndex(0);
    setRevealed(false);
    setSpeakingTurn(false);
  }

  function startTurn() {
    clearAutoTimers();
    setSpeakingTurn(true);

    // if autoplay, we will reveal automatically after a short window
    if (autoPlay) {
      queueAuto(() => {
        revealAndSpeak();
      }, 1600);
    }
  }

  function revealAndSpeak() {
    setRevealed(true);
    setSpeakingTurn(false);
    if (!card) return;
    safeSpeak(card.fr, "fr-FR");

    if (autoPlay) {
      // advance after speech starts; conservative delay
      queueAuto(() => {
        if (index < total - 1) nextCard();
      }, 2200);
    }
  }

  // Auto-flow: if autoplay is turned on and a new card appears, automatically prompt (mic highlight),
  // then reveal, then move on.
  useEffect(() => {
    clearAutoTimers();
    if (!autoPlay) return;

    setRevealed(false);
    setSpeakingTurn(true);
    queueAuto(() => {
      revealAndSpeak();
    }, 1600);

    return () => clearAutoTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, index, mode]);

  // Build the prompt line
  const prompt = useMemo(() => {
    if (!card) return "";
    if (card.type === "phrase") {
      return "Listen for the French phrase (try to repeat it).";
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
        <p>No cards found.</p>
      </div>
    );
  }

  return (
    <div style={{ background: "#f5f6f7", minHeight: "100vh" }}>
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
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.1 }}>{PRODUCT_NAME}</div>
            <div style={{ marginTop: 4, color: "#555", fontSize: 13 }}>
              {mode === "words"
                ? "Words grouped by rule (includes identical spelling)."
                : "France-only phrases you will HEAR in restaurants, shops, hotels and travel."}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ fontSize: 12, color: "#555" }}>Mode</div>
            <select
              value={mode}
              onChange={(e) => {
                clearAutoTimers();
                setAutoPlay(false); // avoid surprise when switching decks
                setMode(e.target.value);
              }}
              style={{
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #ddd",
                background: "white",
                fontWeight: 700,
              }}
            >
              <option value="words">Words</option>
              <option value="phrases">Everyday French (France)</option>
            </select>
          </div>
        </div>

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
                  if (!speakingTurn) startTurn();
                  else revealAndSpeak();
                } else {
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
                border: speakingTurn && !revealed ? "2px solid #111" : "1px solid #ddd",
                background: speakingTurn && !revealed ? "#111" : "white",
                color: speakingTurn && !revealed ? "white" : "#111",
                fontWeight: 800,
                cursor: "pointer",
              }}
              title={
                revealed
                  ? "Replay French audio"
                  : speakingTurn
                  ? "Reveal + play French"
                  : "Start (ready to attempt)"
              }
            >
              {revealed ? "Replay" : speakingTurn ? "Reveal" : "Mic"}
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
              {revealed ? "Tap Replay to hear it again." : "Tap Mic when you're ready."}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ marginTop: 12 }}>
          <div style={{ display: "flex", gap: 10 }}>
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
                setSpeakingTurn(false);
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
          Tip: The mic button is a timing cue. We don’t record your voice. You control the pace — or use Auto Play.
        </div>
      </div>
    </div>
  );
}
