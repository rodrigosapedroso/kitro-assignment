import { useState } from "react";
import MainCard from "../components/MainCard";
import DetailCard from "../components/DetailCard";
import useProducts from "../hooks/useProducts";
import useMetrics from "../hooks/useMetrics";

type Detail = "stock" | "sold" | "gains" | null;

export default function Overview() {

  const [detail, setDetail] = useState<Detail>(null);

  const { products } = useProducts();
  const { metrics, loading: metricsLoading, error: metricsError } = useMetrics();

  function handleCardClick(type: Detail) {
    setDetail(prev => (prev === type ? null : type));
  }

  const stockItems = products.map((product) => ({
    label: product.name,
    value: product.stock_quantity,
  }));

  const soldItems = products.map((product) => ({
    label: product.name,
    value: product.total_sold,
  }));

  const gainsItems = products.map((product) => ({
    label: product.name,
    value: Math.round(product.total_sold * product.price * 0.93),
  }));

  if (metricsError) return <p className="text-red-500">{metricsError}</p>;

  return (
    <>
      <h2 className="tracking-wide text-red-200 mb-6 px-6 mt-10 uppercase">
        <span className="text-2xl font-medium">
          SOME OF YOUR CORE
          <br />
        </span>
        <span className="text-4xl font-bold">
          BUSINESS DATA
        </span>
      </h2>
      <div className="grid grid-cols-3 gap-6 p-6">
        {metricsLoading? (
          <p>Loading metrics...</p>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <MainCard 
                label="Total Stock (Units)" 
                value={metrics?.total_stock}
                onClick={() => handleCardClick("stock")}
                activeItem={detail === "stock"}
              />
              {detail === "stock" && (
                <div className="col-span-3">
                  <DetailCard 
                    title="Detailed Stock:" 
                    items={stockItems} />
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-4">
              <MainCard 
                label="Total Sold (Units)" 
                value={metrics?.total_sold}
                onClick={() => handleCardClick("sold")}
                activeItem={detail === "sold"}
              />
              {detail === "sold" && (
                <div className="col-span-3">
                  <DetailCard 
                    title="Selling Details:" 
                    items={soldItems}/>
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-4">
              <MainCard 
                label="Total Gains After Taxes (CHF)" 
                value={metrics?.total_gains_after_taxes.toFixed(2)}
                onClick={() => handleCardClick("gains")}
                activeItem={detail === "gains"}
              />
              {detail === "gains" && (
                <div className="col-span-3">
                  <DetailCard 
                    title="Detailed Gains:" 
                    items={gainsItems} />
                </div>
              )}
            </div>
          </>
        )}    
      </div>
    </>
  );
}
