import { Products } from "@/lib/mocks";
import SectionContainer from "../layout/SectionContainer";
import OfferCard from "../ui/OfferCard";

export default function Offers() {
  const offerProducts = Products.filter((product) => product.offer);

  return (
    <SectionContainer
      title="Ofertas"
      span="Especiales"
      type="catalogue"
      screenSize=""
      color="text-yellow-400"
      className="mt-8 py-12 text-white bg-gradient-to-br from-primary to-red-500"
      description="¡Aprovecha estos descuentos increíbles por tiempo limitado!"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-9/12 mx-auto mt-12">
        {offerProducts.map((product) => (
          <OfferCard key={product.id} {...product} />
        ))}
      </div>
    </SectionContainer>
  );
}
