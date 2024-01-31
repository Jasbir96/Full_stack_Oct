/***
 * count=0
 * inceremnt 
 * decrement
 * */
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";
describe("counter test cases", () => {

    test("snapshot for counter", () => {
        const { asFragment } = render(<Counter></Counter>);
        expect(asFragment()).toMatchSnapshot();
    })

    test("inital state check", () => {
        // rendering it in isolation 
        render(<Counter></Counter>);
        //selection
        const countText = screen.getByText("Count is 0");
        const plusText = screen.getByText("+");
        const minusText = screen.getByText("-");
        // we are verifying
        expect(countText).toBeInTheDocument();
        expect(plusText).toBeInTheDocument();
        expect(minusText).toBeInTheDocument();
    })
    test("inc by 1", () => {
        // rendering it in isolation 
        render(<Counter></Counter>);
        const plusText = screen.getByText("+");
        fireEvent.click(plusText);
        fireEvent.click(plusText);
        const isOnePresent = screen.getByText("Count is 2");
        expect(isOnePresent).toBeInTheDocument();
        //selection
        // const countText = screen.getByText("Count is 0");
        // const plusText = screen.getByText("+");
        // const minusText = screen.getByText("-");
        // // we are verifying
        // expect(countText).toBeInTheDocument();
        // expect(plusText).toBeInTheDocument();
        // expect(minusText).toBeInTheDocument();
    })
    test("dec by 1", () => {
        // rendering it in isolation 
        render(<Counter></Counter>);
        const minusText = screen.getByText("-");
        fireEvent.click(minusText);
        fireEvent.click(minusText);
        const isOnePresent = screen.getByText("Count is -2");
        expect(isOnePresent).toBeInTheDocument();
        //selection
        // const countText = screen.getByText("Count is 0");
        // const plusText = screen.getByText("+");
        // const minusText = screen.getByText("-");
        // // we are verifying
        // expect(countText).toBeInTheDocument();
        // expect(plusText).toBeInTheDocument();
        // expect(minusText).toBeInTheDocument();
    })
})
