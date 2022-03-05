import React from "react";
import './ResultCard.scss';
import PropTypes from 'prop-types';
import babyBoy from '../../../Assets/baby-boy.png';
import ADAIcon from '../../../Assets/wheelchair.png';
import lgbt from '../../../Assets/lgbt.png';

const ResultCard = (props) => {
    return (
            <article className='result-card'>
                <section className='primary-info'>
                    <section className='address-info'>
                        <h2>{props.name}</h2>
                        <h5>{props.street}</h5>
                        <h5>{props.city}, {props.state}</h5>
                    </section>
                    <section className='restroom-icons'>
                        {props.accessible && <img src={ADAIcon} alt='Verified accessible restroom' />}
                        {props.unisex && <img src={lgbt} alt='Verified gender neutral and/or unisex restroom' />}
                        {props.changing_table && <img src={babyBoy} alt='Verified changing table in the restroom' />}
                    </section>
                </section>
                <section className='ratings'>
                    <div>
                        <h5>Upvotes: {props.upvote}</h5>
                        <h5>Downvotes: {props.downvote}</h5>
                    </div>
                    {props.approved && <h5>Approved</h5>}
                </section>
                <section className='directions'>
                    <h5>Directions: {props.directions}</h5>
                </section>
            </article>
    )
}

export default ResultCard;

ResultCard.propTypes = {
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
  };