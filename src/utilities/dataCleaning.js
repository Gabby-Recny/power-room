export const cleanBathroomAPI = (dataArr) => {
    const cleanedAPI = dataArr.map(data => {
        return {
            id: data.id,
            name: capitalize(data.name),
            street: capitalize(data.street),
            city: capitalize(data.city),
            state: capitalize(data.state),
            accessible: data.accessible,
            unisex: data.unisex,
            changing_table: data.changing_table,
            directions: displayUnavailability(data.directions),
            downvote: data.downvote,
            upvote: data.upvote,
            approved: displayUnavailability(data.approved),
        }
    })
    return cleanedAPI
}

    const capitalize = (phrase) => {
        return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    const displayUnavailability = (element) => { 
        if (!element || element === 0) {
            return 'Not Available'
        } else {
            return element
        }
    }
  


export const cleanZipCodeAPI = (data) => {
    const location = {
        latitude: data.places[0].latitude,
        longitude: data.places[0].longitude
    }
    return location;
}