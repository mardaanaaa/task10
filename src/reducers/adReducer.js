const initialState = {
    ads: []
};

const adReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AD':
            return {
                ...state,
                ads: [...state.ads, action.payload]
            };
        case 'DELETE_AD':
            return {
                ...state,
                ads: state.ads.filter(ad => ad.id !== action.payload)
            };
        case 'EDIT_AD':
            return {
                ...state,
                ads: state.ads.map(ad => {
                    if (ad.id === action.payload.id) {
                        return action.payload.updatedAd;
                    } else {
                        return ad;
                    }
                })
            };
        default:
            return state;
    }
};

export default adReducer;

