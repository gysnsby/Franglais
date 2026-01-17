import React, { useEffect, useMemo, useRef, useState } from "react";

/*
  Dictionnaire Franglais — Mobile Flashcards (Rule mode)
*/

const DATA = {
  "tiers": {
    "A": [
      {
        "en": "art",
        "fr": "art"
      },
      {
        "en": "internet",
        "fr": "internet"
      },
      {
        "en": "restaurant",
        "fr": "restaurant"
      },
      {
        "en": "ballet",
        "fr": "ballet"
      },
      {
        "en": "magazine",
        "fr": "magazine"
      },
      {
        "en": "robot",
        "fr": "robot"
      },
      {
        "en": "bus",
        "fr": "bus"
      },
      {
        "en": "menu",
        "fr": "menu"
      },
      {
        "en": "sandwich",
        "fr": "sandwich"
      },
      {
        "en": "concert",
        "fr": "concert"
      },
      {
        "en": "moment",
        "fr": "moment"
      },
      {
        "en": "spaghetti",
        "fr": "spaghetti"
      },
      {
        "en": "film",
        "fr": "film"
      },
      {
        "en": "normal",
        "fr": "normal"
      },
      {
        "en": "steak",
        "fr": "steak"
      },
      {
        "en": "final",
        "fr": "final"
      },
      {
        "en": "pizza",
        "fr": "pizza"
      },
      {
        "en": "taxi",
        "fr": "taxi"
      },
      {
        "en": "garage",
        "fr": "garage"
      },
      {
        "en": "port",
        "fr": "port"
      },
      {
        "en": "tunnel",
        "fr": "tunnel"
      },
      {
        "en": "hamburger",
        "fr": "hamburger"
      },
      {
        "en": "possible",
        "fr": "possible"
      },
      {
        "en": "type",
        "fr": "type"
      },
      {
        "en": "important",
        "fr": "important"
      },
      {
        "en": "public",
        "fr": "public"
      },
      {
        "en": "virus",
        "fr": "virus"
      }
    ],
    "2": [
      {
        "en": "atmosphere",
        "fr": "atmosphère",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": true
      },
      {
        "en": "cable",
        "fr": "câble",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "cafe",
        "fr": "café",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "cafeteria",
        "fr": "cafétéria",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "camera",
        "fr": "caméra",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "cholera",
        "fr": "choléra",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "cinema",
        "fr": "cinéma",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "convenient",
        "fr": "convénient",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Decision",
        "fr": "Décision",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "decisive",
        "fr": "décisive",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "decoration",
        "fr": "décoration",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "delicate",
        "fr": "délicat-e",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Difference",
        "fr": "Différence",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "disgrace",
        "fr": "disgrâce",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Edition",
        "fr": "Édition",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "elephant",
        "fr": "éléphant",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Emotion",
        "fr": "Émotion",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "experience",
        "fr": "expérience",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "facade",
        "fr": "façade",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Frequent",
        "fr": "Fréquent",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Generation",
        "fr": "Génération",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Grace",
        "fr": "Grâce",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "hotel",
        "fr": "hôtel",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Illegal",
        "fr": "Illégal",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "incredible",
        "fr": "incrédible",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "incredible",
        "fr": "incrédíble",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "inseparable",
        "fr": "inséparable",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "juvenile",
        "fr": "juvénile",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Legal",
        "fr": "Légal",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "leopard",
        "fr": "léopard",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "metal",
        "fr": "métal",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "metro",
        "fr": "métro",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "nectar",
        "fr": "néctar",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "obedience",
        "fr": "obédience",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "ocean",
        "fr": "océan",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Opera",
        "fr": "Opéra",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "operation",
        "fr": "opération",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "planetarium",
        "fr": "planétarium",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "present",
        "fr": "présent",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "presentation",
        "fr": "présentation",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "region",
        "fr": "région",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "reunion",
        "fr": "réunion",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Revolution",
        "fr": "Révolution",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "Sincere",
        "fr": "Sincère",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "special",
        "fr": "spécial",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "telephone",
        "fr": "téléphone",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "telescope",
        "fr": "télescope",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "television",
        "fr": "télévision",
        "pos": "noun/adjective",
        "rule": "Accent added",
        "newRule": false
      },
      {
        "en": "adult",
        "fr": "adulte",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": true
      },
      {
        "en": "adverb",
        "fr": "adverbe",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "alarm",
        "fr": "alarme",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "artist",
        "fr": "artiste",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "autograph",
        "fr": "autographe",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "brilliant",
        "fr": "brilliant-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "cabin",
        "fr": "cabine",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "candid",
        "fr": "candide",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "cereal",
        "fr": "céréale",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "class",
        "fr": "classe",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "control",
        "fr": "contrôle",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "despotism",
        "fr": "despotisme",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "different",
        "fr": "différent-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "different",
        "fr": "Different-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "dinosaur",
        "fr": "dinosaure",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "egoist",
        "fr": "égoïste",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "egoist",
        "fr": "egoïste",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "firm",
        "fr": "firme",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "general",
        "fr": "général-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "group",
        "fr": "groupe",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "Guitar",
        "fr": "Guitare",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "helicopter",
        "fr": "hélicoptère",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "idealism",
        "fr": "idéalisme",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "ignorant",
        "fr": "ignorant-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "important",
        "fr": "important-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "insect",
        "fr": "insecte",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "list",
        "fr": "liste",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "local",
        "fr": "local-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "lucid",
        "fr": "lucide",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "meteor",
        "fr": "météore",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "moral",
        "fr": "moral-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "optimism",
        "fr": "optimisme",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "organism",
        "fr": "organisme",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "permanent",
        "fr": "permanent-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "planet",
        "fr": "planète",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "plant",
        "fr": "plante",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "problem",
        "fr": "problème",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "prudent",
        "fr": "prudent-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "rich",
        "fr": "riche",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "salad",
        "fr": "salade",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "socialist",
        "fr": "socialiste",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "solid",
        "fr": "solide",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "soup",
        "fr": "soupe",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "special",
        "fr": "spécial-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "special",
        "fr": "special-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "splendid",
        "fr": "splendide",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "stupid",
        "fr": "stupide",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "tourist",
        "fr": "touriste",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "triumphant",
        "fr": "triumphant-e",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "uniform",
        "fr": "uniforme",
        "pos": "noun/adjective",
        "rule": "Final -e added",
        "newRule": false
      },
      {
        "en": "abandon",
        "fr": "Abandonner",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": true
      },
      {
        "en": "Absolute",
        "fr": "Absolu",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "absolutely",
        "fr": "absolument",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "abundance",
        "fr": "abondance",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "abuse",
        "fr": "abuser",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "accept",
        "fr": "Accepter",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "acrobatic",
        "fr": "acrobatique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "activities",
        "fr": "activités",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "activity",
        "fr": "activité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "actor",
        "fr": "acteur",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "actuary",
        "fr": "actuaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "address",
        "fr": "adresse",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "adore",
        "fr": "adorer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "adventure",
        "fr": "aventure",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "agency",
        "fr": "agence",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "aggregate",
        "fr": "agrégat",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "aggregate",
        "fr": "aggrégat",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "aggression",
        "fr": "agression",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "agony",
        "fr": "agonie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "allergic",
        "fr": "allergique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "anxious",
        "fr": "anxieux",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "appetite",
        "fr": "appétit",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "arbitrary",
        "fr": "arbitraire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "area",
        "fr": "aire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "aristocracy",
        "fr": "aristocratie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "arithmetic",
        "fr": "arithmétique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "artistic",
        "fr": "artistique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "artistic",
        "fr": "artístique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "astronomer",
        "fr": "astronome",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "August",
        "fr": "août",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "automatic",
        "fr": "automatique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "banana",
        "fr": "banane",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Basic",
        "fr": "Basique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "battery",
        "fr": "batterie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "bicycle",
        "fr": "bicyclette",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "biography",
        "fr": "biographie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "biology",
        "fr": "biologie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "block",
        "fr": "Bloquer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "British",
        "fr": "Britannique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "bureaucracy",
        "fr": "bureaucratie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Calculator",
        "fr": "Calculatrice",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "captain",
        "fr": "capitaine",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "capture",
        "fr": "Capturer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "category",
        "fr": "catégorie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Catholic",
        "fr": "Catholique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "celebrate",
        "fr": "Célébrer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "cement",
        "fr": "ciment",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "center",
        "fr": "centre",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "ceramic",
        "fr": "céramique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "ceremony",
        "fr": "cérémonie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "change",
        "fr": "Changer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "chimney",
        "fr": "cheminée",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "chimpanzee",
        "fr": "chimpanzé",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "chocolate",
        "fr": "chocolat",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "circle",
        "fr": "cercle",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "circular",
        "fr": "circulaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "civilize",
        "fr": "civiliser",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "classic",
        "fr": "classique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "coast",
        "fr": "côte",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "colony",
        "fr": "colonie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "color",
        "fr": "couleur",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "combination",
        "fr": "combinaison",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "comment",
        "fr": "commentaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "comment",
        "fr": "comentaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "committee",
        "fr": "comité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "common",
        "fr": "commun",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "communicate",
        "fr": "Communiquer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "company",
        "fr": "compagnie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "comport",
        "fr": "comporter",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "confusing",
        "fr": "confus",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "consult",
        "fr": "consulter",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "contract",
        "fr": "contracter",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "correctly",
        "fr": "correctement",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "creativity",
        "fr": "créativité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "criminal",
        "fr": "criminel",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "critical",
        "fr": "critique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "curiosity",
        "fr": "curiosité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "curious",
        "fr": "curieux",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Dangerous",
        "fr": "Dangereux",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Debate",
        "fr": "Débat",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "December",
        "fr": "décembre",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "decide",
        "fr": "Décider",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "democracy",
        "fr": "démocratie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "demonstrate(to)",
        "fr": "démontrer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "destroy",
        "fr": "Détruire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "diamond",
        "fr": "diamant",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "dictator",
        "fr": "dictateur",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "dictionary",
        "fr": "dictionnaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "difficultly",
        "fr": "difficulté",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "directly",
        "fr": "directement",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "director",
        "fr": "directeur",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "disaster",
        "fr": "désastre",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "doctor",
        "fr": "docteur",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "drama",
        "fr": "drame",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Dramatic",
        "fr": "Dramatique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "ecology",
        "fr": "écologie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "economic",
        "fr": "économique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "economy",
        "fr": "économie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "edit",
        "fr": "Éditer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "effect",
        "fr": "effet",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "effective",
        "fr": "efective",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "electric",
        "fr": "électrique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "electricity",
        "fr": "électricité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "encourage",
        "fr": "Encourager",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "energy",
        "fr": "énergie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "enormous",
        "fr": "énorme",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "equality",
        "fr": "égalité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "especially",
        "fr": "spécialement",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "establish",
        "fr": "Établir",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "evidently",
        "fr": "évidemment",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "exactly",
        "fr": "exactement",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "exaggerate",
        "fr": "exagérer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "exalt",
        "fr": "exalter",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "example",
        "fr": "exemple",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "exclaim",
        "fr": "exclamer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "excuse",
        "fr": "excuser",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "exercise",
        "fr": "exercice",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "exotic",
        "fr": "exotique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "extraordinary",
        "fr": "extraordinaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Fabulous",
        "fr": "Fabuleux",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "family",
        "fr": "famille",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "famous",
        "fr": "fameux",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "fantastic",
        "fr": "fantastique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "fantastic",
        "fr": "fantstique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "fascinate",
        "fr": "Fasciner",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "ferocious",
        "fr": "féroce",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "finally",
        "fr": "finalement",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "finish",
        "fr": "Finir",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "flexibility",
        "fr": "flexibilité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "flower",
        "fr": "fleur",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "function",
        "fr": "fonction",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "funeral",
        "fr": "funérailles",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "galaxy",
        "fr": "galaxie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "garden",
        "fr": "jardin",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "gas",
        "fr": "gaz",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Generous",
        "fr": "Généreux",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "geography",
        "fr": "géographie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "geology",
        "fr": "géologie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "giraffe",
        "fr": "girafe",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "glorious",
        "fr": "glorieux",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "gorilla",
        "fr": "gorille",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "govern",
        "fr": "Gouverner",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "harass",
        "fr": "Harceler",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "hippopotamus",
        "fr": "hippopotame",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "history",
        "fr": "histoire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "honor",
        "fr": "honneur",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "honor",
        "fr": "honnneur",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "horror",
        "fr": "horreur",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "hospital",
        "fr": "hôpital",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "hour",
        "fr": "heure",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "human",
        "fr": "humain",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "idea",
        "fr": "Idée",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "idea",
        "fr": "idèe",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "identify",
        "fr": "Identifier",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "identity",
        "fr": "identité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "ignore",
        "fr": "Ignorer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "imaginary",
        "fr": "imaginaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "immediately",
        "fr": "immédiatement",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "immediately",
        "fr": "inmédiatement",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "independence",
        "fr": "indépendance",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "industry",
        "fr": "industrie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "interest",
        "fr": "intérêt",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "island",
        "fr": "île",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "June",
        "fr": "Juin",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "justify",
        "fr": "Justifier",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Kilogram",
        "fr": "Kilogramme",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Kilometer",
        "fr": "Kilomètre",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Language",
        "fr": "Langue",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "legality",
        "fr": "légalité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "lemon",
        "fr": "limon",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "lens",
        "fr": "lentille",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "lesson",
        "fr": "leçon",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Liberty",
        "fr": "Liberté",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "limit",
        "fr": "Limiter",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "line",
        "fr": "ligne",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "line",
        "fr": "lígne",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Logical",
        "fr": "Logique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "magic",
        "fr": "magique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "magician",
        "fr": "magicien",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "magnetic",
        "fr": "magnétique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "magnificent",
        "fr": "magnifique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "manner",
        "fr": "manière",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "March",
        "fr": "mars",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "marionette",
        "fr": "marionnette",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "market",
        "fr": "marché",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Material",
        "fr": "Matériel",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "mechanism",
        "fr": "mécanisme",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "medal",
        "fr": "médaille",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "medal",
        "fr": "medaille",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "memory",
        "fr": "mémoire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "mention",
        "fr": "Mentionner",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "meteorology",
        "fr": "météorologie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "modify",
        "fr": "Modifier",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "music",
        "fr": "musique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "mysterious",
        "fr": "mystérieux",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "nationality",
        "fr": "nationalité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Natural",
        "fr": "Naturel",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "naturally",
        "fr": "naturellement",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "navigate",
        "fr": "Naviguer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "necessity",
        "fr": "nécessité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Nervous",
        "fr": "Nerveux",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "normally",
        "fr": "normalement",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "note",
        "fr": "Noter",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "object",
        "fr": "objet",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "object",
        "fr": "objèt",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "observatory",
        "fr": "observatoire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "observe",
        "fr": "Observer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "obtain",
        "fr": "Obtenir",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "October",
        "fr": "octobre",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "operate",
        "fr": "opérer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "ordinary",
        "fr": "ordinaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Painter",
        "fr": "Peintre",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "palace",
        "fr": "palais",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "panic",
        "fr": "panique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "paper",
        "fr": "papier",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "park",
        "fr": "parc",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Parliamentary",
        "fr": "Parlementaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Particular",
        "fr": "Particulier",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "partner",
        "fr": "partenaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "penguin",
        "fr": "pingouin",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "perfect",
        "fr": "parfait",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "perfume",
        "fr": "parfum",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "personality",
        "fr": "personnalité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "pharmacy",
        "fr": "pharmacie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "philosophy",
        "fr": "philosophie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "photocopy",
        "fr": "photocopie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "photograph",
        "fr": "photographie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "photographer",
        "fr": "photographe",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "pioneer",
        "fr": "pionnier",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "plastic",
        "fr": "plastique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "plate",
        "fr": "plat",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "political",
        "fr": "politique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "positive",
        "fr": "positif",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "possess",
        "fr": "Posséder",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "possibility",
        "fr": "possibilité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "practice",
        "fr": "pratique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "present",
        "fr": "Présenter",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "priority",
        "fr": "priorité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "productivity",
        "fr": "productivité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "professional",
        "fr": "professionnel",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "project",
        "fr": "projet",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "psychology",
        "fr": "psychologie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "publicity",
        "fr": "publicité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "qualify",
        "fr": "Qualifier",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Quality",
        "fr": "Qualité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "real",
        "fr": "réel",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "reality",
        "fr": "réalité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "really",
        "fr": "réalité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Regular",
        "fr": "Régulier",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "remedy",
        "fr": "remède",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "remedy",
        "fr": "reméde",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "reserve",
        "fr": "Réserver",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "resist",
        "fr": "Résister",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "respond",
        "fr": "Répondre",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "responsibility",
        "fr": "responsabilité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "result",
        "fr": "résultat",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "rock",
        "fr": "roche",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Romantic",
        "fr": "Romantique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "salary",
        "fr": "salaire",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "scientific",
        "fr": "scientifique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "security",
        "fr": "sécurité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "sensitivity",
        "fr": "sensibilité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "September",
        "fr": "septembre",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "series",
        "fr": "série",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "serious",
        "fr": "sérieux",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "sociology",
        "fr": "sociologie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "solidify",
        "fr": "solidifier",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "stability",
        "fr": "stabilité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "statistic",
        "fr": "statistique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "statistics",
        "fr": "statistique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "stomach",
        "fr": "estomac",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "strategy",
        "fr": "stratégie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "study",
        "fr": "Étudier",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "supermarket",
        "fr": "supermarché",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "systematic",
        "fr": "systématique",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "testimony",
        "fr": "témoignage",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "theory",
        "fr": "théorie",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "tomato",
        "fr": "tomate",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "totally",
        "fr": "totalement",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "touch",
        "fr": "Toucher",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Traditional",
        "fr": "Traditionnel",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "traffic",
        "fr": "trafic",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "transform",
        "fr": "Transformer",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "trumpet",
        "fr": "trompette",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "unite",
        "fr": "Unir",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "Universe",
        "fr": "Univers",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "university",
        "fr": "université",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "urgency",
        "fr": "urgence",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "use",
        "fr": "Utiliser",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "useful",
        "fr": "utile",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "utility",
        "fr": "utilité",
        "pos": "noun/adjective",
        "rule": "Consonant change",
        "newRule": false
      },
      {
        "en": "abuse",
        "fr": "(to) abuser",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": true
      },
      {
        "en": "accelerate",
        "fr": "(to) accélérer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "accentuate",
        "fr": "(to) accentuer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "accompany",
        "fr": "(to) accompagner",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "accuse",
        "fr": "(to) accuser",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "admire",
        "fr": "(to) admirer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "admit",
        "fr": "(to) admettre",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "adopt",
        "fr": "(to) adopter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "adore",
        "fr": "(to) adorer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "African",
        "fr": "Africain-e",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "ambitious",
        "fr": "ambitieux-euse",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "analyze",
        "fr": "(to) analyser",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "announce",
        "fr": "(to) annoncer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "appear",
        "fr": "(to) apparaître",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "associate",
        "fr": "(to) associer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "authorize",
        "fr": "(to) autoriser",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "brilliant",
        "fr": "brilliant-te",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "capture",
        "fr": "(to) capturer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "celebrate",
        "fr": "(to) célébrer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "classify",
        "fr": "(to) classifier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "compare",
        "fr": "(to) comparer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "complete",
        "fr": "(to) compléter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "consult",
        "fr": "(to) consulter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "contagious",
        "fr": "contagieux-euse",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "continue",
        "fr": "(to) continuer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "contract",
        "fr": "(to) contracter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "converse",
        "fr": "(to) converser",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "convert",
        "fr": "(to) convertir",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "curious",
        "fr": "curieux-euse",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "decide",
        "fr": "(to) décider",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "declare",
        "fr": "(to) déclarer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "delicious",
        "fr": "délicieux-euse",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "demonstrate",
        "fr": "(to) démontrer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "depend",
        "fr": "(to) dépendre",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "deport",
        "fr": "(to) déporter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "des",
        "fr": "ert déserter",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "describe",
        "fr": "(to) décrire",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "describe",
        "fr": "(to) déc rire",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "desert",
        "fr": "(to) déserter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "destroy",
        "fr": "(to) détruire",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "detain",
        "fr": "(to) détenir",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "determine",
        "fr": "(to) déterminer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "disappear",
        "fr": "(to) disparaître",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "discuss",
        "fr": "(to) discuter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "distribute",
        "fr": "(to) distribuer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "email",
        "fr": "e-mail",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "enter",
        "fr": "(to) entrer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "escape",
        "fr": "(to) échapper",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "estimate",
        "fr": "(to) estimer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "exalt",
        "fr": "(to) exalter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "examine",
        "fr": "(to) examiner",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "exclaim",
        "fr": "(to) exclamer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "export",
        "fr": "(to) exporter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "famous",
        "fr": "fameux-euse",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "fascinate",
        "fr": "(to) fasciner",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "favorite",
        "fr": "favori-te",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "ferment",
        "fr": "(to) fermenter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "furious",
        "fr": "furieux-euse",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "generous",
        "fr": "généreux-euse",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "glorious",
        "fr": "glorieux-euse",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "gracious",
        "fr": "gracieux-euse",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "gracious",
        "fr": "gracieux-eu se",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "gratify",
        "fr": "(to) gratifier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "human",
        "fr": "humain-e",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "identity",
        "fr": "(to) identifier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "ignore",
        "fr": "(to) ignorer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "imagine",
        "fr": "(to) imaginer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "imp",
        "fr": "lore (to) implorer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "implore",
        "fr": "(to) implorer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "import",
        "fr": "(to) importer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "import",
        "fr": "(to) imp orter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "insert",
        "fr": "(to) insérer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "insist",
        "fr": "(to) insister",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "insult",
        "fr": "(to) insulter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "interesting",
        "fr": "intéressant-e",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "interrupt",
        "fr": "(to) interrompre",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "introduce",
        "fr": "(to) introduire",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "invent",
        "fr": "(to) inventer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "investigate",
        "fr": "(to) investiguer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "invite",
        "fr": "(to) inviter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "justify",
        "fr": "(to) justifier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "lament",
        "fr": "(to) lamenter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "locate",
        "fr": "(to) localiser",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "manual",
        "fr": "manuel-elle",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "march",
        "fr": "(to) marcher",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "modify",
        "fr": "(to) modifier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "natural",
        "fr": "naturel-le",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "negotiate",
        "fr": "(to) négocier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "nervous",
        "fr": "nerveux-euse",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "notify",
        "fr": "(to) notifier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "operate",
        "fr": "(to) opèrer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "organize",
        "fr": "(to) organiser",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "pacify",
        "fr": "(to) pacifier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "paralyze",
        "fr": "(to) paraliser",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "participate",
        "fr": "(to) participer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "picnic",
        "fr": "pique-nique",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "practice",
        "fr": "(to) pratiquer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "prepare",
        "fr": "(to) préparer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "present",
        "fr": "(to) présenter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "professional",
        "fr": "professionnel-lle",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "professional",
        "fr": "professionnel-le",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "represent",
        "fr": "(to) représenter",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "retire",
        "fr": "(to) (se) retirer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "simplify",
        "fr": "(to) simplifier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "study",
        "fr": "(to) étudier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "terminate",
        "fr": "(to) terminer",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "trap",
        "fr": "(to) attraper",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "unify",
        "fr": "(to) unifier",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "usual",
        "fr": "usuel-le",
        "pos": "noun/adjective",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "utilize",
        "fr": "(to) utiliser",
        "pos": "verb",
        "rule": "Hyphenation / spacing",
        "newRule": false
      },
      {
        "en": "resume",
        "fr": "résumé",
        "pos": "noun/adjective",
        "rule": "Use with care",
        "newRule": true
      }
    ]
  }
};

