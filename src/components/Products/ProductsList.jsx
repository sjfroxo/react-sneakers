import React, { useEffect } from 'react';
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { GET_CARD_REQUESTED } from "../../actions/card";

const ProductsList = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state => state.cardReducer.cards));
    const cart = useSelector((state => state.cardReducer.cart));
    const favorite = useSelector((state => state.cardReducer.favorite));

    useEffect(() => {
        dispatch({type: GET_CARD_REQUESTED})
    }, [dispatch, cards]);

    const checkAvailability = (list, card) => list.some(item => item._id === card._id);


    const renderCardList = () => cards.map((card, index) => <Card card={card} key={index} isCart={checkAvailability(cart, card)} isFavorite={checkAvailability(favorite, card)}/>);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Все кроссовки</h1>
                <div className="search-block d-flex align-center">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="14.000000pt" height="14.000000pt" viewBox="0 0 512.000000 512.000000"
                         preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                           fill="#DBDBDB" stroke="none">
                            <path d="M1930 5109 c-494 -51 -951 -269 -1306 -623 -246 -246 -412 -514 -518
-836 -141 -428 -141 -872 0 -1300 106 -323 273 -592 520 -837 488 -485 1153
-705 1839 -608 353 50 707 195 985 404 30 23 57 40 61 39 4 -2 307 -298 673
-658 417 -410 680 -661 704 -672 98 -46 208 12 228 120 16 84 72 24 -1024
1106 l-342 338 58 68 c250 289 415 655 478 1055 24 156 24 442 0 600 -71 459
-272 853 -607 1186 -460 457 -1101 684 -1749 618z m479 -335 c404 -59 759
-235 1040 -515 344 -345 523 -774 523 -1259 0 -179 -16 -302 -58 -457 -212
-788 -931 -1333 -1759 -1333 -493 0 -951 187 -1293 529 -232 232 -387 500
-471 811 -74 277 -74 623 0 900 168 626 665 1119 1292 1281 228 59 507 76 726
43z"/>
                        </g>
                    </svg>
                    <input placeholder="Поиск..."/>
                </div>
            </div>
            <div className="sneakersList d-flex">
                {renderCardList()}
            </div>
        </div>
    );
};

export default ProductsList;