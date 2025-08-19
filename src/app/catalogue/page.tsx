import ProductsWrapper from "@/components/sections/products/ProductsWrapper";

export default function CataloguePage() {
  return (
    <div className="flex flex-col gap-12 items-center w-full mx-auto mt-32">
      <h2 className="text-5xl font-black tracking-wide">
        Catálogo<span className="text-primary"> Nike</span>
      </h2>
      <ProductsWrapper />
    </div>
  );
}
