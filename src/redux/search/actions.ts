import { ThunkResult } from "types";
import { HISTORY_MAX_LENGTH } from "utils/constant";
import { ActionTypes } from "./type";

export const updateHistory = (newItem: string): ThunkResult => (
  dispatch,
  getState
) => {
  const { history } = getState().search;

  const indexOfNewItem = history.indexOf(newItem);

  const newHistory =
    indexOfNewItem === -1
      ? [newItem, ...history.slice(0, HISTORY_MAX_LENGTH - 1)]
      : [
          newItem,
          ...history.slice(0, indexOfNewItem),
          ...history.slice(indexOfNewItem + 1, HISTORY_MAX_LENGTH),
        ];

  dispatch({
    type: ActionTypes.SET_HISTORY,
    payload: newHistory,
  });
};
