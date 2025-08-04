export default function DiscountBadge({
  offer,
  discount,
}: {
  offer: boolean;
  discount: number;
}) {
  return (
    <span className="flex items-center gap-2 bg-red-500 text-white px-2 py-1 rounded-full absolute top-3 left-2">
      {offer ? `-${discount}%` : ""} OFF
    </span>
  );
}
