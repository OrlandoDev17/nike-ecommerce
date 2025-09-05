import { CartItem } from "@/context/CartContext";
import { TrashIcon } from "../Icons";

export default function CartCard({
  id,
  image,
  name,
  price,
  stock,
  collection_slug,
  removeFromCart,
}: CartItem & { removeFromCart: (productId: string) => void }) {
  // Ensure we have a valid id before rendering the remove button
  if (!id) return null;
  return (
    <article className="flex items-start gap-6 bg-white rounded-xl p-4 text-secondary w-full">
      <picture className="bg-gray-200 rounded-xl p-2 size-36 object-contain flex items-center">
        <img className="" src={image} alt={name} />
      </picture>
      <div className="flex flex-col gap-2 h-full flex-grow basis-0">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="text-gray-500">Stock: {stock}</span>
        <span className="text-gray-500 first-letter:uppercase">
          Colección: {collection_slug}
        </span>
        <div className="flex justify-start items-center w-full relative">
          <span className="text-2xl font-semibold font-titillium-web tracking-wide">
            ${price}
          </span>
          <button
            className="cursor-pointer p-2 rounded-xl hover:bg-gray-200 hover:-translate-y-1 transition-all absolute right-6"
            onClick={() => removeFromCart(id)}
          >
            <TrashIcon className="size-6 text-primary" />
          </button>
        </div>
      </div>
    </article>
  );
}
