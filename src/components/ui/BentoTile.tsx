import { DiscoverItem } from "@/types";

export default function BentoTile({
  className,
  children,
  title,
  description,
  titleStyles,
  paragraphStyles,
  Icon,
}: DiscoverItem) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl shadow-2xl ${className}`}>
      {Icon && <Icon />}
      <h2 className={`font-extrabold text-3xl ${titleStyles}`}>{title}</h2>
      <p className={`${paragraphStyles}`}>{description}</p>
      {children}
    </div>
  );
}
