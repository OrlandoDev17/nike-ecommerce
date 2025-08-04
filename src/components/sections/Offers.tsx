import { PRODUCTS } from "@/lib/mocks";
import OfferCard from "@/components/ui/OfferCard";

export default function Offers() {
  const offerProducts = PRODUCTS.filter((product) => product.offer);

  return (
    <section
      className="flex flex-col gap-4 items-center mt-8 py-12 text-white bg-gradient-to-r from-primary via-red-500 
    to-red-700"
    >
      <h2 className="text-4xl font-black tracking-wide">
        Ofertas<span className="text-yellow-400"> Especiales</span>
      </h2>
      <p className="text-lg text-center text-gray-200">
        ¡Aprovecha estos descuentos increíbles por tiempo limitado!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-11/12 2xl:max-w-9/12 mx-auto mt-12">
        {offerProducts.map((product) => (
          <OfferCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
