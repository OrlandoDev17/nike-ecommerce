export interface SelectionItem {
  id: string;
  title: string;
  options: {
    id: string;
    title: string;
  }[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function SelectionItem({
  id,
  title,
  options,
  selected,
  onSelect,
}: SelectionItem) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-2xl font-titillium-web font-semibold transition-all duration-200">
        {title}
      </span>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <article
            key={option.id}
            className="flex gap-2 items-center cursor-pointer group"
            onClick={() => onSelect(option.id)}
          >
            <div
              className={`relative size-5 rounded-full ${
                selected === option.id
                  ? "bg-primary"
                  : "border-3 border-gray-400 group-hover:border-primary transition"
              }`}
            >
              {selected === option.id && (
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white"></span>
              )}
            </div>
            <span
              className="group-hover:text-primary transition"
              key={option.id}
            >
              {option.title}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
