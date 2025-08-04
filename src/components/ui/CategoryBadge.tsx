export default function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="text-xs 2xl:text-sm bg-primary/10 text-primary font-medium w-fit px-4 py-0.5 rounded-full">
      {category}
    </span>
  );
}
