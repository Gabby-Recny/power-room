import React from "react";
import './ResultCard.scss';
import babyBoy from '../../../Assets/baby-boy.png';
import ADAIcon from '../../../Assets/wheelchair.png';
// import intersexual from '../../../Assets/intersexual.png';
import lgbt from '../../../Assets/lgbt.png';

const ResultCard = (props) => {
    return (
        <article className='result-card slide-top'>
            <h2>{props.name}</h2>
            <h5>{props.street}</h5>
            <h5>{props.city}</h5>
            <h5>{props.state}</h5>
            <div className='restroom-icons'>
                {props.accessible && <img src={ADAIcon} alt='Verified accessible restroom' />}
                {props.unisex && <img src={lgbt} alt='Verified gender neutral and/or unisex restroom' />}
                {props.changing_table && <img src={babyBoy} alt='Verified changing table in the restroom' />}
            </div>
        </article>

    
                /* accessible= {this.props.accessible}
                unisex= {this.props.unisex}
                directions= {this.props.directions}
                comment= {this.props.comment}
                latitude= {this.props.latitude}
                longitude= {this.props.longitude}
                downvote= {this.props.downvote}
                upvote= {this.props.upvote}
                country= {this.props.country}
                changing_table= {this.props.changing_table}
                approved= {this.props.approved}
                distance= {this.props.distance} */
    )
}

export default ResultCard;