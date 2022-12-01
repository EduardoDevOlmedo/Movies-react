export const favorites = (): number[] => {
    return JSON.parse( localStorage.getItem('favorites') || '[]' );
}