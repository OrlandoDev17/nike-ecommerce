import Offers from "@/components/sections/Offers";

export default function CataloguePage() {
  return (
    <div className="flex flex-col gap-12 items-center w-full mx-auto mt-32">
      <h2 className="text-4xl 2xl:text-5xl font-black tracking-wide">
        Catálogo<span className="text-primary"> Nike</span>
      </h2>
      <Offers />
    </div>
  );
}
