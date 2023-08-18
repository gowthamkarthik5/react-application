import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducuer/rootReducer"
import fetchDataSaga from "./sagas/fetchUserSaga";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: () => [ sagaMiddleware ]
})

sagaMiddleware.run(fetchDataSaga)

export default store
