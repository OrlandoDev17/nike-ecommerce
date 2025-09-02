import HistoryTile, { HistoryTileProps } from "../ui/HistoryTile";

export default function CollectionHistory() {
  const COLLECTION_TILES: HistoryTileProps[] = [
    {
      id: 1,
      position: "col-start-1 row-start-1",
      number: 1987,
      prefix: "",
      subtitle: "Nace Air Max",
      paragraph:
        "La primera suela con cámara ed aire visible revoluciona el calzado deportivo",
    },
    {
      id: 2,
      position: "col-start-2 row-start-2",
      number: 1000,
      prefix: "+",
      subtitle: "Atletas Patrocinados",
      paragraph: "Los mejores deportistas del mundo confían en Nike",
    },
    {
      id: 3,
      position: "col-start-1 row-start-3",
      number: 180,
      prefix: "+",
      subtitle: "Paises",
      paragraph: "Precencia global en todos los continentes",
    },
    {
      id: 4,
      position: "col-start-2 row-start-4",
      number: "∞",
      prefix: "",
      subtitle: "Innovación",
      paragraph: "Investigación constante para el futuro del deporte",
    },
  ];

  return (
    <section className="flex justify-between items-center gap-24 w-full my-12">
      <div className="flex flex-col gap-6 max-w-10/12">
        <h2 className="text-5xl font-black text-start tracking-wide">
          Desde 1987
          <br />
          <span className="text-primary">Redefiniendo el Confort</span>
        </h2>
        <p className="text-lg text-gray-600 text-balance">
          Nike ha sido pionero en la innovacion deportiva, creando tecnologías
          que no solo mejoran el rendimiento atlético, sino que tambien definen
          la cultura urbana y el estilo de vida moderno.
        </p>
        <p className="text-lg text-gray-600 text-balance">
          Nuestras colecciones representan más que productos deportivos: Son
          símbolos de determinación, superación y la filosofía que nos impulsa
          día a día.
        </p>
        <article className="flex flex-col gap-3 bg-secondary px-12 py-8 rounded-xl text-white">
          <h4 className="text-3xl font-black">&quot;Just Do It&quot;</h4>
          <p className="text-lg">
            Más que un eslogan, es una invitación a superar límites y alcanzar
            la grandeza en cada paso.
          </p>
        </article>
      </div>
      <div className="grid grid-cols-2 grid-rows-5 gap-x-6 gap-y-4">
        {COLLECTION_TILES.map((tile) => (
          <HistoryTile key={tile.id} {...tile} />
        ))}
      </div>
    </section>
  );
}
