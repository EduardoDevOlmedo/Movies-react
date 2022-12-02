
import {fireEvent, render, screen} from "@testing-library/react"
import Navbar from "../components/globals/Navbar"

import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event"

describe('Navbar', () => {
    

    test('buttons rendering successfully', () => {
        render(<Navbar />)
        const button = screen.getByRole('button', {})
        expect(button).toBeInTheDocument();
    })

    test("expect input to load with an empty state", () => {
        render(<Navbar />)
        expect(screen.queryByTestId("query-input")).toBeInTheDocument()
        expect(screen.queryByTestId("query-input")!.innerText).toEqual(undefined)
    })

    test("expect inputChange event", () => {
        const {queryByTestId} = render(<Navbar />)
        const input = (document.querySelector("input[placeholder]") as HTMLInputElement)

        userEvent.click(input);

        fireEvent.change(input, {
            target: {
                value: "Change"
            }
        })

        expect(input!.value).toBe("Change")
    })



}) 