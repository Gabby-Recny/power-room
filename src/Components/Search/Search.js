import React, { useState } from "react";
import './Search.scss';
import { Link } from "react-router-dom";
import ResultsContainer from "../Results/ResultsContainer/ResultsContainer";
import { getZipCode } from "../../utilities/apiCalls";


const Search = () => {
    const [ postalCode, setPostalCode ] = useState()
    const [ error, setError ] = useState('')
    const [ location, setLocation ] = useState({})


    const handleClick = (event) => {
        event.preventDefault();
        if (postalCode.length !== 5) {
            setPostalCode(0)
            setError('Please insert a valid postal code.')
        }  else {
            setError('')
            fetchLocation();

        }
    }


    const fetchLocation = () => {
        getZipCode(postalCode)
            .then(data => setLocation(data))
            .then(window.location.replace(`http://localhost:3000/results/${postalCode}`))
            .catch(error => setError(`Couldn't find your location! Please enter a valid postal code.`))
    }

    return (
        <>
           <section className='search-section'>
                <form className='search-bar'>
                      <label>
                         <span>Find a Safe Restroom Near You</span>
                     </label>
                     <input
                         type="text"
                         placeholder="Enter zip code"
                         name="postalCode"
                         onChange={(event) => setPostalCode(event.target.value)}
                         />
                   <button 
                       className='non-binary-search-button'
                       type={"submit"}
                       onClick={(event) => handleClick(event)}>
                       Search
                   </button>
                  </form>
           </section>
           {error && <h5>{error}</h5>}
       </>

    )
}






export default Search;