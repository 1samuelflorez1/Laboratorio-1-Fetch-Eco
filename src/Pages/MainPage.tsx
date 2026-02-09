import { useEffect, useState } from "react";
import { getStuff } from "../Services/APIRickMorty";
import type { TypesCharacters } from "../types/TypesCharacters";
import Card from "../Components/CardCharacters";

function MainPage() {
  const [Characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStuff();
      setCharacters(data);
    };
    fetchData();
  });

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
            className="bg-green-800 p-2 pl-4 pr-4 rounded-4xl mt-5 
            focus:outline-green-600 focus:outline-2 transition-all hover:scale-103 
            focus:scale-105 cursor-pointer"
          ></input>
          <button
            className="bg-green-800 p-2 pl-4 pr-4 rounded-4xl mt-5 transition-all 
        hover:scale-105 cursor-pointer ml-3"
          >
            X
          </button>
        </div>
      </div>
      <div className="flex">
      <div className="grid grid-cols-1 gap-10 max-w-2xl mx-auto mt-10 ">
        {Characters.map((CharacterIndividual: TypesCharacters) => {
          return (
            <Card
              key={CharacterIndividual.id}
              CharacterIndividual={CharacterIndividual}
            ></Card>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default MainPage;
