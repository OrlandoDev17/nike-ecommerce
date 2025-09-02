import CollectionCard from "../ui/CollectionCard";
import { COLLECTIONS } from "@/lib/constants";

export default function CollectionsWrapper() {
  const featuredCollections = COLLECTIONS.filter(
    (collection) => collection.featured === true
  );

  const nonFeaturedCollections = COLLECTIONS.filter(
    (collection) => collection.featured === false
  );

  return (
    <div className="flex flex-col gap-16 items-center mt-16">
      <div className="grid grid-cols-3 gap-6">
        {featuredCollections.map((collection) => (
          <CollectionCard key={collection.id} {...collection} />
        ))}
      </div>
      <div className="flex items-center gap-6">
        {nonFeaturedCollections.map((collection) => (
          <CollectionCard key={collection.id} {...collection} />
        ))}
      </div>
    </div>
  );
}
