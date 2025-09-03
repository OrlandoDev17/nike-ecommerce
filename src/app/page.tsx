"use client";

import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Discover from "@/components/sections/Discover";
import SpecialCollection from "@/components/sections/SpecialCollection";
import { ProductFilterProvider } from "@/context/ProductFilterContext";

export default function Home() {
  return (
    <ProductFilterProvider>
      <Hero />
      <Featured />
      <Discover />
      <SpecialCollection />
    </ProductFilterProvider>
  );
}
