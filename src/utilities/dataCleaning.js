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
            directions: data.directions,
            downvote: data.downvote,
            upvote: data.upvote,
            approved: data.approved,
            // country: data.country,
            // distance: data.distance.toFixed(2),
            // comment: data.comment,
            // latitude: data.latitude,
            // longitude: data.longitude,

        }
    })
    return cleanedAPI
}

    const capitalize = (phrase) => {
        // return element.charAt(0).toUpperCase() + element.slice(1);
        return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  


export const cleanZipCodeAPI = (data) => {
    const location = {
        latitude: data.places[0].latitude,
        longitude: data.places[0].longitude
    }
    return location;
}