import { Action, Dispatch, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware = (state) => {
    return (next) => (action) => {

        next(action);

        if ((action as any).type === 'pokemons/toggleFavorite') {
            const { pokemons } = state.getState();
            localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
        }
    };
};