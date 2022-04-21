import { call, put, takeLatest} from 'redux-saga/effects';
import {
    GET_CARD,
    GET_CARD_BY_ID, GET_CARD_BY_ID_REQUESTED, GET_CARD_REQUESTED,
} from "../actions/card";
import { getCard, getCardById } from "../api/cardApi";

function* getCardData() {
    const data = yield call(getCard);
    yield put({type: GET_CARD, payload: data.data});
}

function* getCardByIdData({ payload }) {
    const data = yield call(getCardById, payload);
    yield put({type: GET_CARD_BY_ID, payload: data.data});
}

function* cardSaga() {
    yield takeLatest(GET_CARD_REQUESTED, getCardData);
    yield takeLatest(GET_CARD_BY_ID_REQUESTED, getCardByIdData);
}

export default cardSaga;