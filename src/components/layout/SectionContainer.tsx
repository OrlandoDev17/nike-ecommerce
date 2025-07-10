import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export default function SectionContainer({
  children,
  title,
  className,
}: SectionContainerProps) {
  return (
    <section
      className={`flex flex-col gap-12 items-center max-w-9/12 mx-auto ${className}`}
    >
      <h2 className="text-4xl font-bold font-titillium-web tracking-wide">
        {title}
      </h2>
      {children}
    </section>
  );
}
