import React from "react";
import ResultCard from '../ResultsCard/ResultCard';
import './Results.scss';

const Results = ({ results }) => {
    const bathroomResults = results.map(result => {
        return (
                <ResultCard
                    id={result.id}
                    key={result.id}
                    name={result.name}
                    street= {result.street}
                    city={result.city}
                    state={result.state}
                    accessible={result.accessible}
                    unisex={result.unisex}
                    changing_table={result.changing_table}
                    upvote={result.upvote}
                    downvote={result.downvote}
                    approved={result.approved}
                    directions={result.directions}
                    // comment={result.comment}
                    // latitude={result.latitude}
                    // longitude={result.longitude}
                    // upvote={result.upvote}
                    // distance={result.distance}
                />
            )
        })
    
        return (
                <section 
                    className='results-container'
                    data-testid='results-container'>
                    {bathroomResults}
                </section>
            )
}


export default Results;