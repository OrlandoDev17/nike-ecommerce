"use client";

import { useState } from "react";

export default function FilterModal() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedCollection, setSelectedCollection] = useState("Todos");

  const CATEGORIES = ["Todos", "Sneakers", "Ropa", "Accesorios"];
  const COLLECTIONS = [
    "Todos",
    "Air Max",
    "Air Jordan",
    "Air Force",
    "Dunk",
    "React",
    "Blazer",
    "Cortez",
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCollectionChange = (collection: string) => {
    setSelectedCollection(collection);
  };

  return (
    <div className="grid grid-cols-2 border-1 border-gray-400 px-12 py-6 rounded-lg flex-grow basis-0 w-full">
      <form>
        <label>Categoría</label>
        <div>
          {CATEGORIES.map((category, index) => (
            <label
              key={index}
              onClick={() => handleCategoryChange(category)}
              className="flex items-center gap-2 cursor-pointer"
            >
              {selectedCategory === category ? (
                <div className="w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all border-orange-500 bg-orange-500">
                  <span className="w-2 h-2 bg-white rounded-full" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all border-gray-300 group-hover:border-orange-300"></div>
              )}
              {category}
            </label>
          ))}
        </div>
      </form>
      <form>
        <label>Colecciones</label>
        <div>
          {COLLECTIONS.map((collection, index) => (
            <label
              key={index}
              onClick={() => handleCollectionChange(collection)}
              className="flex items-center gap-2 cursor-pointer"
            >
              {selectedCollection === collection ? (
                <div className="w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all border-orange-500 bg-orange-500">
                  <span className="w-2 h-2 bg-white rounded-full" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all border-gray-300 group-hover:border-orange-300"></div>
              )}
              {collection}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
}
