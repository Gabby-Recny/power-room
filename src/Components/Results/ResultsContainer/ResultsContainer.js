import React from "react";
import './ResultsContainer.scss';
import ResultCard from "../ResultsCard/ResultCard";

const ResultsContainer = ({ results }) => {
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
            {bathroomResults}
        </section>
    )
}

export default ResultsContainer;