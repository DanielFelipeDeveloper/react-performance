import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultProps) {
  // const totalPrice = useMemo(() => {
  //   return results.reduce((total, product) => {
  //     return total + product.price;
  //   }, 0)
  // }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />)}
    </div>
  );
}