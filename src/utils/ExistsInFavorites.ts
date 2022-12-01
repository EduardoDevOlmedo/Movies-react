import { Result } from "../interfaces";

export const existsInFavorites = (id: number) => {
 
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')


   
    return favorites.includes(id)
}