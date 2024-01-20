'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {

    const favoritePokemonsState = useAppSelector(state => state.pokemons.favorites);
    const favoritePokemons = Object.values(favoritePokemonsState);
    const [pokemons, setPokemons] = useState(favoritePokemons);

    // useEffect(() => {
    //     // console.log({ favoritePokemons });
    //     setPokemons(favoritePokemons);
    // }, [favoritePokemons]);

    // console.log(Object.values(favoritePokemons));

    return (
        <>
            {
                pokemons.length
                    ? <PokemonGrid pokemons={favoritePokemons} />
                    : <NoFavorites />

            }
        </>
    );
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    )
}
