import { GET_CARD, GET_CARD_BY_ID } from "../actions/card";

const initialState = {
    cards: [],
    card: {},
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARD:
            return ({
                ...state,
                cards: action.payload,
            });

        case GET_CARD_BY_ID:
            return ({
                ...state,
                card: action.payload,
            });

        default:
            return state;
    }
}

export default cardReducer;