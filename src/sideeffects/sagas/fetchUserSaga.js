import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_USER_DATA, SET_USER_DATA } from '../actions/constants';

export default function* fetchDataSaga(action) {
    try {
        const response = yield call(axios.get, 'http://localhost:3030/posts')
        yield put({ type: SET_USER_DATA, data: response.data })
    } catch (error) {
        // Error handle
    }
}

export function* watchFetchData() {
    yield takeLatest(FETCH_USER_DATA, fetchDataSaga)
}