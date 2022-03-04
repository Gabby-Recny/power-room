import { cleanBathroomAPI } from "./dataCleaning";
import { cleanZipCodeAPI } from "./dataCleaning";

export const getBathrooms = (lat, long) => {
    return fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=100&offset=0&lat=${lat}&lng=${long}`)
        .then(response => checkResponse(response))
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
        .then(data => cleanBathroomAPI(data))


}

export const getZipCode = (zipcode) => {
    return fetch(`https://api.zippopotam.us/us/${zipcode}`)
            .then(response => checkResponse(response))
            .then(data => cleanZipCodeAPI(data))
}

const checkResponse = (response) => {
    if (!response.ok) {
        console.log('response not okay')
        throw new Error (`ERROR`)
    } else {
        console.log('response okay')
        return response.json()
    }
}
