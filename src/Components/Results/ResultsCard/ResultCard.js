import React from "react";
import './ResultCard.scss'

const ResultCard = (props) => {


    return (
        <article className='result-card slide-top'>
            <h2>{props.name}</h2>
            <h5>{props.street}</h5>
            <h5>{props.city}</h5>
            <h5>{props.state}</h5>
                {/* accessible= {this.props.accessible}
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
                distance= {this.props.distance} */}
        </article>
    )
}

export default ResultCard;