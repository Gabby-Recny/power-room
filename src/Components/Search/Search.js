import React, { useState } from "react";
import './Search.scss';
import { Link } from "react-router-dom";
import ResultsContainer from "../Results/ResultsContainer/ResultsContainer";
import { getBathrooms, getZipCode } from "../../utilities/apiCalls";
import Loader from "../Loader/Loader";
import ResultCard from "../Results/ResultsCard/ResultCard";


const Search = () => {
    const [ postalCode, setPostalCode ] = useState()
    const [ error, setError ] = useState('')
    const [ location, setLocation ] = useState({})
    const [ results, setResults ] = useState([]);
    const [ isLoading, setLoader ]  = useState(false);




    const handleClick = (event) => {
        event.preventDefault();
        if (postalCode.length !== 5) {
            setPostalCode(0)
            setError('Please enter a valid postal code.')
        }  else {
            setError('')
            setPostalCode(postalCode)
            setLoader(true)
            fetchLocation();

        }
    }


    const fetchLocation = () => {
        getZipCode(postalCode)
            .then(data => getBathrooms(data.latitude, data.longitude))
            .then(bathrooms => {
                setResults(bathrooms)
                setLoader(false)
                checkResults()
            })
            // .then(window.location.replace(`http://localhost:3000/${postalCode}`))
            .catch(error => setError(`Couldn't find your location! Please enter a valid postal code.`))
    }
    const checkResults = () => {
        if (!results.length && !isLoading) {
            return (
                <h2>Looks like we don't have what you're looking for, try a different search query. </h2>
            )
        } else {
            const bathroomResults = results.map(result => {
                return (
                    // <Link to={'/:result.id'} key={result.id}>
                    <ResultCard 
                        key={result.id}
                        id={result.id}
                        name={result.name}
                        street= {result.street}
                        city={result.city}
                        state={result.state}
                        accessible={result.accessible}
                        unisex={result.unisex}
                        directions={result.directions}
                        comment={result.comment}
                        latitude={result.latitude}
                        longitude={result.longitude}
                        downvote={result.downvote}
                        upvote={result.upvote}
                        country={result.country}
                        changing_table={result.changing_table}
                        approved={result.approved}
                        distance={result.distance}
                
                    />
                // </Link>
                )
            })
            return bathroomResults
        }
    }

    return (
        <>
           <section className='results-container'>
                {isLoading && <Loader />}
                {error && <h2>Looks like there's been an issue. Please try again</h2>}
                {/* {checkResults()} */}
                </section>
           {error && <h5 data-testid='error-message'>{error}</h5>}
       </>

    )
}






export default Search;