import React from "react";
import ResultCard from "../ResultsCard/ResultCard";
import { Link } from "react-router-dom";

const Results = ({ results }) => {
    const bathroomResults = results.map(result => {
        return (
            <Link 
                to={`/${result.id}`} 
                key={result.id}>
                <ResultCard 
                // key={result.id}
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
            </Link>
        )
        })
    
        return (
            <section className='results-container'>
                {bathroomResults}
            </section>
            )
}


export default Results;