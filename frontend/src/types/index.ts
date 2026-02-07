export interface Products {
  name: string;
  stock_quantity: number;
  total_sold: number;
  price: number; 
}

export interface Metrics {
  total_stock: number;               
  total_sold: number;                
  total_gains_after_taxes: number;   
}