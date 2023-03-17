import React, { useEffect, useReducer, useState } from "react";
import { fetchAPI , submitAPI } from "./koko";
import { createContext, useContext} from "react";


const submitContext = createContext(Object);

const SubmitProvider = ({ children }) => {
  
  const [ submited , setSubmitted ] = useState ({ submitted :  false , });   

  return (
    <submitContext.Provider
      value={{
     ...submited ,
        toogleSubmit : ()=> {
                            if (submited.submitted === true )  { 
                                setSubmitted( {...submited , submitted : false}  )  }
                             else {
                                setSubmitted ({...submited , submitted : true})
                                }
                                
                           }
      }}
    >
      {children}
    </submitContext.Provider>
  );
};

const useSubmit = () => useContext(submitContext);

/******************************************** */

function ConfirmedBooking (){

    const {toogleSubmit} = useSubmit();


    return (
        <div style={{display : "flex" , justifyContent : "center" , flexFlow : "column"}} >
            <h1>Booked succefully</h1>
            <button onClick={toogleSubmit} > return </button>
           
        </div>
    )
}

const BookingForm = ({availableTimes , dispatch })=>{

    const [date , setDate ] = useState ("");
    const [time , setTime ] = useState ("");
    const [nbrGust , setNbrGuest] = useState ("");
    const [occasion , setOccasion] = useState ("");    
     
    // const [ submited , setSubmitted ] = useState (false );

    const {toogleSubmit , submitted } = useSubmit();

    const handleSubmit = (e )=>{
        
        e.preventDefault() ;
        console.log(date ,  time , nbrGust , occasion );
        dispatch(time);
        toogleSubmit ;
    }

    const submitForm = (date , time , nbrGust , occasion  )=>{

        if (date !== "" && time !== "" && nbrGust !== "" && occasion !== "" ) {
            return  submitAPI(date  , time , nbrGust , occasion)
        }
       
        else 
       return false
    }
   
    return (
        <div style={{display : "flex" , justifyContent : "center"}}>
            
            <SubmitProvider>
           { ! (submitForm (date , time , nbrGust , occasion ) && submitted) && <form style={{display: "grid" , maxWidth: "200px" , gap: "20px" }} onSubmit = {handleSubmit} >

                <label htmlFor = "res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange = {(e)=> setDate(e.target.value)} name = "reservation date" />

                <label htmlFor="res-time">Choose time</label>
                <select data-testid="res-time" value={time} onChange = {(e)=>{setTime(e.target.value) }} name = "reservation time"  >
                { availableTimes.map(item => {return <option key={item} value = {item} > {item} </option>}) }              
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={nbrGust} onChange = {(e)=> setNbrGuest(e.target.value)} name = "nubmer of guests" />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange = {(e)=> setOccasion(e.target.value)} name = "occasion type" >
                    <option value = {"Birthday"} >Birthday</option>
                    <option value = {"Anniversary"} >Anniversary</option>
                </select>
               <br>

               </br>
                
                <button id ="addOne" type="submit" name="submite button" >Make Your reservation</button>
             
            </form>}
            { submitForm (date , time , nbrGust , occasion ) && submitted && <ConfirmedBooking/> }
            </SubmitProvider>
   
        </div>
    );
}

const updateTimes = (state , action)=>{
    if ( action.type !== null ) return {availableTimes :  state.availableTimes.filter(item => { return item !== action.type }  )  }
    return state 
    }

function Reservations (){

     var initializeTimes = {}

     var date = new Date() ;

    initializeTimes.availableTimes = fetchAPI (date) ;

    const [state , dispatch] = useReducer (updateTimes , initializeTimes )

   
   const change = (val) =>{
    dispatch ( { type : val } )
   }

    return (
        <>
       
        <BookingForm availableTimes = {state.availableTimes} dispatch = {change} />
            
        </>
    );
}

export default Reservations ;