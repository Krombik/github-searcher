import { ActionTypes, SearchActions } from "./type";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

type State = {
  history: string[];
};

const initialState: State = {
  history: [],
};

const config: PersistConfig<any> = {
  key: "search",
  storage: storage,
  whitelist: ["history"],
};

export default persistReducer<State, SearchActions>(
  config,
  (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.SET_HISTORY:
        return {
          ...state,
          history: action.payload,
        };
      default:
        return state;
    }
  }
);
