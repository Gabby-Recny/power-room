import React, { useState } from "react";
import './ResultsContainer.scss';
import ResultCard from "../ResultsCard/ResultCard";
import { getZipCode, getBathrooms } from "../../../utilities/apiCalls";
import Loader from '../../Loader/Loader';

const ResultsContainer = ({ postalCode }) => {
    
    const [ results, setResults ] = useState([]);
    const [ isLoading, setLoader ]  = useState(true);
    
    getZipCode (postalCode) 
        .then(location => getBathrooms(location.latitude, location.longitude))
        .then(bathrooms => {
            setResults(bathrooms)
            setLoader(false) 
        })
        .catch(err => console.log(err))




    const bathroomResults = results.map(result => {
        return (
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
        )
    })
    return (
        <section className='results-container'>
            {isLoading && <Loader />}
            {bathroomResults}
        </section>
    )
}

export default ResultsContainer;