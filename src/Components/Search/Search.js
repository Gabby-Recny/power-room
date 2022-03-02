import React from "react";
import './Search.scss'

const Search = () => {

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
                />
                <button type="submit" className='non-binary-search-button'>Search Now</button>
            </form>
        </section>
    )
}

export default Search;