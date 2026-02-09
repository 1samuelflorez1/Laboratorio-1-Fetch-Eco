import type { TypesCharacters } from "../types/TypesCharacters"

function Card ({CharacterIndividual}: {CharacterIndividual: TypesCharacters}) {

    return (
        <div className="bg-green-800 w-80 h-100 rounded-2xl flex justify-center">
            <img 
            className="w-70 h-70 rounded-2xl mt-5" 
            src={CharacterIndividual.image}></img>
        </div>
    )
}

export default Card