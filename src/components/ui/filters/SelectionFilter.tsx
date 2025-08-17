"use client";

type filterState = {
  types: string;
  categories: string;
  collections: string;
};

import { SELECTIONS } from "@/lib/constants";
import SelectionItem from "./SelectionItem";
import { useState } from "react";

export default function SelectionFilter() {
  const [selectedFilter, setSelectedFilter] = useState<filterState>({
    types: "all-types",
    categories: "all-categories",
    collections: "all-collections",
  });

  const updateFilter = (group: keyof filterState, value: string) => {
    setSelectedFilter((prevSelection) => ({
      ...prevSelection,
      [group]: value,
    }));
  };

  return (
    <div className="grid grid-cols-3 gap-4 border-1 border-gray-400 py-8 px-12 rounded-lg shadow-lg w-full">
      {SELECTIONS.map((selection) => (
        <SelectionItem
          key={selection.id}
          {...selection}
          selected={selectedFilter[selection.id as keyof filterState]}
          onSelect={(group, value) =>
            updateFilter(group as keyof filterState, value)
          }
        />
      ))}
    </div>
  );
}
