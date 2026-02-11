import type { TypesCharacters } from "../types/TypesCharacters"

function Card ({CharacterIndividual}: {CharacterIndividual: TypesCharacters}) {
    
    return (
        <div className="bg-green-800/20 w-90 h-105 rounded-2xl flex justify-center flex-col items-center
        hover:scale-105 transition-all cursor-pointer">
            <img 
            className={`w-70 h-70 rounded-2xl mt-5 opacity-85`} 
            src={CharacterIndividual.image}></img>
            <p 
            className="text-2xl mt-2 font-black">{CharacterIndividual.name}</p>
            <p className="font-bold">{CharacterIndividual.species}</p>
            <p className={`font-medium ${CharacterIndividual.status == "Alive" ? "text-green-800" : "text-red-800"}`}>{CharacterIndividual.status}</p>
        </div>
    )
}

export default Card