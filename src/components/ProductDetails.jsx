import React from 'react';
import { useSelector } from "react-redux";

const ProductDetails = () => {
    const product = useSelector((state => state.cardReducer.card));

    return (
        <div className="detailsBlock m-40">
            <div>
                <div>
                    <img width={400} height={377} src={`http://localhost:5000/${product.picture}`} alt={product.title}/>
                </div>
                <div className="details">
                    <h2>{product.title} {product.brand} {product.model}</h2>
                    <p>Цвет: "red"</p>
                    <p>Цена: {product.price}</p>
                    <div className="shoeSize">
                        <p>Размеры:</p>
                        <button className="chooseSize">40</button>
                    </div>
                    <button className="addToCart">Добавить в корзину</button>
                </div>
            </div>
            <div>
                <h1>
                    {product.title} {product.brand} {product.model}
                </h1>
                <div>
                    <span>Описание:</span>
                    <p>
                        Мужские кроссовки Nike Blazer Mid Air с верхом из нейлона с накладками замши и кожи. Дизайн
                        модели вдохновлен динамикой городской жизни.
                    </p>
                </div>
                <div>
                    <span>Подробности:</span>
                    <p>Артикул:</p>
                    <p>Бренд:</p>
                    <p>Верх:</p>
                    <p>Материал подкладки:</p>
                    <p>Цвет:</p>
                    <p>Вид товара:</p>
                    <p>Сезон:</p>
                    <p>Стиль:</p>
                    <p>Страна:</p>
                    <p>Пол:</p>
                    <p>Застежка:</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;