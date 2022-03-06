import React from "react";
import ResultCard from '../ResultsCard/ResultCard';
import './Results.scss';
import PropTypes from 'prop-types';


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

Results.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        accessible: PropTypes.bool.isRequired,
        unisex: PropTypes.bool.isRequired,
        changing_table: PropTypes.bool.isRequired,
        upvote: PropTypes.number.isRequired,
        downvote: PropTypes.number.isRequired,
        approved: PropTypes.bool.isRequired,
        directions: PropTypes.string.isRequired,
    }))
}

