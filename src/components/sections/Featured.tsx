import ProductCard from "../ui/ProductCard";
import SectionContainer from "../layout/SectionContainer";
import { FEATURED_PRODUCTS } from "@/lib/mocks";

export default function Featured() {
  return (
    <SectionContainer title="Productos Destacados">
      <div className="grid grid-cols-3 gap-x-6 gap-y-12 mb-4">
        {FEATURED_PRODUCTS.map(
          ({ id, name, description, price, category, image }) => (
            <ProductCard
              key={id}
              name={name}
              description={description}
              price={price}
              category={category}
              image={image}
            />
          )
        )}
      </div>
    </SectionContainer>
  );
}
