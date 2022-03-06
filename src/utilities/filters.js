import React from "react";

//ADA State
//GN State

// export const filterByAccessibility = () => {
//     if (ada.checked) {
//     const filteredBathrooms = results.filter(bathroom => {
//             return bathroom.accessible
//         })
//     results = filteredBathrooms;
//     }
// }

export const filterByGender = () => {
    if (unisex.checked) {
        const filteredBathrooms = results.filter(bathroom => {
            return bathroom.unisex
        })
        results = filteredBathrooms
    }
}