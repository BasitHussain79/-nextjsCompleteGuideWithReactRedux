import {
  CLEAR_ERRORS,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_SUCCESS
} from "../constants/roomConstants";

const initialState = {
  room: [],
};

export const roomDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROOM_DETAILS_SUCCESS:
      return {
       room: action.payload
      };

    case ROOM_DETAILS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

