import { useState } from "react";
import type { Products } from "../types";
import Table from "../components/Table";
import SearchBox from "../components/SearchBox";
import useProducts from "../hooks/useProducts";

export default function Products() {

  const [searchTerm, setSearchTerm] = useState("");

  const { products, loading, error } = useProducts();
  
  const filteredProducts = products?.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const headers = [
  {
    header: "Name",
    value: (product: Products) => product.name,
  },
  {
    header: "Stock Quantity (Units)",
    value: (product: Products) => product.stock_quantity,
  },
  {
    header: "Total Sold (Units)",
    value: (product: Products) => product.total_sold,
  },
  {
    header: "Price (CHF)",
    value: (product: Products) => product.price.toFixed(2),
  },
];

  if (error) return <p className="text-red-200">{error}</p>;

  return (
    <>
      <h2 className="tracking-wide text-red-200 mb-6 px-6 mt-10 uppercase">
        <span className="text-2xl font-medium">
          HERE YOU CAN FIND YOUR
          <br />
        </span>
        <span className="text-4xl font-bold">
          FULL PRODUCT LISTING
        </span>
      </h2>
      <div className="p-6">
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div>
            <SearchBox 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={setSearchTerm}
            />
            <Table 
              data={filteredProducts} 
              headers={headers} 
            />
          </div>
        )}   
      </div>
    </>
  );   
}