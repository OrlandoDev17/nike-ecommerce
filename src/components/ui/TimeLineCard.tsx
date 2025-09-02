import { IconProps } from "@/types";
import { ComponentType } from "react";

export interface TimeLineCardProps {
  id: number;
  Icon: ComponentType<IconProps>;
  year: number;
  title: string;
  text: string;
  iconStyles?: string;
  className?: string;
}

export default function TimeLineCard({
  Icon,
  year,
  title,
  text,
  iconStyles,
}: TimeLineCardProps) {
  return (
    <article className="flex flex-col gap-4 border-1 border-gray-200 bg-white shadow-lg rounded-2xl p-12 max-w-lg hover:shadow-primary/30 transition-all">
      <header className="flex items-center gap-4">
        <Icon className={`size-14 p-3 rounded-2xl text-white ${iconStyles}`} />
        <h3 className="text-3xl font-black text-primary opacity-70">{year}</h3>
      </header>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </article>
  );
}
