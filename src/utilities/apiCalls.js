import { cleanBathroomAPI } from "./dataCleaning";
import { cleanZipCodeAPI } from "./dataCleaning";
import { checkZipCode } from "./checkZipCode";

export const getBathrooms = (lat, long) => {
    return fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=100&offset=0&lat=${lat}&lng=${long}`)
        .then(response => checkResponse(response))
        .then(data => cleanBathroomAPI(data))
        .catch(error => console.log(error))

}

export const getZipCode = (zipcode) => {
    return fetch(`https://api.zippopotam.us/us/${zipcode}`)
            .then(response => checkResponse(response))
            .then(data => cleanZipCodeAPI(data))
            .catch(error => console.log(error))
}

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error (`ERROR`)
    } else {
        return response.json()
    }
}
