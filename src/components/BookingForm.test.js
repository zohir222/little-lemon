import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './Reservations';

test('test if the initializeTimes function had the initial times', () => {

    const listOfTimes = ["HH:MM","17:00" , "18:00", "19:00"]
    const change = jest.fn();
    render(<BookingForm availableTimes = {listOfTimes} dispatch = {change}  />);

    const dd = screen.getByText("Choose time")
    expect(dd).toBeInTheDocument();
    
    expect(listOfTimes).toHaveLength(4)
    
    const btn = screen.getByRole("button")
    fireEvent.click(btn)
    
    expect(btn).toBeInTheDocument();
    /*i dont know how to test that the updateTimes function is called */
})
