import React, { useEffect, useReducer, useState } from "react";
import { fetchAPI , submitAPI } from "./API";
import {myStyle , uiKit} from './style';




const BookingForm = ({availableTimes , dispatch })=>{

    const [date , setDate ] = useState ("");
    const [time , setTime ] = useState ("");
    const [nbrGust , setNbrGuest] = useState ("");
    const [occasion , setOccasion] = useState ("");    
     
     const [ submited , setSubmitted ] = useState (false );

    // const {toogleSubmit , submitted } = useSubmit();

    const handleSubmit = (e )=>{
        
        e.preventDefault() ;
        console.log(date ,  time , nbrGust , occasion );
        dispatch(time);
        setSubmitted(true)
        console.log(submitForm (date , time , nbrGust , occasion , submited ));
    }

    const handleReturn = ()=>{
        setSubmitted(false) ;
        setDate("");
        setTime("");
        setNbrGuest("");
        setOccasion("");
    }

    const submitForm = (date , time , nbrGust , occasion , submited )=>{

        if (date !== "" && time !== "" && nbrGust !== "" && occasion !== "" && submited == true ) {
            return  submitAPI(date  , time , nbrGust , occasion)
        }
       
        else 
       return false
    }
   
    return (
        <div style={{...myStyle(uiKit.sectionCategory , "black") , display : "flex" , justifyContent : "center" , flexFlow : "column" , alignItems : "center" , gap : "2rem"}}>
            
            
           {  ! submitForm (date , time , nbrGust , occasion , submited )  && <form style={{display: "grid" , maxWidth: "200px" , gap: "20px" }} onSubmit = {handleSubmit} >

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
                
                <button disabled = {date == "" || time == "" || nbrGust == "" || occasion == ""} id ="addOne" type="submit" name="submite button" >Make Your reservation</button>
             
            </form>}
            { submitForm (date , time , nbrGust , occasion , submited ) && <div style={{display : "flex" , flexFlow : "column"}} >
                                                                          <h1>Submited succefully</h1>
                                                                          <button onClick={handleReturn} style={{margin : "2rem"}} >return </button>
                                                                          </div> }
            
            <table style={{margin : "2rem"}} >
                <tr>
                    <th>Reservation Date</th>
                    <th>time of Reservation</th>
                    <th>nubmer of guests</th>
                    <th>Occasion</th>
                </tr>
                <tr>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td> {nbrGust} </td>
                    <td> {occasion} </td>
                </tr>
                
           </table>
            
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