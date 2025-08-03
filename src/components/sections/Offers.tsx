import { Products } from "@/lib/mocks";
import SectionContainer from "../layout/SectionContainer";
import OfferCard from "@/components/ui/OfferCard";

export default function Offers() {
  const offerProducts = Products.filter((product) => product.offer);

  return (
    <SectionContainer
      title="Ofertas"
      span="Especiales"
      type="catalogue"
      screenSize=""
      color="text-yellow-400"
      className="mt-8 py-12 text-white bg-gradient-to-r from-primary via-red-500 to-red-700"
      description="¡Aprovecha estos descuentos increíbles por tiempo limitado!"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-11/12 2xl:max-w-9/12 mx-auto mt-12">
        {offerProducts.map((product) => (
          <OfferCard key={product.id} {...product} />
        ))}
      </div>
    </SectionContainer>
  );
}
