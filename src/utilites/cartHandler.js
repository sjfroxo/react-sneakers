export const getNewCart = (card, cart) => {
    let newList = [...cart];
    if(!cart.map(item => item._id).includes(card._id)){
        newList.push(card);
    }
    else {
        newList = newList.filter(item => item._id !== card._id)
    }
    return newList;
}

export const getNewFavorite = (card, favorite) => {
    let newList = [...favorite];
    if(!favorite.map(item => item._id).includes(card._id)){
        newList.push(card);
    }
    else {
        newList = newList.filter(item => item._id !== card._id)
    }
    return newList;
}
