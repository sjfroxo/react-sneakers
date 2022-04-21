import axios from "axios";

export const getCard = () => {
    return axios.get(`http://localhost:5000/api/cards/`).then(
        res => res).catch((error) =>
    console.log(error));
}

export const getCardById = (cardId) => {
    return axios.get(`http://localhost:5000/api/cards/${cardId}`).then(
        res => res).catch((error) =>
        console.log(error));
}
