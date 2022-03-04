import React, { useState } from "react";
import './Search.scss';
import { Link } from "react-router-dom";
import ResultsContainer from "../Results/ResultsContainer/ResultsContainer";
import { getZipCode } from "../../utilities/apiCalls";
import { isDisabled } from "@testing-library/user-event/dist/utils";


const Search = () => {
    const [ postalCode, setPostalCode ] = useState()
    const [ error, setError ] = useState('')
    const [ location, setLocation ] = useState({})
    const [ isDisabled, setDisabled ] = useState(true)


    const handleClick = (event) => {
        event.preventDefault();
        if (postalCode.length !== 5) {
            clearInputs()
            setError('Please insert a valid postal code.')
            setDisabled(true)
        }  else {
            setError('')
            setDisabled(false)
            fetchLocation();

        }
    }

    const clearInputs = () => {
        setPostalCode(0)
    }

    const fetchLocation = () => {
        getZipCode(postalCode)
            .then(data => setLocation(data))
            .then(window.location.replace(`http://localhost:3000/results/${postalCode}`))
            .catch(error => setError(`Couldn't find your location! Please enter a valid postal code.`))
    }

    return (
        <>
        {error && <h5>{error}</h5>}
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
       </>

    )
}






export default Search;