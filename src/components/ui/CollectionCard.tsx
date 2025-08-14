import type { CollectionCard } from "@/types";
import FeaturedBadge from "./FeaturedBadge";
import Link from "next/link";

export default function CollectionCard({
  id,
  name,
  image,
  description,
  url,
  featured,
}: CollectionCard) {
  return (
    <article>
      <header>
        {featured && <FeaturedBadge />}
        <img src={image} alt={name} />
      </header>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <Link href={url}>Explorar Colección</Link>
      </div>
    </article>
  );
}
