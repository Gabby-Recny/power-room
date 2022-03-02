import cleanBathroomAPI from "./dataCleaning"

const getBathrooms = (lat, long) => {
    //If this fetch call doesn't work with ZIP code API, look at the minus symbol "-" before longitude;
    return fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=100&offset=0&lat=${lat}=-${long}
    `)
    .then(response => checkResponse(response))
    .then(data => cleanBathroomAPI(data))

}

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error (`ERROR ERROR`)
    } else {
        return response.json()
    }
}

export default getBathrooms