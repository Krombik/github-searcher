export enum ActionTypes {
  SET_HISTORY = "SET_HISTORY",
}

type SetHistory = {
  type: ActionTypes.SET_HISTORY;
  payload: string[];
};

export type SearchActions = SetHistory;
