import React from 'react';
import { PATH } from "../../constants/values";
import { Link } from "react-router-dom";
import FavoriteItem from "./FavoriteItem";
import { useDispatch, useSelector } from "react-redux";
import { getNewFavorite } from "../../utilites/utilites";
import { SET_FAVORITE_LIST } from "../../actions/card";

const Favorite = () => {
    const favorite = useSelector((state => state.cardReducer.favorite));
    const renderCardList = () => favorite.map((card, index) =>
        <FavoriteItem
            onCardDelete={handleDeleteCard}
            card={card}
            key={index}
        />);
    const dispatch = useDispatch();

    const handleDeleteCard = (currentCard) => {
        const newFavorite = getNewFavorite(currentCard, favorite);
        dispatch({
            type: SET_FAVORITE_LIST,
            payload: newFavorite,
        });
    }

    return (
        <div className="favoriteBlock">
            <Link to={PATH.MAIN_PAGE}>Назад</Link>
            <div className="d-flex justify-between">
                <h2 className="d-flex">Избранное</h2>
            </div>
            <div>
                {!favorite.length &&
                    <h2 className="d-flex justify-center align-center">Избранные товары отсутствуют =)</h2>
                }
                {renderCardList()}
            </div>
        </div>
    );
};


export default Favorite;