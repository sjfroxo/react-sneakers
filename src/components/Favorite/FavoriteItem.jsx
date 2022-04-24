import React from 'react';
import './Favorite.scss';
import {Link} from "react-router-dom";
import {PATH} from "../../constants/values";
import Card from "../Card/Card";

const FavoriteItem = ({ Card, card, onFavoriteDelete }) => {

    const handleFavoriteDelete = () => {
        onFavoriteDelete(card);
    }

    return (
        //
        <div>
            <div className="cartItem d-flex align-center mb-20">
                <div className="cartItemImg mr-30">
                    <img width={82} height={70} src={`http://localhost:5000/${card.picture}`} alt={card.title}/>
                </div>
                <div className="mr-20 flex">
                    <p className="mb-5">{card.title} {card.brand} {card.model}</p>
                    <b>{`${card.price} руб.`}</b>
                </div>
                <button className="button" onClick={handleFavoriteDelete}>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </button>
            </div>
        </div>

        // <div className="items mr-10">
        //     <div className="cartItem d-flex align-center mb-20">
        //         <div className="cartItemImg mr-30">
        //             <img width={82} height={70} src={`http://localhost:5000/${card.picture}`} alt={card.title}/>
        //         </div>
        //         <div className="mr-20 flex">
        //             <p className="mb-5">{card.title} {card.brand} {card.model}</p>
        //             <b>{`${card.price} руб.`}</b>
        //         </div>
        //         <button className="button" onClick={handleFavoriteDelete}>
        //             <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
        //         </button>
        //     </div>
        // </div>
    );
};

export default FavoriteItem;