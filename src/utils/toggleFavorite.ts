import { Result } from "../interfaces"

export const toggleFavorites = (id: number) => {
    let favorites: any[] = JSON.parse(localStorage.getItem("favorites") || '[]')

 

    if(favorites.includes(id)){
        favorites = favorites.filter(favoriteID => favoriteID !== id)
    } else {
        favorites.push(id)
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))    
}