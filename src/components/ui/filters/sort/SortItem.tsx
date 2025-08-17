export interface SortItem {
  id: string;
  title: string;
  selected: string;
  onSelect: (id: string) => void;
}

export default function SortItem({ id, title, selected, onSelect }: SortItem) {
  return (
    <li
      className="flex items-center gap-2 cursor-pointer group"
      onClick={() => onSelect(id)}
    >
      <div
        className={`relative rounded-full size-5 ${
          selected === id
            ? "bg-primary"
            : " border-3 border-gray-400 group-hover:border-primary transition"
        }`}
      >
        {selected === id && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white"></span>
        )}
      </div>
      <span className="group-hover:text-primary transition">{title}</span>
    </li>
  );
}
