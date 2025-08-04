import { ClockIcon } from "./Icons";

export default function LimitedBadge() {
  return (
    <span className="flex items-center gap-2 bg-secondary text-white px-2 py-1 rounded-full absolute top-3 right-2">
      <ClockIcon className="size-4" />
      Limitado
    </span>
  );
}
