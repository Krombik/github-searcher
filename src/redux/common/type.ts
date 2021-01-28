export enum ActionTypes {
  SET_DARK = "SET_DARK",
  SET_TOKEN = "SET_TOKEN",
  SET_OFFSET = "SET_OFFSET",
}

type SetDark = {
  type: ActionTypes.SET_DARK;
  payload: boolean;
};

type SetToken = {
  type: ActionTypes.SET_TOKEN;
  payload: string;
};

type SetOffset = {
  type: ActionTypes.SET_OFFSET;
  payload: number;
};

export type CommonActions = SetDark | SetToken | SetOffset;
