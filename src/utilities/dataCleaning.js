export const cleanBathroomAPI = (dataArr) => {
    const cleanedAPI = dataArr.map(data => {
        return {
            id: data.id,
            name: data.name,
            street: data.street,
            city: data.city,
            state: data.state,
            accessible: data.accessible,
            unisex: data.unisex,
            directions: data.directions,
            comment: data.comment,
            latitude: data.latitude,
            longitude: data.longitude,
            downvote: data.downvote,
            upvote: data.upvote,
            country: data.country,
            changing_table: data.changing_table,
            approved: data.approved,
            distance: data.distance.toFixed(2),

        }
    })
    console.log(cleanedAPI)
    return cleanedAPI
}

export const cleanZipCodeAPI = (data) => {
    const location = {
        latitude: data.places[0].latitude,
        longitude: data.places[0].longitude
    }
    console.log(location)
    return location;
}