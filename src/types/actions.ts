import { CommonActions } from "redux/common/type";
import { RehydrateAction } from "redux-persist";
import { AlertActions } from "redux/alert/type";

export type Actions = CommonActions | AlertActions | RehydrateAction;
