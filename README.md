

# Real-Time Crypto Market Dashboard

This project is a dynamic, clear, and reusable Next.js (App Router) dashboard for real-time cryptocurrency market data. Built with TypeScript and Tailwind CSS, it follows best practices for modularity and maintainability.


## Features
- Markets list with at least 10 trading pairs
- Real-time updates via Binance WebSocket
- Market details page with live data
- Favorites (persisted in localStorage)
- Search by symbol, filter & sort (favorites first, alphabetical, highest price, highest 24h change)
- Recently viewed markets section
- Responsive design (desktop & mobile)
- Connection status and auto-reconnect
- Loading skeletons, error, and empty states
- TypeScript, Tailwind CSS, clean architecture
- Light/dark theme toggle (with persistence)
- Polished number/time formatting



## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.


## Folder Structure
- `src/components` – Reusable UI components
- `src/features` – Feature-specific components (markets, favorites, etc)
- `src/hooks` – Custom React hooks
- `src/utils` – Utility functions
- `src/types` – TypeScript types/interfaces

- Uses Binance public WebSocket and REST APIs
- Favorites and recently viewed are stored in browser localStorage
- Handles WebSocket reconnects and connection status

## Improvements (with more time)
- More advanced error handling
- Unit and integration tests
- More sorting/filtering options
- Better accessibility and keyboard navigation

## Architecture
- **App structure:** Modular, feature-based folders for clarity and reusability
- **Real-time data:** Managed via custom hooks using WebSocket API
- **State management:** React hooks for local state, localStorage for persistence
- **Resilience:** Auto-reconnect logic for WebSocket, clear connection status UI
- **UI polish:** Skeletons, formatting, and theme toggle for best UX

