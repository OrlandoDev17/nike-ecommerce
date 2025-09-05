"use client";

import ProductCard from "@/components/ui/ProductCard";
import Loader from "@/components/ui/Loader";
import { CartItem } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";

interface ProductListProps {
  products: CartItem[];
  loading: boolean;
  error: string | null;
}

export default function ProductList({
  products,
  loading,
  error,
}: ProductListProps) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <>
      {error && <p>Error: {error}</p>}
      <span className="text-xl text-gray-500 font-bold font-titillium-web">
        Mostrando {products.length} Productos
      </span>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 w-full">
        {loading && <Loader />}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            addToCart={() => addToCart(product)}
            removeFromCart={() => product.id && removeFromCart(product.id)}
          />
        ))}
      </div>
    </>
  );
}
