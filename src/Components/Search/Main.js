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
            displayError(`Please enter a United States five digit postal code.`)
        } else {
            setError('')
            setResults([])
            setLoader(true)
            await fetchLocation()
        }
    }

    const fetchLocation = () => {
        getZipCode(postalCode)
            .then(data => fetchBathrooms(data))
            .catch(() => {
                displayError(`Couldn't find your location! Please try a different postal code.`)
            })
    }

    const fetchBathrooms = (data) => {
        getBathrooms(data.latitude, data.longitude)
        .then(bathrooms => {
            setResults(bathrooms)
            setLoader(false)
        })
        .catch(() => {
            displayError(`Couldn't find any restrooms in your area! Please try a diferent search query.`)
        })

    }

    const displayError = (errorMessage) => {
        setResults([])
        setLoader(false)
        setError(errorMessage)

    }

    return (
        <>
        <section className='search-section'>
            <form className='search-bar' data-testid='search-bar'>
                <label>
                    <span>Find a Safe Restroom Near You</span>
                </label>
                <input
                    className="shadow-drop-2-center"
                    type="number"
                    data-testid='search-input'
                    placeholder="Enter zip code"
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                <button 
                    className='non-binary-search-button shadow-drop-2-center'
                    type="submit"
                    data-testid='search-button'
                    onClick={(e) => handleSubmission(e)}>
                    Search
                </button>
            </form>
            <div className='error-section'>
                {error && <h4 className='error-message' data-testid='error-message'>{error}</h4>}
            </div>
            {isLoading && <Loader />}
        </section>
        {results.length > 0 && <Results results={results}/>}
        </>
    )
}

export default Main;