# Kitro Assignment - Product Management System

A sample full-stack web application for Kitro: a swiss company founded in 2017 which provides an automated food waste management solution for the hospitality industry. 

## Features Implemented

### User Stories
1. ✅ Persistent sidebar with Overview and Products navigation tabs
2. ✅ Kitro branding consistent across the application
6. ✅ Total products sold displayed in Overview page
7. ✅ Total products available displayed in Overview page
8. ✅ Total gains after taxes displayed in Overview page
14. ✅ Searchable table presented in Products page

## Tech Stack
- **Frontend**: React 19 + TypeScript + Tailwind CSS
- **Backend**: Python 3.11+ + FastAPI + SQLAlchemy
- **Database**: PostgreSQL (default)

## Setup Instructions

### Prerequisites
- Node.js 18+
- Python 3.11+
- PostgreSQL 14+

### Database Setup (PostgreSQL)
1. Install and start PostgreSQL.
2. Create a database:
   ```bash
   createdb kitro
   ```
   Or in psql: `CREATE DATABASE kitro;`

3. Create a `backend/.env` file with your credentials based on the provided `.env.example` template:
   ```
   cp .env.example .env
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`

4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

5. Seed the database:
   ```
   python seed.py
   ```

7. Start the server:
   ```
    cd backend
    python startup.py
    ```

    Alternatively, you can run the application directly with uvicorn:

    ```
    cd backend
    uvicorn app.main:app --reload
    ```
 
The API will be available at `http://127.0.0.1:8000`

API documentation: `http://127.0.0.1:8000/docs`

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
    npm run dev
    ```

   The application will be available at `http://localhost:5173`

## Project Structure
```
kitro-assignment/
├── backend/
│   ├── app/
│   │   ├── __init__.py     # Turns app into a Python package
│   │   ├── main.py         # FastAPI application
│   │   ├── database.py     # Database configuration
│   │   ├── models.py       # SQLAlchemy models
│   │   ├── schemas.py      # Pydantic schemas
│   │   └── routers.py      # API endpoints
│   ├── requirements.txt    # Python dependencies
│   ├── startup.py          # Starts the FastAPI server
│   ├── seed.py             # Database seeding script
│   ├── README.md
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Application entry point
│   │   ├── assets/         # Static assets: images, logos 
│   │   ├── components/     # Reusable React UI components
│   │   ├── hooks/          # Shared Logic and State Management
│   │   ├── pages/          # Page components
│   │   ├── services/       # API communication
│   │   └── types/          # Type definitions
│   ├── package.json        # Node dependencies
│   ├── README.md
│   └── .gitignore
├── README.md
└── .gitignore
```

## Features Details

### Sidebar
- Clickable Kitro Logo 
- Overview and Products tabs

### Overview Page
- Metrics opening dashboard
- Barchart for each clickable metrics card

### Products Page
- Searchable product table

## API Endpoints

### Products
- `GET /products` - List products (returns name, stock quantity, total sold, price) 

### Overview
- `GET /metrics` - Get overview metrics
- `GET /products` - Get product names, stock quantities, units sold, price
