import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET_CARD_BY_ID_REQUESTED } from "../../actions/card";
import { PATH } from "../../constants/values";

const Card = ({card}) => {
    const [isFavorite, setFavorite] = useState(false);
    const [isAddedToCart, setAddedToCart] = useState(false);
    const dispatch = useDispatch();

    const handleSetFavorite = () => {
        setFavorite(!isFavorite);
    }

    const handleSetAddedToCart = () => {
        setAddedToCart(!isAddedToCart);
    }

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
                    <b>{card.price}</b>
                </div>
                <div className="d-flex">
                    <button className="button favorite mr-10" onClick={handleSetFavorite}>
                        {isFavorite ?
                            <img src="/img/liked.svg" alt="Liked"/>
                            : <img src="/img/unliked.svg" alt="Unliked"/>
                        }
                    </button>
                    <button className="button" onClick={handleSetAddedToCart}>
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


