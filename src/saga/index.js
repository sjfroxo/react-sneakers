import { spawn } from 'redux-saga/effects'
import cardSaga from "./cardSaga";

export default function * rootSaga() {
    yield spawn(cardSaga);
}
