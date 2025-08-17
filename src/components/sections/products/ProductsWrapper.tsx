import FiltersWrapper from "@/components/ui/filters/FiltersWrapper";

export default function ProductsWrapper() {
  return (
    <section className="flex flex-col gap-4 items-center w-full max-w-10/12 mx-auto">
      <FiltersWrapper />
    </section>
  );
}
