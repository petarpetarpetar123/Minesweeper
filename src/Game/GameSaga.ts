import { take, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { OPEN_FIELD, GAME_LOST, GAME_WIN, NEW_GAME, SHOW_MAP } from './GameActions';
import { normalizeApiData } from './Helper';
import { ws } from '../Helpers/webSocket';

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
        console.log('data', data);
        if (data === 'new: OK') {
            yield put({ type: NEW_GAME });
            ws.send('map');
        } else if (data === 'open: OK') {
            yield put({ type: OPEN_FIELD });
            ws.send('map');
        } else if (data === 'open: You lose') {
            yield put({ type: GAME_LOST });
            ws.send('map');
        } else if (data.startsWith('open: You win')) {
            yield put({ type: GAME_WIN });
            ws.send('map');
        } else if (data.startsWith('map:')) {
            yield put({ type: SHOW_MAP, payload: normalizeApiData(data) });
        }
    }
}