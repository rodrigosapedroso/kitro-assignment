import { useState } from "react";
import Overview from "./pages/Overview";
import Products from "./pages/Products";

type Page = "overview" | "products";

function App() {
  const [page, setPage] = useState<Page>("overview");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={{ width: 220, background: "#f5f5f5", padding: 16 }}>
        <h2>Kitro</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button onClick={() => setPage("overview")}>Overview</button>
          <button onClick={() => setPage("products")}>Products</button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: 24 }}>
        {page === "overview" && <Overview />}
        {page === "products" && <Products />}
      </main>

    </div>
  );
}

export default App;