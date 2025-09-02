import HistoryBento from "@/components/sections/HistoryBento";
import TimeLine from "@/components/sections/TimeLine";

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-12 items-center w-full max-w-10/12 mx-auto mt-48">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-7xl text-secondary text-center font-black">
          La Historia de
          <br /> <span className="text-primary">Nike</span>
        </h2>
        <p className="text-gray-600 max-w-3xl text-center text-xl">
          60 años transformando sueños en realidad, convirtiendo el deporte en
          cultura y la innovación en inspiración global.
        </p>
      </div>
      <HistoryBento />
      <TimeLine />
    </div>
  );
}
