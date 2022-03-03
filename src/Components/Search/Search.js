import React, { useState } from "react";
import './Search.scss';
import { getBathrooms, getZipCode } from "../../utilities/apiCalls";
import ResultsContainer from "../Results/ResultsContainer/ResultsContainer";

const Search = () => {

const [ postalCode, setPostalCode ] = useState([]);
const [ results, setResults ] = useState([]);

const handleClick = (event) => {
    event.preventDefault()
    getZipCode(postalCode)
    .then(location => getBathrooms(location.latitude, location.longitude))
    .then(bathrooms => setResults(bathrooms))
    .catch(err => console.log(err))
}
    return (
        <section className='search-section'>
            <form className='search-bar'>
                <label>
                    <span>Find a Safe Restroom Near You</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter location"
                    name="search"
                    onChange={(event) => setPostalCode(event.target.value)}
                />
                <button type="submit" className='non-binary-search-button'
                onClick={event => handleClick(event)}
                >Search Now</button>
            </form>
            <ResultsContainer results={results}/>
        </section>
    )
}

export default Search;