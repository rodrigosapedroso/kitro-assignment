# Kitro - Frontend

This is the frontend for **Kitro**, a simple inventory management application built to interact with the Kitro API. It provides a clean and intuitive interface to track products, monitor stock levels, visualize sales data, and display key metrics for a restaurant or retail environment.

## User Stories
- 1 - Sidebar with Overview and Products navigation tabs
- 2 - Kitro's branding consistent across the app
- 6 - Total products sold displayed in Overview page
- 7 - Total products available displayed in Overview page
- 8 - Total gains after taxes displayed in Overview page
- 14 - Searchable table presented in Products page

## Technology Stack
- React 19
- TypeScript
- Vite
- TailwindCSS

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:

   ```
   npm install
   ```

### Development
Start the development server:
```
npm run dev
```
The application will be available at http://localhost:5173

## Project Structure
- `src/assets/` - Static assets (Kitro logo)
- `src/components/` - Reusable React UI components
- `src/hooks/` - Custom React hooks for shared logic and state management
- `src/pages/` - Application pages
- `src/services/` - Service module for API communication
- `src/types/` - TypeScript type definitions
- `src/App.tsx` - Main application component
- `src/main.tsx` - Application entry point

