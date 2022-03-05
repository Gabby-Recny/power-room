import React from "react";
import './ResultCard.scss';
import babyBoy from '../../../Assets/baby-boy.png';
import ADAIcon from '../../../Assets/wheelchair.png';
import lgbt from '../../../Assets/lgbt.png';

const ResultCard = (props) => {
    return (
            <article className='result-card'>
                <h2>{props.name}</h2>
                <h5>{props.street}</h5>
                <h5>{props.city}</h5>
                <h5>{props.state}</h5>
                <section className='restroom-icons'>
                    {props.accessible && <img src={ADAIcon} alt='Verified accessible restroom' />}
                    {props.unisex && <img src={lgbt} alt='Verified gender neutral and/or unisex restroom' />}
                    {props.changing_table && <img src={babyBoy} alt='Verified changing table in the restroom' />}
                </section>
                <h5>Upvotes: {props.upvote}</h5>
                <h5>Downvotes: {props.downvote}</h5>
                <h5>{props.approved && <h5>Approved</h5>}</h5>
                <h5>{props.directions}</h5>
            </article>
    )
}

export default ResultCard;