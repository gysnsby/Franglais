import React, { useEffect, useMemo, useRef, useState } from "react";

// Embedded dictionary data (Tier A + Tier 2)
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
        "en": "abandon",
        "fr": "Abandonner"
      },
      {
        "en": "Absolute",
        "fr": "Absolu"
      },
      {
        "en": "absolutely",
        "fr": "absolument"
      },
      {
        "en": "abundance",
        "fr": "abondance"
      },
      {
        "en": "abuse",
        "fr": "abuser"
      },
      {
        "en": "abuse (to)",
        "fr": "abuser"
      },
      {
        "en": "accelerate (to)",
        "fr": "accélérer"
      },
      {
        "en": "accentuate (to)",
        "fr": "accentuer"
      },
      {
        "en": "accept",
        "fr": "Accepter"
      },
      {
        "en": "accompany (to)",
        "fr": "accompagner"
      },
      {
        "en": "accuse (to)",
        "fr": "accuser"
      },
      {
        "en": "acrobatic",
        "fr": "acrobatique"
      },
      {
        "en": "activities",
        "fr": "activités"
      },
      {
        "en": "activity",
        "fr": "activité"
      },
      {
        "en": "actor",
        "fr": "acteur"
      },
      {
        "en": "actuary",
        "fr": "actuaire"
      },
      {
        "en": "address",
        "fr": "adresse"
      },
      {
        "en": "admire (to)",
        "fr": "admirer"
      },
      {
        "en": "admit (to)",
        "fr": "admettre"
      },
      {
        "en": "adopt (to)",
        "fr": "adopter"
      },
      {
        "en": "adore",
        "fr": "adorer"
      },
      {
        "en": "adore (to)",
        "fr": "adorer"
      },
      {
        "en": "adult",
        "fr": "adulte"
      },
      {
        "en": "adventure",
        "fr": "aventure"
      },
      {
        "en": "adverb",
        "fr": "adverbe"
      },
      {
        "en": "African",
        "fr": "Africain-e"
      },
      {
        "en": "agency",
        "fr": "agence"
      },
      {
        "en": "aggregate",
        "fr": "agrégat"
      },
      {
        "en": "aggregate",
        "fr": "aggrégat"
      },
      {
        "en": "aggression",
        "fr": "agression"
      },
      {
        "en": "agony",
        "fr": "agonie"
      },
      {
        "en": "alarm",
        "fr": "alarme"
      },
      {
        "en": "allergic",
        "fr": "allergique"
      },
      {
        "en": "ambitious",
        "fr": "ambitieux-euse"
      },
      {
        "en": "analyze (to)",
        "fr": "analyser"
      },
      {
        "en": "announce (to)",
        "fr": "annoncer"
      },
      {
        "en": "anxious",
        "fr": "anxieux"
      },
      {
        "en": "appear (to)",
        "fr": "apparaître"
      },
      {
        "en": "appetite",
        "fr": "appétit"
      },
      {
        "en": "arbitrary",
        "fr": "arbitraire"
      },
      {
        "en": "area",
        "fr": "aire"
      },
      {
        "en": "aristocracy",
        "fr": "aristocratie"
      },
      {
        "en": "arithmetic",
        "fr": "arithmétique"
      },
      {
        "en": "artist",
        "fr": "artiste"
      },
      {
        "en": "artistic",
        "fr": "artistique"
      },
      {
        "en": "artistic",
        "fr": "artístique"
      },
      {
        "en": "associate (to)",
        "fr": "associer"
      },
      {
        "en": "astronomer",
        "fr": "astronome"
      },
      {
        "en": "atmosphere",
        "fr": "atmosphère"
      },
      {
        "en": "August",
        "fr": "août"
      },
      {
        "en": "authorize (to)",
        "fr": "autoriser"
      },
      {
        "en": "autograph",
        "fr": "autographe"
      },
      {
        "en": "automatic",
        "fr": "automatique"
      },
      {
        "en": "banana",
        "fr": "banane"
      },
      {
        "en": "Basic",
        "fr": "Basique"
      },
      {
        "en": "battery",
        "fr": "batterie"
      },
      {
        "en": "bicycle",
        "fr": "bicyclette"
      },
      {
        "en": "biography",
        "fr": "biographie"
      },
      {
        "en": "biology",
        "fr": "biologie"
      },
      {
        "en": "block",
        "fr": "Bloquer"
      },
      {
        "en": "brilliant",
        "fr": "brilliant-te"
      },
      {
        "en": "brilliant",
        "fr": "brilliant-e"
      },
      {
        "en": "British",
        "fr": "Britannique"
      },
      {
        "en": "bureaucracy",
        "fr": "bureaucratie"
      },
      {
        "en": "cabin",
        "fr": "cabine"
      },
      {
        "en": "cable",
        "fr": "câble"
      },
      {
        "en": "cafe",
        "fr": "café"
      },
      {
        "en": "cafeteria",
        "fr": "cafétéria"
      },
      {
        "en": "Calculator",
        "fr": "Calculatrice"
      },
      {
        "en": "camera",
        "fr": "caméra"
      },
      {
        "en": "candid",
        "fr": "candide"
      },
      {
        "en": "captain",
        "fr": "capitaine"
      },
      {
        "en": "capture",
        "fr": "Capturer"
      },
      {
        "en": "capture (to)",
        "fr": "capturer"
      },
      {
        "en": "category",
        "fr": "catégorie"
      },
      {
        "en": "Catholic",
        "fr": "Catholique"
      },
      {
        "en": "celebrate",
        "fr": "Célébrer"
      },
      {
        "en": "celebrate (to)",
        "fr": "célébrer"
      },
      {
        "en": "cement",
        "fr": "ciment"
      },
      {
        "en": "center",
        "fr": "centre"
      },
      {
        "en": "ceramic",
        "fr": "céramique"
      },
      {
        "en": "cereal",
        "fr": "céréale"
      },
      {
        "en": "ceremony",
        "fr": "cérémonie"
      },
      {
        "en": "change",
        "fr": "Changer"
      },
      {
        "en": "chimney",
        "fr": "cheminée"
      },
      {
        "en": "chimpanzee",
        "fr": "chimpanzé"
      },
      {
        "en": "chocolate",
        "fr": "chocolat"
      },
      {
        "en": "cholera",
        "fr": "choléra"
      },
      {
        "en": "cinema",
        "fr": "cinéma"
      },
      {
        "en": "circle",
        "fr": "cercle"
      },
      {
        "en": "circular",
        "fr": "circulaire"
      },
      {
        "en": "civilize",
        "fr": "civiliser"
      },
      {
        "en": "class",
        "fr": "classe"
      },
      {
        "en": "classic",
        "fr": "classique"
      },
      {
        "en": "classify (to)",
        "fr": "classifier"
      },
      {
        "en": "coast",
        "fr": "côte"
      },
      {
        "en": "colony",
        "fr": "colonie"
      },
      {
        "en": "color",
        "fr": "couleur"
      },
      {
        "en": "combination",
        "fr": "combinaison"
      },
      {
        "en": "comment",
        "fr": "commentaire"
      },
      {
        "en": "comment",
        "fr": "comentaire"
      },
      {
        "en": "committee",
        "fr": "comité"
      },
      {
        "en": "common",
        "fr": "commun"
      },
      {
        "en": "communicate",
        "fr": "Communiquer"
      },
      {
        "en": "company",
        "fr": "compagnie"
      },
      {
        "en": "compare (to)",
        "fr": "comparer"
      },
      {
        "en": "complete (to)",
        "fr": "compléter"
      },
      {
        "en": "comport",
        "fr": "comporter"
      },
      {
        "en": "confusing",
        "fr": "confus"
      },
      {
        "en": "consult",
        "fr": "consulter"
      },
      {
        "en": "consult (to)",
        "fr": "consulter"
      },
      {
        "en": "contagious",
        "fr": "contagieux-euse"
      },
      {
        "en": "continue (to)",
        "fr": "continuer"
      },
      {
        "en": "contract",
        "fr": "contracter"
      },
      {
        "en": "contract (to)",
        "fr": "contracter"
      },
      {
        "en": "control",
        "fr": "contrôle"
      },
      {
        "en": "convenient",
        "fr": "convénient"
      },
      {
        "en": "converse (to)",
        "fr": "converser"
      },
      {
        "en": "convert (to)",
        "fr": "convertir"
      },
      {
        "en": "correctly",
        "fr": "correctement"
      },
      {
        "en": "creativity",
        "fr": "créativité"
      },
      {
        "en": "criminal",
        "fr": "criminel"
      },
      {
        "en": "critical",
        "fr": "critique"
      },
      {
        "en": "curiosity",
        "fr": "curiosité"
      },
      {
        "en": "curious",
        "fr": "curieux-euse"
      },
      {
        "en": "curious",
        "fr": "curieux"
      },
      {
        "en": "Dangerous",
        "fr": "Dangereux"
      },
      {
        "en": "Debate",
        "fr": "Débat"
      },
      {
        "en": "December",
        "fr": "décembre"
      },
      {
        "en": "decide",
        "fr": "Décider"
      },
      {
        "en": "decide (to)",
        "fr": "décider"
      },
      {
        "en": "Decision",
        "fr": "Décision"
      },
      {
        "en": "decisive",
        "fr": "décisive"
      },
      {
        "en": "declare (to)",
        "fr": "déclarer"
      },
      {
        "en": "decoration",
        "fr": "décoration"
      },
      {
        "en": "delicate",
        "fr": "délicat-e"
      },
      {
        "en": "delicious",
        "fr": "délicieux-euse"
      },
      {
        "en": "democracy",
        "fr": "démocratie"
      },
      {
        "en": "demonstrate (to)",
        "fr": "démontrer"
      },
      {
        "en": "demonstrate(to)",
        "fr": "démontrer"
      },
      {
        "en": "depend (to)",
        "fr": "dépendre"
      },
      {
        "en": "deport (to)",
        "fr": "déporter"
      },
      {
        "en": "des ert",
        "fr": "déserter"
      },
      {
        "en": "describe (to)",
        "fr": "décrire"
      },
      {
        "en": "describe (to) déc",
        "fr": "rire"
      },
      {
        "en": "desert (to)",
        "fr": "déserter"
      },
      {
        "en": "despotism",
        "fr": "despotisme"
      },
      {
        "en": "destroy",
        "fr": "Détruire"
      },
      {
        "en": "destroy (to)",
        "fr": "détruire"
      },
      {
        "en": "detain (to)",
        "fr": "détenir"
      },
      {
        "en": "determine (to)",
        "fr": "déterminer"
      },
      {
        "en": "diamond",
        "fr": "diamant"
      },
      {
        "en": "dictator",
        "fr": "dictateur"
      },
      {
        "en": "dictionary",
        "fr": "dictionnaire"
      },
      {
        "en": "Difference",
        "fr": "Différence"
      },
      {
        "en": "different",
        "fr": "différent-e"
      },
      {
        "en": "different",
        "fr": "Different-e"
      },
      {
        "en": "difficultly",
        "fr": "difficulté"
      },
      {
        "en": "dinosaur",
        "fr": "dinosaure"
      },
      {
        "en": "directly",
        "fr": "directement"
      },
      {
        "en": "director",
        "fr": "directeur"
      },
      {
        "en": "disappear (to)",
        "fr": "disparaître"
      },
      {
        "en": "disaster",
        "fr": "désastre"
      },
      {
        "en": "discuss (to)",
        "fr": "discuter"
      },
      {
        "en": "disgrace",
        "fr": "disgrâce"
      },
      {
        "en": "distribute (to)",
        "fr": "distribuer"
      },
      {
        "en": "doctor",
        "fr": "docteur"
      },
      {
        "en": "drama",
        "fr": "drame"
      },
      {
        "en": "Dramatic",
        "fr": "Dramatique"
      },
      {
        "en": "ecology",
        "fr": "écologie"
      },
      {
        "en": "economic",
        "fr": "économique"
      },
      {
        "en": "economy",
        "fr": "économie"
      },
      {
        "en": "edit",
        "fr": "Éditer"
      },
      {
        "en": "Edition",
        "fr": "Édition"
      },
      {
        "en": "effect",
        "fr": "effet"
      },
      {
        "en": "effective",
        "fr": "efective"
      },
      {
        "en": "egoist",
        "fr": "égoïste"
      },
      {
        "en": "egoist",
        "fr": "egoïste"
      },
      {
        "en": "electric",
        "fr": "électrique"
      },
      {
        "en": "electricity",
        "fr": "électricité"
      },
      {
        "en": "elephant",
        "fr": "éléphant"
      },
      {
        "en": "email",
        "fr": "e-mail"
      },
      {
        "en": "Emotion",
        "fr": "Émotion"
      },
      {
        "en": "encourage",
        "fr": "Encourager"
      },
      {
        "en": "energy",
        "fr": "énergie"
      },
      {
        "en": "enormous",
        "fr": "énorme"
      },
      {
        "en": "enter (to)",
        "fr": "entrer"
      },
      {
        "en": "equality",
        "fr": "égalité"
      },
      {
        "en": "escape (to)",
        "fr": "échapper"
      },
      {
        "en": "especially",
        "fr": "spécialement"
      },
      {
        "en": "establish",
        "fr": "Établir"
      },
      {
        "en": "estimate (to)",
        "fr": "estimer"
      },
      {
        "en": "evidently",
        "fr": "évidemment"
      },
      {
        "en": "exactly",
        "fr": "exactement"
      },
      {
        "en": "exaggerate",
        "fr": "exagérer"
      },
      {
        "en": "exalt",
        "fr": "exalter"
      },
      {
        "en": "exalt (to)",
        "fr": "exalter"
      },
      {
        "en": "examine (to)",
        "fr": "examiner"
      },
      {
        "en": "example",
        "fr": "exemple"
      },
      {
        "en": "exclaim",
        "fr": "exclamer"
      },
      {
        "en": "exclaim (to)",
        "fr": "exclamer"
      },
      {
        "en": "excuse",
        "fr": "excuser"
      },
      {
        "en": "exercise",
        "fr": "exercice"
      },
      {
        "en": "exotic",
        "fr": "exotique"
      },
      {
        "en": "experience",
        "fr": "expérience"
      },
      {
        "en": "export (to)",
        "fr": "exporter"
      },
      {
        "en": "extraordinary",
        "fr": "extraordinaire"
      },
      {
        "en": "Fabulous",
        "fr": "Fabuleux"
      },
      {
        "en": "facade",
        "fr": "façade"
      },
      {
        "en": "family",
        "fr": "famille"
      },
      {
        "en": "famous",
        "fr": "fameux-euse"
      },
      {
        "en": "famous",
        "fr": "fameux"
      },
      {
        "en": "fantastic",
        "fr": "fantastique"
      },
      {
        "en": "fantastic",
        "fr": "fantstique"
      },
      {
        "en": "fascinate",
        "fr": "Fasciner"
      },
      {
        "en": "fascinate (to)",
        "fr": "fasciner"
      },
      {
        "en": "favorite",
        "fr": "favori-te"
      },
      {
        "en": "ferment (to)",
        "fr": "fermenter"
      },
      {
        "en": "ferocious",
        "fr": "féroce"
      },
      {
        "en": "finally",
        "fr": "finalement"
      },
      {
        "en": "finish",
        "fr": "Finir"
      },
      {
        "en": "firm",
        "fr": "firme"
      },
      {
        "en": "flexibility",
        "fr": "flexibilité"
      },
      {
        "en": "flower",
        "fr": "fleur"
      },
      {
        "en": "Frequent",
        "fr": "Fréquent"
      },
      {
        "en": "function",
        "fr": "fonction"
      },
      {
        "en": "funeral",
        "fr": "funérailles"
      },
      {
        "en": "furious",
        "fr": "furieux-euse"
      },
      {
        "en": "galaxy",
        "fr": "galaxie"
      },
      {
        "en": "garden",
        "fr": "jardin"
      },
      {
        "en": "gas",
        "fr": "gaz"
      },
      {
        "en": "general",
        "fr": "général-e"
      },
      {
        "en": "Generation",
        "fr": "Génération"
      },
      {
        "en": "generous",
        "fr": "généreux-euse"
      },
      {
        "en": "Generous",
        "fr": "Généreux"
      },
      {
        "en": "geography",
        "fr": "géographie"
      },
      {
        "en": "geology",
        "fr": "géologie"
      },
      {
        "en": "giraffe",
        "fr": "girafe"
      },
      {
        "en": "glorious",
        "fr": "glorieux-euse"
      },
      {
        "en": "glorious",
        "fr": "glorieux"
      },
      {
        "en": "gorilla",
        "fr": "gorille"
      },
      {
        "en": "govern",
        "fr": "Gouverner"
      },
      {
        "en": "Grace",
        "fr": "Grâce"
      },
      {
        "en": "gracious",
        "fr": "gracieux-euse"
      },
      {
        "en": "gracious gracieux-eu",
        "fr": "se"
      },
      {
        "en": "gratify (to)",
        "fr": "gratifier"
      },
      {
        "en": "group",
        "fr": "groupe"
      },
      {
        "en": "Guitar",
        "fr": "Guitare"
      },
      {
        "en": "harass",
        "fr": "Harceler"
      },
      {
        "en": "helicopter",
        "fr": "hélicoptère"
      },
      {
        "en": "hippopotamus",
        "fr": "hippopotame"
      },
      {
        "en": "history",
        "fr": "histoire"
      },
      {
        "en": "honor",
        "fr": "honneur"
      },
      {
        "en": "honor",
        "fr": "honnneur"
      },
      {
        "en": "horror",
        "fr": "horreur"
      },
      {
        "en": "hospital",
        "fr": "hôpital"
      },
      {
        "en": "hotel",
        "fr": "hôtel"
      },
      {
        "en": "hour",
        "fr": "heure"
      },
      {
        "en": "human",
        "fr": "humain-e"
      },
      {
        "en": "human",
        "fr": "humain"
      },
      {
        "en": "idea",
        "fr": "Idée"
      },
      {
        "en": "idea",
        "fr": "idèe"
      },
      {
        "en": "idealism",
        "fr": "idéalisme"
      },
      {
        "en": "identify",
        "fr": "Identifier"
      },
      {
        "en": "identity",
        "fr": "identité"
      },
      {
        "en": "identity (to)",
        "fr": "identifier"
      },
      {
        "en": "ignorant",
        "fr": "ignorant-e"
      },
      {
        "en": "ignore",
        "fr": "Ignorer"
      },
      {
        "en": "ignore (to)",
        "fr": "ignorer"
      },
      {
        "en": "Illegal",
        "fr": "Illégal"
      },
      {
        "en": "imaginary",
        "fr": "imaginaire"
      },
      {
        "en": "imagine (to)",
        "fr": "imaginer"
      },
      {
        "en": "immediately",
        "fr": "immédiatement"
      },
      {
        "en": "immediately",
        "fr": "inmédiatement"
      },
      {
        "en": "imp lore (to)",
        "fr": "implorer"
      },
      {
        "en": "implore (to)",
        "fr": "implorer"
      },
      {
        "en": "import (to)",
        "fr": "importer"
      },
      {
        "en": "import (to) imp",
        "fr": "orter"
      },
      {
        "en": "important",
        "fr": "important-e"
      },
      {
        "en": "incredible",
        "fr": "incrédible"
      },
      {
        "en": "incredible",
        "fr": "incrédíble"
      },
      {
        "en": "independence",
        "fr": "indépendance"
      },
      {
        "en": "industry",
        "fr": "industrie"
      },
      {
        "en": "insect",
        "fr": "insecte"
      },
      {
        "en": "inseparable",
        "fr": "inséparable"
      },
      {
        "en": "insert (to)",
        "fr": "insérer"
      },
      {
        "en": "insist (to)",
        "fr": "insister"
      },
      {
        "en": "insult (to)",
        "fr": "insulter"
      },
      {
        "en": "interest",
        "fr": "intérêt"
      },
      {
        "en": "interesting",
        "fr": "intéressant-e"
      },
      {
        "en": "interrupt (to)",
        "fr": "interrompre"
      },
      {
        "en": "introduce (to)",
        "fr": "introduire"
      },
      {
        "en": "invent (to)",
        "fr": "inventer"
      },
      {
        "en": "investigate (to)",
        "fr": "investiguer"
      },
      {
        "en": "invite (to)",
        "fr": "inviter"
      },
      {
        "en": "island",
        "fr": "île"
      },
      {
        "en": "June",
        "fr": "Juin"
      },
      {
        "en": "justify",
        "fr": "Justifier"
      },
      {
        "en": "justify (to)",
        "fr": "justifier"
      },
      {
        "en": "juvenile",
        "fr": "juvénile"
      },
      {
        "en": "Kilogram",
        "fr": "Kilogramme"
      },
      {
        "en": "Kilometer",
        "fr": "Kilomètre"
      },
      {
        "en": "lament (to)",
        "fr": "lamenter"
      },
      {
        "en": "Language",
        "fr": "Langue"
      },
      {
        "en": "Legal",
        "fr": "Légal"
      },
      {
        "en": "legality",
        "fr": "légalité"
      },
      {
        "en": "lemon",
        "fr": "limon"
      },
      {
        "en": "lens",
        "fr": "lentille"
      },
      {
        "en": "leopard",
        "fr": "léopard"
      },
      {
        "en": "lesson",
        "fr": "leçon"
      },
      {
        "en": "Liberty",
        "fr": "Liberté"
      },
      {
        "en": "limit",
        "fr": "Limiter"
      },
      {
        "en": "line",
        "fr": "ligne"
      },
      {
        "en": "line",
        "fr": "lígne"
      },
      {
        "en": "list",
        "fr": "liste"
      },
      {
        "en": "local",
        "fr": "local-e"
      },
      {
        "en": "locate (to)",
        "fr": "localiser"
      },
      {
        "en": "Logical",
        "fr": "Logique"
      },
      {
        "en": "lucid",
        "fr": "lucide"
      },
      {
        "en": "magic",
        "fr": "magique"
      },
      {
        "en": "magician",
        "fr": "magicien"
      },
      {
        "en": "magnetic",
        "fr": "magnétique"
      },
      {
        "en": "magnificent",
        "fr": "magnifique"
      },
      {
        "en": "manner",
        "fr": "manière"
      },
      {
        "en": "manual",
        "fr": "manuel-elle"
      },
      {
        "en": "March",
        "fr": "mars"
      },
      {
        "en": "march (to)",
        "fr": "marcher"
      },
      {
        "en": "marionette",
        "fr": "marionnette"
      },
      {
        "en": "market",
        "fr": "marché"
      },
      {
        "en": "Material",
        "fr": "Matériel"
      },
      {
        "en": "mechanism",
        "fr": "mécanisme"
      },
      {
        "en": "medal",
        "fr": "médaille"
      },
      {
        "en": "medal",
        "fr": "medaille"
      },
      {
        "en": "memory",
        "fr": "mémoire"
      },
      {
        "en": "mention",
        "fr": "Mentionner"
      },
      {
        "en": "metal",
        "fr": "métal"
      },
      {
        "en": "meteor",
        "fr": "météore"
      },
      {
        "en": "meteorology",
        "fr": "météorologie"
      },
      {
        "en": "metro",
        "fr": "métro"
      },
      {
        "en": "modify",
        "fr": "Modifier"
      },
      {
        "en": "modify (to)",
        "fr": "modifier"
      },
      {
        "en": "moral",
        "fr": "moral-e"
      },
      {
        "en": "music",
        "fr": "musique"
      },
      {
        "en": "mysterious",
        "fr": "mystérieux"
      },
      {
        "en": "nationality",
        "fr": "nationalité"
      },
      {
        "en": "natural",
        "fr": "naturel-le"
      },
      {
        "en": "Natural",
        "fr": "Naturel"
      },
      {
        "en": "naturally",
        "fr": "naturellement"
      },
      {
        "en": "navigate",
        "fr": "Naviguer"
      },
      {
        "en": "necessity",
        "fr": "nécessité"
      },
      {
        "en": "nectar",
        "fr": "néctar"
      },
      {
        "en": "negotiate (to)",
        "fr": "négocier"
      },
      {
        "en": "nervous",
        "fr": "nerveux-euse"
      },
      {
        "en": "Nervous",
        "fr": "Nerveux"
      },
      {
        "en": "normally",
        "fr": "normalement"
      },
      {
        "en": "note",
        "fr": "Noter"
      },
      {
        "en": "notify (to)",
        "fr": "notifier"
      },
      {
        "en": "obedience",
        "fr": "obédience"
      },
      {
        "en": "object",
        "fr": "objet"
      },
      {
        "en": "object",
        "fr": "objèt"
      },
      {
        "en": "observatory",
        "fr": "observatoire"
      },
      {
        "en": "observe",
        "fr": "Observer"
      },
      {
        "en": "obtain",
        "fr": "Obtenir"
      },
      {
        "en": "ocean",
        "fr": "océan"
      },
      {
        "en": "October",
        "fr": "octobre"
      },
      {
        "en": "Opera",
        "fr": "Opéra"
      },
      {
        "en": "operate",
        "fr": "opérer"
      },
      {
        "en": "operate (to)",
        "fr": "opèrer"
      },
      {
        "en": "operation",
        "fr": "opération"
      },
      {
        "en": "optimism",
        "fr": "optimisme"
      },
      {
        "en": "ordinary",
        "fr": "ordinaire"
      },
      {
        "en": "organism",
        "fr": "organisme"
      },
      {
        "en": "organize (to)",
        "fr": "organiser"
      },
      {
        "en": "pacify (to)",
        "fr": "pacifier"
      },
      {
        "en": "Painter",
        "fr": "Peintre"
      },
      {
        "en": "palace",
        "fr": "palais"
      },
      {
        "en": "panic",
        "fr": "panique"
      },
      {
        "en": "paper",
        "fr": "papier"
      },
      {
        "en": "paralyze (to)",
        "fr": "paraliser"
      },
      {
        "en": "park",
        "fr": "parc"
      },
      {
        "en": "Parliamentary",
        "fr": "Parlementaire"
      },
      {
        "en": "participate (to)",
        "fr": "participer"
      },
      {
        "en": "Particular",
        "fr": "Particulier"
      },
      {
        "en": "partner",
        "fr": "partenaire"
      },
      {
        "en": "penguin",
        "fr": "pingouin"
      },
      {
        "en": "perfect",
        "fr": "parfait"
      },
      {
        "en": "perfume",
        "fr": "parfum"
      },
      {
        "en": "permanent",
        "fr": "permanent-e"
      },
      {
        "en": "personality",
        "fr": "personnalité"
      },
      {
        "en": "pharmacy",
        "fr": "pharmacie"
      },
      {
        "en": "philosophy",
        "fr": "philosophie"
      },
      {
        "en": "photocopy",
        "fr": "photocopie"
      },
      {
        "en": "photograph",
        "fr": "photographie"
      },
      {
        "en": "photographer",
        "fr": "photographe"
      },
      {
        "en": "picnic",
        "fr": "pique-nique"
      },
      {
        "en": "pioneer",
        "fr": "pionnier"
      },
      {
        "en": "planet",
        "fr": "planète"
      },
      {
        "en": "planetarium",
        "fr": "planétarium"
      },
      {
        "en": "plant",
        "fr": "plante"
      },
      {
        "en": "plastic",
        "fr": "plastique"
      },
      {
        "en": "plate",
        "fr": "plat"
      },
      {
        "en": "political",
        "fr": "politique"
      },
      {
        "en": "positive",
        "fr": "positif"
      },
      {
        "en": "possess",
        "fr": "Posséder"
      },
      {
        "en": "possibility",
        "fr": "possibilité"
      },
      {
        "en": "practice",
        "fr": "pratique"
      },
      {
        "en": "practice (to)",
        "fr": "pratiquer"
      },
      {
        "en": "prepare (to)",
        "fr": "préparer"
      },
      {
        "en": "present",
        "fr": "présent"
      },
      {
        "en": "present",
        "fr": "Présenter"
      },
      {
        "en": "present (to)",
        "fr": "présenter"
      },
      {
        "en": "presentation",
        "fr": "présentation"
      },
      {
        "en": "priority",
        "fr": "priorité"
      },
      {
        "en": "problem",
        "fr": "problème"
      },
      {
        "en": "productivity",
        "fr": "productivité"
      },
      {
        "en": "professional",
        "fr": "professionnel-lle"
      },
      {
        "en": "professional",
        "fr": "professionnel-le"
      },
      {
        "en": "professional",
        "fr": "professionnel"
      },
      {
        "en": "project",
        "fr": "projet"
      },
      {
        "en": "prudent",
        "fr": "prudent-e"
      },
      {
        "en": "psychology",
        "fr": "psychologie"
      },
      {
        "en": "publicity",
        "fr": "publicité"
      },
      {
        "en": "qualify",
        "fr": "Qualifier"
      },
      {
        "en": "Quality",
        "fr": "Qualité"
      },
      {
        "en": "real",
        "fr": "réel"
      },
      {
        "en": "reality",
        "fr": "réalité"
      },
      {
        "en": "really",
        "fr": "réalité"
      },
      {
        "en": "region",
        "fr": "région"
      },
      {
        "en": "Regular",
        "fr": "Régulier"
      },
      {
        "en": "remedy",
        "fr": "remède"
      },
      {
        "en": "remedy",
        "fr": "reméde"
      },
      {
        "en": "represent (to)",
        "fr": "représenter"
      },
      {
        "en": "reserve",
        "fr": "Réserver"
      },
      {
        "en": "resist",
        "fr": "Résister"
      },
      {
        "en": "respond",
        "fr": "Répondre"
      },
      {
        "en": "responsibility",
        "fr": "responsabilité"
      },
      {
        "en": "result",
        "fr": "résultat"
      },
      {
        "en": "resume",
        "fr": "résumé"
      },
      {
        "en": "retire (to) (se)",
        "fr": "retirer"
      },
      {
        "en": "reunion",
        "fr": "réunion"
      },
      {
        "en": "Revolution",
        "fr": "Révolution"
      },
      {
        "en": "rich",
        "fr": "riche"
      },
      {
        "en": "rock",
        "fr": "roche"
      },
      {
        "en": "Romantic",
        "fr": "Romantique"
      },
      {
        "en": "salad",
        "fr": "salade"
      },
      {
        "en": "salary",
        "fr": "salaire"
      },
      {
        "en": "scientific",
        "fr": "scientifique"
      },
      {
        "en": "security",
        "fr": "sécurité"
      },
      {
        "en": "sensitivity",
        "fr": "sensibilité"
      },
      {
        "en": "September",
        "fr": "septembre"
      },
      {
        "en": "series",
        "fr": "série"
      },
      {
        "en": "serious",
        "fr": "sérieux"
      },
      {
        "en": "simplify (to)",
        "fr": "simplifier"
      },
      {
        "en": "Sincere",
        "fr": "Sincère"
      },
      {
        "en": "socialist",
        "fr": "socialiste"
      },
      {
        "en": "sociology",
        "fr": "sociologie"
      },
      {
        "en": "solid",
        "fr": "solide"
      },
      {
        "en": "solidify",
        "fr": "solidifier"
      },
      {
        "en": "soup",
        "fr": "soupe"
      },
      {
        "en": "special",
        "fr": "spécial-e"
      },
      {
        "en": "special",
        "fr": "special-e"
      },
      {
        "en": "special",
        "fr": "spécial"
      },
      {
        "en": "splendid",
        "fr": "splendide"
      },
      {
        "en": "stability",
        "fr": "stabilité"
      },
      {
        "en": "statistic",
        "fr": "statistique"
      },
      {
        "en": "statistics",
        "fr": "statistique"
      },
      {
        "en": "stomach",
        "fr": "estomac"
      },
      {
        "en": "strategy",
        "fr": "stratégie"
      },
      {
        "en": "study",
        "fr": "Étudier"
      },
      {
        "en": "study (to)",
        "fr": "étudier"
      },
      {
        "en": "stupid",
        "fr": "stupide"
      },
      {
        "en": "supermarket",
        "fr": "supermarché"
      },
      {
        "en": "systematic",
        "fr": "systématique"
      },
      {
        "en": "telephone",
        "fr": "téléphone"
      },
      {
        "en": "telescope",
        "fr": "télescope"
      },
      {
        "en": "television",
        "fr": "télévision"
      },
      {
        "en": "terminate (to)",
        "fr": "terminer"
      },
      {
        "en": "testimony",
        "fr": "témoignage"
      },
      {
        "en": "theory",
        "fr": "théorie"
      },
      {
        "en": "tomato",
        "fr": "tomate"
      },
      {
        "en": "totally",
        "fr": "totalement"
      },
      {
        "en": "touch",
        "fr": "Toucher"
      },
      {
        "en": "tourist",
        "fr": "touriste"
      },
      {
        "en": "Traditional",
        "fr": "Traditionnel"
      },
      {
        "en": "traffic",
        "fr": "trafic"
      },
      {
        "en": "transform",
        "fr": "Transformer"
      },
      {
        "en": "trap (to)",
        "fr": "attraper"
      },
      {
        "en": "triumphant",
        "fr": "triumphant-e"
      },
      {
        "en": "trumpet",
        "fr": "trompette"
      },
      {
        "en": "uniform",
        "fr": "uniforme"
      },
      {
        "en": "unify (to)",
        "fr": "unifier"
      },
      {
        "en": "unite",
        "fr": "Unir"
      },
      {
        "en": "Universe",
        "fr": "Univers"
      },
      {
        "en": "university",
        "fr": "université"
      },
      {
        "en": "urgency",
        "fr": "urgence"
      },
      {
        "en": "use",
        "fr": "Utiliser"
      },
      {
        "en": "useful",
        "fr": "utile"
      },
      {
        "en": "usual",
        "fr": "usuel-le"
      },
      {
        "en": "utility",
        "fr": "utilité"
      },
      {
        "en": "utilize (to)",
        "fr": "utiliser"
      }
    ]
  }
};

const PRODUCT_NAME = "Dictionnaire Franglais";
const STORAGE_KEY = "df_progress_v1";

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
  const card = list[Math.min(index, total - 1)];

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
    const next = (index + 1) % total;
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
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.05 }}>{card?.en || "—"}</div>
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
              <div style={{ fontSize: 12, color: "#666", marginBottom: 6 }}>Your turn… (tap 🎤 again to reveal)</div>
              <div style={{ height: 8, background: "#f2f2f2", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${turnPct}%`, background: "#111" }} />
              </div>
            </div>
          )}

          {revealed && (
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 14, color: "#666" }}>French</div>
              <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.05 }}>{card?.fr || "—"}</div>
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

      <footer style={{ fontSize: 12, color: "#777", paddingBottom: 8, textAlign: "center" }}>Your progress is saved on this device.</footer>
    </div>
  );
}
