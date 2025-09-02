import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  titleStyles?: string;
  subtitleStyles?: string;
  paragraphStyles?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  iconStyles?: string;
}

export default function BentoTile({
  className,
  children,
  title,
  subtitle,
  description,
  titleStyles,
  subtitleStyles,
  paragraphStyles,
  Icon,
  iconStyles,
}: Props) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-2xl shadow-2xl ${className} hover:scale-102 hover:shadow-primary/40 transition-all`}
    >
      {Icon && <Icon className={iconStyles} />}
      <h2 className={`font-extrabold text-3xl ${titleStyles}`}>{title}</h2>
      {subtitle && (
        <h4 className={`text-xl font-semibold ${subtitleStyles}`}>
          {subtitle}
        </h4>
      )}
      <p className={`${paragraphStyles}`}>{description}</p>
      {children}
    </div>
  );
}
