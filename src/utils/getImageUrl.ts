export const imageUrl = (path: string) => {
    let url = ''

    url
    url = path ?  `http://image.tmdb.org/t/p/w500/${path}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
    return url
}