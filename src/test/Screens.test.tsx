
import { render, screen, waitFor} from "@testing-library/react"

import '@testing-library/jest-dom'
import Home from "../screens/Home"
import Favorites from "../screens/Favorites"
import Login from "../screens/Login"
import MovieDetails from "../screens/MovieDetail"
import Search from "../screens/Search"
import NotFound from "../screens/NotFound"

describe('Home', () => {
    
    render(<Home />)

    test("Home rendering nicely", () => {
        const home = screen.queryByTestId("home")

        expect(home).toBeInTheDocument()
    })
    
}) 

describe("Render of favorites", () => {
    render(<Favorites />)

    test("Favorites rendering", () => {
        const element = screen.queryByTestId("favorites")
        

        waitFor(() => expect(element).toBeInTheDocument()) 
    })

})

describe("Render of Login", () => {
    render(<Login />)

    test("Login rendering", () => {
        const element = screen.queryByTestId("login")
        waitFor(() => expect(element).toBeInTheDocument()) 
    })

})

describe("Render of details", () => {
    render(<MovieDetails />)

    test("Movie details", () => {
        const element = screen.queryByTestId("movie-details-test")

        waitFor(() => expect(element).toBeInTheDocument()) 
    })

})

describe("Render of Search", () => {
    render(<Search />)

    test("Movie Search", () => {
        const element = screen.queryByTestId("search")

        waitFor(() => expect(element).toBeInTheDocument()) 
    })

})

describe("Render of 404", () => {
    render(<NotFound />)

    test("404", () => {
        const element = screen.queryByTestId("error")

        waitFor(() => expect(element).toBeInTheDocument()) 
    })

})