const PRODUCT_NAME = "Dictionnaire Franglais";
const STORAGE_KEY = "df_progress_rule_v1";

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

function posLabel(pos) {
  return pos === "verb" ? "verb" : "noun/adjective";
}

export default function App() {
  const tier2 = DATA?.tiers?.["2"] || [];
  const tierA = DATA?.tiers?.A || [];

  const [tier, setTier] = useState("2");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const [speakingTurn, setSpeakingTurn] = useState(false);
  const [turnMsLeft, setTurnMsLeft] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.getVoices();
    const onVoices = () => window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = onVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    const p = loadProgress();
    if (!p) return;
    setTier(p.tier);
    setIndex(p.index);
  }, []);

  const list = useMemo(() => (tier === "A" ? tierA : tier2), [tier, tierA, tier2]);
  const total = list.length || 1;
  const card = list[Math.min(index, total - 1)] || null;

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
    if (speakingTurn) {
      stopTurnAndReveal();
      return;
    }
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

    const next = Math.min(index + 1, total - 1);
    setIndex(next);
    setRevealed(false);
  }

  function resetProgress() {
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

  const rule = tier === "2" ? (card?.rule || "") : "Tier A (identical spelling)";
  const newRule = tier === "2" ? !!card?.newRule : false;
  const pos = tier === "2" ? (card?.pos || "noun/adjective") : "noun/adjective";

  const prompt = tier === "2"
    ? ("Say the French " + posLabel(pos) + ".")
    : "Say the French word.";

  return (
    <div style={{
      minHeight: "100vh",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      maxWidth: 520,
      margin: "0 auto"
    }}>
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
          <option value="2">Tier 2 (by rule)</option>
          <option value="A">Tier A (identical)</option>
        </select>
      </header>

      <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16, background: "white" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
          <div style={{ fontSize: 12, color: "#666" }}>Progress</div>
          <div style={{ fontSize: 12, color: "#666" }}>{index + 1} / {total} ({progressPct}%)</div>
        </div>
        <div style={{ height: 8, background: "#f2f2f2", borderRadius: 999, overflow: "hidden", marginTop: 8 }}>
          <div style={{ height: "100%", width: `${progressPct}%`, background: "#111" }} />
        </div>
      </div>

      <div style={{ border: "1px solid #111", borderRadius: 16, padding: 14, background: newRule ? "#111" : "white", color: newRule ? "white" : "#111" }}>
        <div style={{ fontSize: 12, opacity: 0.8 }}>Rule</div>
        <div style={{ fontSize: 18, fontWeight: 800, marginTop: 2 }}>
          {newRule ? "NEW RULE — " : ""}{rule}
        </div>
      </div>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "18px 10px" }}>
          <div style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>
            {prompt}
          </div>

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
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
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
            opacity: index >= total - 1 ? 0.5 : 1
          }}
          disabled={index >= total - 1}
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
            cursor: "pointer"
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
