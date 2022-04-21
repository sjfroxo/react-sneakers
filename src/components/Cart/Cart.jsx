import React from 'react';
import CartItem from "./CartItem";

const Cart = () => {
    return (
        <div style={{ display: 'block' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>
                    <div>
                        <CartItem />
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 498 руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%</span>
                                    <div></div>
                                    <b>1074 руб.</b>
                                </li>
                            </ul>
                            <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Cart;