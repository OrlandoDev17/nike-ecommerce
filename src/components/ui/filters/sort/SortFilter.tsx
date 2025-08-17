import { SORTS } from "@/lib/constants";
import SortItem from "./SortItem";
import { useState } from "react";

export default function SortFilter() {
  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  const updateSort = (id: string) => {
    setSelectedSort(id);
  };

  return (
    <ul
      className={`w-fit flex flex-col gap-4 border-1 border-gray-400 py-8 px-12 rounded-lg shadow-lg`}
    >
      {SORTS.map((sort) => (
        <SortItem
          key={sort.id}
          id={sort.id}
          title={sort.title}
          selected={selectedSort as string}
          onSelect={updateSort}
        />
      ))}
    </ul>
  );
}
