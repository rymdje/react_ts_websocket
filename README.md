# react_ts_websocket

Projet réalisé en cours pour apprendre à utiliser les WebSockets dans une application React avec TypeScript.

## Technologies

- React 18 + TypeScript
- Vite
- Material UI (MUI)
- WebSocket (API native du navigateur)

## Fonctionnalités

- Compteur interactif (useState)
- Prix du Bitcoin en temps réel via WebSocket
- Données de trading en temps réel via WebSocket

## Structure

src/
├── composants/
│   ├── CardCompteur.tsx
│   └── ws/
│       ├── CardWebSocketBitCoin.tsx
│       └── CardWebSocketTrade.tsx
├── App.tsx
└── main.tsx

## Installation

```bash
npm install
npm run dev
```

L'application tourne sur http://localhost:5173
