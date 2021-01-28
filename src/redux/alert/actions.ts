import { ThunkResult } from "types";
import { ActionTypes, SetAlertPayloadType } from "./type";
import { FetcherFailError } from "types/error";

export const setAlert = (
  show: boolean,
  data?: FetcherFailError
): ThunkResult => (dispatch) => {
  let payload: SetAlertPayloadType;
  if (show && data) {
    const { status, message, error } = data;

    payload = {
      show,
      text:
        message ||
        (typeof error === "string"
          ? error
          : status === 401
          ? "Unauthorized"
          : status === 403
          ? "Access denied"
          : status === 404
          ? "Not Found"
          : status === 500
          ? "Internal Server Error"
          : "Something going wrong"),
    };
  } else {
    payload = { show };
  }

  dispatch({
    type: ActionTypes.SET_ALERT,
    payload,
  });
};
