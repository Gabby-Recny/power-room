import React from "react";
import './Error.scss';
import { Link } from "react-router-dom";

const Error = () => {
    return (
    <> 
        <section className="error-container">
            <span><span>4</span></span>
            <span>0</span>
            <span><span>4</span></span>
        </section>
        <div className="link-container">
            <Link to="/" className='link-style'>HOME</Link>
        </div>
    </>
    )
}

export default Error;