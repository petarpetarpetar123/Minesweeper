import {combineReducers} from 'redux';
import GameReducer from '../Game/GameReducer';

const rootReducer = combineReducers({
  game: GameReducer
});
export default rootReducer;