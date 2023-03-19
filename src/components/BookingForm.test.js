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

test('test the validation of the input fields ', () => {


    render(<BookingForm  />);


    const dateLabel = screen.getByLabelText(/Choose date/)

    fireEvent.change(dateLabel , { target : { value : "2022-03-01" }})

    
    

    
    const timeLabel = screen.getByLabelText(/Choose time/)

    fireEvent.change(timeLabel , { target : { value : "17:00" }})
    
    
    
    


    const GuestsLabel = screen.getByLabelText(/Number of guests/)

    fireEvent.change(GuestsLabel , { target : { value : "1" }})
    
    
    
    


    const occasionLabel = screen.getByLabelText(/Occasion/)

    fireEvent.change(occasionLabel , { target : { value : "choose one" }})
    
    
    
    
    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    const dateError = screen.getByTestId("dateError");
    const timeError = screen.getByTestId("timeError");
    const guestsError = screen.getByTestId("guestsError");
    const occasionError = screen.getByTestId("occasionError");

    expect(dateError).toBeInTheDocument();
    expect(timeError).toBeInTheDocument();
    expect(guestsError).toBeInTheDocument();
    expect(occasionError).toBeInTheDocument();
})