import React, {useState} from 'react';
import { useSelector } from "react-redux";
import ShoeSizeButtonsList from "./ShoeSizeButtonsList";
import { SHOE_SIZE_VALUES } from "../../constants/values";

const ProductDetails = () => {
    const product = useSelector((state => state.cardReducer.card));
    const [getShoeSizeValue, setShoeSizeValue] = useState("");

    const getCurrentValue = (e) => {
        e.preventDefault();
        setShoeSizeValue(getShoeSizeValue + e.target.value);
    }

    return (
        <div className="detailsBlock">
            <div className="d-flex justify-around align-center mb-50">
                <div className="detailsImg d-flex justify-center">
                    <img width={400} height={377} src={`http://localhost:5000/${product.picture}`} alt={product.title}/>
                </div>
                <div className="details">
                    <h2>{product.brand} {product.model}</h2>
                    <p>Цвет: зелёный</p>
                    <p>Цена: {`${product.price} руб.`}</p>
                    <div className="shoeSize">
                        <p>Размеры:</p>
                        <ShoeSizeButtonsList handleGetValue={getCurrentValue} valueList={SHOE_SIZE_VALUES} />
                    </div>
                    <button className="addToCart mt-20">Добавить в корзину</button>
                </div>
            </div>
            <div>
                <h1>
                    {product.title} {product.brand} {product.model}
                </h1>
                <div className="description">
                    <h3>Описание:</h3>
                    <p>
                        Мужские кроссовки Nike Blazer Mid Air с верхом из нейлона с накладками замши и кожи. Дизайн
                        модели вдохновлен динамикой городской жизни.
                    </p>
                </div>
                <div>
                    <h3>Подробности:</h3>
                    <div className="clarificationBlock d-flex">
                        <div className="clarification">
                            <p>Артикул:</p>
                            <p>Бренд:</p>
                            <p>Верх:</p>
                            <p>Материал подкладки:</p>
                            <p>Цвет:</p>
                            <p>Вид товара:</p>
                        </div>
                        <div className="clarification">
                            <p>Сезон:</p>
                            <p>Стиль:</p>
                            <p>Страна:</p>
                            <p>Пол:</p>
                            <p>Застежка:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;