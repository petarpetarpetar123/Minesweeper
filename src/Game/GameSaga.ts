import { take, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { normalizeApiData } from './Helper';
import { ws } from '../app/webSocket';
import {
    showMap,
    setNewGame,
    gameLose,
    gameWin

} from './GameSlice';

const initChannel = () => {
    return eventChannel(emit => {
        ws.onopen = () => {
            ws.send('new 1');
        };

        ws.onmessage = (e) => {
            const data = e.data;
            return emit({ data });
        }
        return () => ws.close();
    });
}

export default function* gameSaga() {
    const chanel = yield call(initChannel);

    while (true) {
        const event = yield take(chanel);
        const data = event && event.data ? event.data : '';

        if (data === 'new: OK') {
            yield put(setNewGame());
            ws.send('map');
        } else if (data === 'open: OK') {
            ws.send('map');
        } else if (data === 'open: You lose') {
            yield put(gameLose());
            ws.send('map');
        } else if (data.startsWith('open: You win')) {
            yield put(gameWin());
            ws.send('map');
        } else if (data.startsWith('map:')) {
            yield put(showMap(normalizeApiData(data)));
        }
    }
}