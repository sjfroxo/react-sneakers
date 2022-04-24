import { SET_CART_LIST, GET_CARD, GET_CARD_BY_ID, SET_FAVORITE_LIST } from "../actions/card";

const initialState = {
    cards: [],
    card: {},
    cart: [],
    favorite: [],
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

        case SET_CART_LIST:
            return ({
                ...state,
                cart: action.payload,
            });

        case SET_FAVORITE_LIST:
            return ({
                ...state,
                favorite: action.payload,
            });

        default:
            return state;
    }
}

export default cardReducer;