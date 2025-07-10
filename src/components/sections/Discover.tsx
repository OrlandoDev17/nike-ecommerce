import SectionContainer from "../layout/SectionContainer";
import BentoTile from "../ui/BentoTile";
import { DISCOVER_NIKE } from "@/lib/constants";

export default function Discover() {
  return (
    <SectionContainer title="Descubre Nike" className="mt-24">
      <div className="grid grid-cols-6 md:grid-cols-6 grid-rows-4 md:grid-rows-4 gap-4 md:gap-4 m-4">
        {DISCOVER_NIKE.map(
          ({
            id,
            className,
            title,
            description,
            content,
            titleStyles,
            paragraphStyles,
            Icon,
          }) => (
            <BentoTile
              key={id}
              className={className}
              title={title}
              description={description}
              titleStyles={titleStyles}
              paragraphStyles={paragraphStyles}
              Icon={Icon}
            >
              {content}
            </BentoTile>
          )
        )}
      </div>
    </SectionContainer>
  );
}
