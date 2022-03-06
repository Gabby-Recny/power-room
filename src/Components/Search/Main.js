import React, { useState } from "react";
import { getZipCode, getBathrooms } from "../../utilities/apiCalls";
import Loader from "../Loader/Loader";
import Results from "../Results/ResultsContainer/Results";
import './Main.scss';

const Main = () => {
    const [ postalCode, setPostalCode ] = useState('');
    const [ error, setError ] = useState('');
    const [ isLoading, setLoader ]  = useState(false);
    const [ results, setResults ] = useState([]);

    const handleSubmission = (e) => {
        e.preventDefault()
        checkPostalCode(postalCode)
    }

    const checkPostalCode = async () => {
        if(postalCode.length !== 5) {
            setPostalCode('')
            setResults([])
            setError('Please enter a United States five digit postal code.')
        } else {
            setError('')
            setLoader(true)
            await fetchLocation()
        }
    }

    const fetchLocation = () => {
        getZipCode(postalCode)
            .then(data => fetchBathrooms(data))
            .catch(() => {
                setResults([])
                setLoader(false)
                setError(`Couldn't find your location! Please try a different postal code.`)
            })
    }

    const fetchBathrooms = (data) => {
        getBathrooms(data.latitude, data.longitude)
        .then(bathrooms => {
            setResults(bathrooms)
            setLoader(false)
        })
        .catch(() => {
            setResults([])
            setError(`Couldn't find any restrooms in your area! Please try a diferent search query.`)
            setLoader(false)
        })

    }

    return (
        <>
        <section className='search-section'>
            <form className='search-bar' data-testid='search-bar'>
                <label>
                    <span>Find a Safe Restroom Near You</span>
                </label>
                <input
                    type="number"
                    data-testid='search-input'
                    placeholder="Enter zip code"
                    // name="postalCode"
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                <button 
                    className='non-binary-search-button'
                    type="submit"
                    data-testid='search-button'
                    onClick={(e) => handleSubmission(e)}>
                    Search
                </button>
            </form>
        </section>
        {error && <h4 data-testid='error-message'>{error}</h4>}
        {isLoading && <Loader />}
        {results.length > 0 && <Results results={results}/>}
        </>
    )
}

export default Main;