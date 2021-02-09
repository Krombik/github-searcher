import { CommonActions } from "redux/common/type";
import { RehydrateAction } from "redux-persist";
import { AlertActions } from "redux/alert/type";
import { SearchActions } from "redux/search/type";

export type Actions =
  | CommonActions
  | AlertActions
  | RehydrateAction
  | SearchActions;
