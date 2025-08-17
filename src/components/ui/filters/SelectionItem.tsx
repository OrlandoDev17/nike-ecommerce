export interface SelectionItem {
  id: string;
  title: string;
  options: {
    id: string;
    title: string;
  }[];
  isSelected: boolean;
  handleSelectOption: () => void;
}

export default function SelectionItem({
  title,
  options,
  isSelected,
  handleSelectOption,
}: SelectionItem) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-2xl font-titillium-web font-semibold">{title}</span>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <article
            key={option.id}
            className="flex gap-2 items-center cursor-pointer"
            onClick={handleSelectOption}
          >
            <div
              className={`relative size-5 rounded-full ${
                isSelected ? "bg-primary" : "border-3 border-gray-400"
              }`}
            >
              {isSelected ? (
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white"></span>
              ) : (
                ""
              )}
            </div>
            <span key={option.id}>{option.title}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
