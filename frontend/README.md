# Kitro - Frontend

This is the frontend for **Kitro**, a simple inventory management application built to interact with the Kitro API. It provides a clean and intuitive interface to track products, monitor stock levels, visualize sales data, and display key metrics for a restaurant or retail environment.

## User Stories

1. ✅ Persistent sidebar with Overview and Products navigation tabs
2. ✅ Kitro branding consistent across the application
6. ✅ Total products sold displayed in Overview page
7. ✅ Total products available displayed in Overview page
8. ✅ Total gains after taxes displayed in Overview page
14. ✅ Searchable table presented in Products page

## Technology Stack
- React 19
- TypeScript
- Vite
- TailwindCSS

## Getting Started

### Prerequisites
- Node.js 18+
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
The application will be available at `http://localhost:5173`

## Project Structure

```
frontend/
├── src/
│   ├── App.tsx          # Root React component
│   ├── main.tsx         # Application entry point
│   ├── assets/          # Static assets (Kitro Logo)
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page-level components
│   ├── services/        # API calls 
│   └── types/           # Shared TypeScript types & interfaces
├── package.json         # Project metadata and dependencies
├── README.md            # Frontend documentation
└── .gitignore           # Frontend-specific ignored files
```


