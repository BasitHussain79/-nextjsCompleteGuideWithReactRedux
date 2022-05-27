import {
  ALL_ROOMS_FAIL, ALL_ROOMS_SUCCESS, CLEAR_ERRORS
} from "../constants/roomConstants";

const initialState = {
  rooms: [],
};

export const allRoomsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case REGISTER_USER_REQUEST:
    //   return {
    //     loading: true,
    //   };

    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
      };

    case ALL_ROOMS_FAIL:
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
