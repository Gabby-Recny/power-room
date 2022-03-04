import React, { useState, useEffect } from "react";
import './ResultsContainer.scss';
import ResultCard from "../ResultsCard/ResultCard";
import { getZipCode, getBathrooms } from "../../../utilities/apiCalls";
import Loader from '../../Loader/Loader';
import { Link } from "react-router-dom";

const ResultsContainer = ({ postalCode }) => {
    
    const [ results, setResults ] = useState([]);
    const [ isLoading, setLoader ]  = useState(true);
    const [ error, setError ] = useState();
    const [ selectedBathroom, setSelectedBathroom ] = useState({});

    useEffect( () => {
        getZipCode (postalCode) 
            .then(location => {
                setError('')
                getBathrooms(location.latitude, location.longitude)
                    .then(bathrooms => {
                        setResults(bathrooms)
                        setLoader(false) 
                    })
                    .catch(error => setError(error))
                })
    })

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
        <section className='results-container'>
            {isLoading && <Loader />}
            {error && <h2>Looks like there's been an issue. Please try again</h2>}
            {checkResults()}
        </section>
    )
}

export default ResultsContainer;