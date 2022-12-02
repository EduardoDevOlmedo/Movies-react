

import { render, screen, waitFor } from "@testing-library/react"

import '@testing-library/jest-dom'
import Home from "../screens/Home"
import Favorites from "../screens/Favorites"
import Search from "../screens/Search"

describe("useMovies Hook working correctly", () => {

    
    test("UseMovies", () => {
        render(<Home />)
        // if populars is shown, then home useMovies hook renders perfectly
        // and every other place the hook is called.
        const home = screen.getByText("Populars")

        expect(home).toBeInTheDocument()
   })


})

describe("useMovieById hook working correctly",() => {
    render(<Favorites />)

    test("useMovieById", () => {
        const element = screen.queryByTestId("favorites")
        

        waitFor(() => expect(element).toBeInTheDocument()) 
    })

})

describe("useMovieSearch hook working correctly",() => {
    render(<Search />)

    test("useMovieSearch", () => {
        const element = screen.queryByTestId("search")

        waitFor(() => expect(element).toBeInTheDocument()) 
    })

})

