import React from 'react';
import './Favorite.scss';

const FavoriteItem = ({ card, onCardDelete }) => {

    const handleFavoriteDelete = () => {
        onCardDelete(card);
    }

    return (
        <div className="favoriteItem">
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
    );
};

export default FavoriteItem;