import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { notFound } from "next/navigation";


export const metadata = {
    title: 'Favoritos',
    description: 'Ad officia laboris reprehenderit proident do amet adipisicing ut anim est aliquip Lorem tempor.',
};

export default async function PokemonsPage() {


    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>

            <PokemonGrid pokemons={[]} />
        </div>
    );
}