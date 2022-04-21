import React from 'react';
import { useSelector } from "react-redux";

const CartItem = () => {
    const addedToCart = useSelector((state => state.cardReducer.card));

    return (
        <div className="items">
            <div className="cartItem d-flex align-center mb-20">
                <div className="cartItemImg">
                    <img width={82} height={70} src={`http://localhost:5000/${addedToCart.picture}`} alt={addedToCart.title}/>
                </div>
                <div className="mr-20 flex">
                    <p className="mb-5">{addedToCart.title} {addedToCart.brand} {addedToCart.model}</p>
                    <b>{addedToCart.price}</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
        </div>
    );
};

export default CartItem;