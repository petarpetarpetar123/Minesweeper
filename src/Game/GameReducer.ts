import { OPEN_FIELD, GAME_LOST, GAME_WIN, NEW_GAME, SHOW_MAP } from './GameActions';

export interface State {
    fields: any;
    lost: boolean;
    win: boolean;
}

export interface Action {
    type: string;
    payload: any;
}

const initialState = { fields: null, lost: false, win: false };

const gameReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case OPEN_FIELD:
            return {
                fields: state.fields,
            };
        case SHOW_MAP:
            return {
                fields: action.payload,
                lost: state.lost,
                win: state.win
            };
        case GAME_LOST:
            return {
                fields: state.fields,
                lost: true
            };
        case GAME_WIN:
            return {
                fields: state.fields,
                win: true
            };
        case NEW_GAME:
            return {
                fields: state.fields,
                lost: false,
                win: false
            };
        default:
            return state;
    }
};

export default gameReducer;