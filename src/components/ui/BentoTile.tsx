import { ReactNode } from "react";

interface BentoTileProps {
  className?: string;
  children?: ReactNode;
  title?: string;
  description?: string;
}

export default function BentoTile({
  className,
  children,
  title,
  description,
}: BentoTileProps) {
  return (
    <div className={`rounded-md p-10 ${className}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
}
