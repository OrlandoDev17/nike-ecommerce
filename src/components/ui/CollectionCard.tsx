import type { CollectionCard } from "@/types";
import Link from "next/link";

export default function CollectionCard({
  name,
  image,
  description,
  url,
}: CollectionCard) {
  return (
    <article>
      <header>
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
