import React, { useState } from "react";
import './Search.scss';
import { getBathrooms, getZipCode } from "../../utilities/apiCalls";

const Search = () => {

const [ postalCode, setPostalCode ] = useState([]);

const handleClick = (event) => {
    event.preventDefault()
    getZipCode(postalCode)
    .then(location => getBathrooms(location.latitude, location.longitude))

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
        </section>
    )
}

export default Search;