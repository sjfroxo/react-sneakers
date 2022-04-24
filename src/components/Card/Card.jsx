import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {SET_CART_LIST, GET_CARD_BY_ID_REQUESTED, SET_FAVORITE_LIST} from "../../actions/card";
import { PATH } from "../../constants/values";
import { getNewCart, getNewFavorite } from '../../utilites/cartHandler';

const Card = ({ card }) => {
    const [isFavorite, setFavorite] = useState(false);
    const [isAddedToCart, setAddedToCart] = useState(false);
    const cart = useSelector((state => state.cardReducer.cart));
    const favorite = useSelector((state => state.cardReducer.favorite))
    const dispatch = useDispatch();

    const handleCart = () => {
        const newCart = getNewCart(card, cart);
        dispatch({
            type: SET_CART_LIST,
            payload: newCart,
        });
        setAddedToCart(!isAddedToCart);
    }

    const handleSetFavorite = () => {
        const newCart = getNewFavorite(card, favorite);
        dispatch({
            type: SET_FAVORITE_LIST,
            payload: newCart,
        });
        setFavorite(!isFavorite);
    }

    // const setButtonActive = (newCart) => {
    //     if(newCart.map(item => item._id).includes(card._id)){
    //
    //     }
    //     else {
    //         setAddedToCart(!isAddedToCart);
    //     }
    // }

    const handleGetCard = () => {
        dispatch({
            type: GET_CARD_BY_ID_REQUESTED,
            payload: card._id,
        });
    }

    return (
        <div className="card">
            <Link className="d-flex justify-center" to={PATH.DETAILS} onClick={handleGetCard}>
                <img width={133} height={112} src={`http://localhost:5000/${card.picture}`} alt={card.title}/>
            </Link>
            <h5>{card.title} {card.brand} {card.model}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{`${card.price} руб.`}</b>
                </div>
                <div className="d-flex align-center">
                    <button className="button" onClick={handleSetFavorite}>
                        {isFavorite ?
                            <img src="/img/liked.svg" alt="Liked"/>
                            : <img src="/img/unliked.svg" alt="Unliked"/>
                        }
                    </button>
                    <button className="button" onClick={handleCart}>
                        {isAddedToCart ?
                            <img src="/img/btn-checked.svg" alt="Checked"/>
                            : <img src="/img/btn-plus.svg" alt="Plus"/>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;


