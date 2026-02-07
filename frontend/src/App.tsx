import { useState } from "react";
import Overview from "./pages/Overview";
import Products from "./pages/Products";

type Page = "overview" | "products";

function App() {
  const [page, setPage] = useState<Page>("overview");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-100 p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4">Kitro</h2>

        <button
          className={`py-2 px-4 rounded ${
            page === "overview" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
          onClick={() => setPage("overview")}
        >
          Overview
        </button>

        <button
          className={`py-2 px-4 rounded ${
            page === "products" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
          onClick={() => setPage("products")}
        >
          Products
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {page === "overview" && <Overview />}
        {page === "products" && <Products />}
      </main>
    </div>
  );
}

export default App;
