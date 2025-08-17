import { SELECTIONS } from "@/lib/constants";
import SelectionItem from "./SelectionItem";

export default function SelectionFilter() {
  return (
    <div className="grid grid-cols-3 gap-4 border-1 border-gray-400 py-8 px-12 rounded-lg shadow-lg w-full">
      {SELECTIONS.map((selection) => (
        <SelectionItem
          key={selection.id}
          {...selection}
          isSelected={false}
          handleSelectOption={() => {}}
        />
      ))}
    </div>
  );
}
