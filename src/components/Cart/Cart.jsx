import React from 'react';
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getNewCart, setPrice } from "../../utilites/utilites";
import { SET_CART_LIST } from "../../actions/card";

const Cart = ({ openCart }) => {
    const cart = useSelector((state => state.cardReducer.cart));
    const renderCardList = () => cart.map((card, index) =>
        <CartItem
            onCardDelete={handleDeleteCard}
            card={card}
            key={index}
        />);
    const dispatch = useDispatch();

    const setBodyOverlayHidden = () => {
        document.body.style.overflow = 'hidden';
    }
    setBodyOverlayHidden();

    const setBodyOverlay = () => {
        document.body.style.overflow = '';
    }

    const handleCloseCart = () => {
        setBodyOverlay();
        openCart();
    }

    const handleDeleteCard = (currentCard) => {
        const newCart = getNewCart(currentCard, cart);
        dispatch({
            type: SET_CART_LIST,
            payload: newCart,
        });
    }

    const setDiscount = () => Math.round(setPrice(cart) * 5) / 100;
    const setTotalPrice = () => setPrice(cart) - setDiscount(cart);

    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <div className="d-flex justify-between mb-30">
                    <h2 className="d-flex"> Корзина</h2>
                    <img width={30} height={30} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={handleCloseCart}/>
                </div>
                <div className="item cartCardList mb-30" >
                    {!cart.length &&
                        <h2 className="item d-flex justify-center align-center pb-50">Товары отсутствуют =)</h2>
                    }
                    {renderCardList()}
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Сумма:</span>
                            <div></div>
                            <b>{`${setPrice(cart)} руб.`}</b>
                        </li>
                        <li>
                            <span>Скидка 5%:</span>
                            <div></div>
                            <b>{`${setDiscount()} руб.`}</b>
                        </li>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>{`${setTotalPrice()} руб.`}</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
                </div>
            </div>
        </div>
    );
};

export default Cart;