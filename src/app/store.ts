import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import gameReducer from '../Game/GameSlice';
import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(middleware),
});

sagaMiddleware.run(rootSaga);


export type RootState = ReturnType<typeof store.getState>;