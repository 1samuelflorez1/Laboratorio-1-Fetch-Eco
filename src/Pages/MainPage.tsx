import { useEffect, useState } from "react";
import { getStuff } from "../Services/APIRickMorty";
import type { TypesCharacters } from "../types/TypesCharacters";
import Card from "../Components/CardCharacters";

function MainPage() {
  const [Characters, setCharacters] = useState<TypesCharacters[]>([]);
  const [Busqueda, setBusqueda] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState<string>("");
  const [Online, setOnline] = useState(navigator.onLine);

  const palabras = Busqueda.toLowerCase().trim().split(" ");

  const resultadosBusqueda = Characters.filter((character) =>
    palabras.every(
      (palabra) =>
        character.name.toLowerCase().includes(palabra) ||
        character.species.toLowerCase().includes(palabra) ||
        character.status.toLowerCase().includes(palabra),
    ),
  );

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStuff();
        setTimeout(() => {
          setCharacters(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setError(`${error}`);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (Loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-infinity loading-xl size-20 bg-green-800"></span>
      </div>
    );
  }

  if (Error) {
    return (
      <div className="flex flex-col justify-center items-center mt-75">
        <p className="font-bold text-white/40">{Error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-white/30 px-4 py-1 rounded-3xl w-30 mt-5 cursor-pointer transition-all hover:bg-red-800"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (!Online) {
    return (
      <div className="flex flex-col justify-center items-center mt-75">
        <p className="font-bold text-white/40">WiFi Error</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-white/30 px-4 py-1 rounded-3xl w-30 mt-5 cursor-pointer transition-all hover:bg-red-800"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <p
          className="mt-20 text-4xl font-bold z-2 hover:scale-110 transition-all
      cursor-none"
        >
          API Rick and Morty
        </p>
        <div>
          <input
            value={Busqueda}
            type="text"
            placeholder="Buscar.."
            onChange={(e) => setBusqueda(e.target.value)}
            className="bg-green-800 p-2 pl-4 pr-4 rounded-4xl mt-5 
            focus:outline-green-600 focus:outline-2 transition-all hover:scale-103 
            focus:scale-105 cursor-pointer"
          ></input>
          <button
            onClick={() => setBusqueda("")}
            className="bg-green-800 p-2 pl-4 pr-4 rounded-4xl mt-5 transition-all 
        hover:scale-105 cursor-pointer ml-3"
          >
            ✘
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="grid grid-cols-1 gap-10 max-w-2xl mx-auto mt-10  bg-black/20 p-10 pl-40 pr-40 rounded-2xl">
          {resultadosBusqueda.length > 0 ? (
            resultadosBusqueda.map((CharacterIndividual: TypesCharacters) => {
              return (
                <Card
                  key={CharacterIndividual.id}
                  CharacterIndividual={CharacterIndividual}
                ></Card>
              );
            })
          ) : (
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-bold text-white/40">Data not</p>
              <p className="text-2xl font-bold text-white/40">Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default MainPage;
