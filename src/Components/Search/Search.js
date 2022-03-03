import React, { useState } from "react";
import './Search.scss';
import { Link } from "react-router-dom";

const Search = () => {

const [ postalCode, setPostalCode ] = useState([]);


    return (
        <section className='search-section'>
            <form className='search-bar'>
                <label>
                    <span>Find a Safe Restroom Near You</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter zip code"
                    name="search"
                    onChange={(event) => setPostalCode(event.target.value)}
                />
                <Link to={'results/' + postalCode}>
                    <button type="submit" className='non-binary-search-button'>
                        Search Now
                    </button>
                </Link>
            </form>
        </section>
    )
}

export default Search;