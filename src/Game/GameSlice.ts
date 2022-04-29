import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  fields?: any,
  lost: boolean,
  win: boolean,
  loading: boolean
};

const initialState: GameState = {
  fields: null,
  lost: false,
  win: false,
  loading: true
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setNewGame(state) {
      state.lost = false
      state.win = false
      state.loading = true
    },
    showMap(state, action: PayloadAction<any>) {
      state.fields = action.payload
      state.loading = false
    },
    gameWin(state) {
      state.win = true
    },
    gameLose(state) {
      state.lost = true
    }
  }
});

export const { setNewGame, showMap, gameWin, gameLose } = gameSlice.actions;
export default gameSlice.reducer;