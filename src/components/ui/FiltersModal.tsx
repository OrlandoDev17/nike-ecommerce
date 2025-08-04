"use client";

import { useState } from "react";

export default function FiltersModal() {
  const [isSelected, setIsSelected] = useState({
    category: "all-categories",
    collections: "all-collections",
  });

  const SELECTIONS = [
    {
      id: "category",
      title: "Categoría",
      options: [
        {
          id: "all-categories",
          title: "Todas",
        },
        {
          id: "sneakers",
          title: "Sneakers",
        },
        {
          id: "clothing",
          title: "Ropa",
        },
        {
          id: "accessories",
          title: "Accesorios",
        },
      ],
    },
    {
      id: "collections",
      title: "Colecciones",
      options: [
        {
          id: "all-collections",
          title: "Todas",
        },
        {
          id: "air-max",
          title: "Air Max",
        },
        {
          id: "air-jordan",
          title: "Air Jordan",
        },
        {
          id: "dunk",
          title: "Dunk",
        },
        {
          id: "pegasus",
          title: "Pegasus",
        },
        {
          id: "react",
          title: "React",
        },
      ],
    },
  ];

  const handleSelect = (type: string, value: string) => {
    setIsSelected((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="grid grid-cols-2 w-full border-1 border-gray-400 shadow-lg rounded-lg px-12 py-8">
      {SELECTIONS.map(({ id, title, options }) => (
        <form className="flex flex-col gap-4" key={id}>
          <label className="text-2xl font-titillium-web font-semibold tracking-wide">
            {title}
          </label>
          <div className="flex flex-col gap-4">
            {options.map(({ id: optionId, title }) => (
              <label
                className="flex items-center group cursor-pointer"
                key={optionId}
                onClick={() => handleSelect(id, optionId)}
              >
                {isSelected[id as keyof typeof isSelected] === optionId ? (
                  <div className="size-5 rounded-full mr-3 bg-primary flex items-center justify-center">
                    <div className="size-2 rounded-full bg-white" />
                  </div>
                ) : (
                  <div className="size-5 rounded-full border-2 mr-3 border-gray-500 group-hover:border-primary transition" />
                )}
                <span className="group-hover:text-primary transition">
                  {title}
                </span>
              </label>
            ))}
          </div>
        </form>
      ))}
    </div>
  );
}
