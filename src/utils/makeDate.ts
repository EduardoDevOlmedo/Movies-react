export const releaseDate = (date: Date): String[] => {
    return new Date(date).toString().substring(3, 16).split(" ")
}
