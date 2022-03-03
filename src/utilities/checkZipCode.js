import React from "react";


// const [ error, setError ] = useState('')

export const checkZipCode = () => {
        return (
            <h2 style={{
                color: 'red'
            }}
                className='invalid-zip-message'>
                 Please submit a valid US based zip code
            </h2>
        )
    }