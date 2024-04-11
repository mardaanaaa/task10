export const addAd = (ad) => {
    return {
        type: 'ADD_AD',
        payload: ad
    };
};

export const deleteAd = (id) => {
    return {
        type: 'DELETE_AD',
        payload: id
    };
};

export const editAd = (id, updatedAd) => {
    return {
        type: 'EDIT_AD',
        payload: {
            id,
            updatedAd
        }
    };
};

