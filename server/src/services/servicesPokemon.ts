import axios from 'axios';

interface Pokemon {
    id: number
    url: string
    name: string
    image: string
}

const api = axios.create({baseURL: 'https://pokeapi.co/api/v2'})

export const getPokemons = async (offset, limit) => {
    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`)
       
    const data: {results: Pokemon[]} = await response.data

    const pokemons = data.results.map((pokemon) => {
        const idPokemon = pokemon.url.split('/').splice(-2, 1)[0]

        return {
            id: idPokemon,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`
        }
    })
    
    return pokemons
}


