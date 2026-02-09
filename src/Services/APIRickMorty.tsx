const getStuff = async () => {
    const Response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await Response.json()
    return data.results
}
export {getStuff}